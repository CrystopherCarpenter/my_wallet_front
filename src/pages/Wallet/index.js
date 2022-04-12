import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    Header,
    Name,
    Container,
    Data,
    Day,
    Description,
    Text,
    Value,
    Balance,
    Buttons,
    Button,
    Icon,
    None,
    Icons,
} from './style';
import LogOut from '../../assets/logOut.png';
import Income from '../../assets/income.png';
import Expense from '../../assets/expense.png';
import Trash from '../../assets/trashCan.png';
import Edit from '../../assets/edit.png';
import useAuth from '../../hooks/useAuth';
import api from '../../services/api';
import Swal from 'sweetalert2';

function Wallet() {
    let balanceSum = 0;
    const [balanceType, setBalanceType] = useState('');
    const [balance, setBalance] = useState(0);
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const { auth } = useAuth();

    useEffect(() => {
        if (!auth | (auth === '')) {
            Swal.fire({
                text: 'Faça login para continuar',
            });
            navigate('/');
        } else {
            authValidation();
        }
    }, []);

    async function authValidation() {
        try {
            await api.authToken(auth);
            loadData();
        } catch {
            Swal.fire({
                text: 'Faça login para continuar',
            });
            navigate('/');
        }
    }

    async function loadData() {
        try {
            const { data } = await api.getUserData(auth);
            setData(data);
            balanceCalc(data.records);
        } catch {
            Swal.fire({
                icon: 'error',
                title: 'Ops!',
                text: 'Recarregue a página',
            });
            setData([]);
        }
    }

    async function logout() {
        try {
            await api.logout(auth);
            localStorage.clear();
            navigate(`/`);
        } catch {
            Swal.fire({
                icon: 'error',
                title: 'Ops!',
                text: 'Ocorreu um erro, tente novamente',
            });
        }
    }

    async function editRecord({ id }) {
        Swal.fire({
            icon: 'info',
            text: 'Funcionalidade será implementada em breve',
        });
    }

    async function deleteRecord({ id }) {
        Swal.fire({
            icon: 'info',
            text: 'Funcionalidade será implementada em breve',
        });
    }

    function balanceCalc(data) {
        data.forEach((record) => {
            if (record.type === 'income') {
                balanceSum += parseFloat(record.value);
            } else {
                balanceSum -= parseFloat(record.value);
            }
            if (balanceSum > 0) {
                setBalanceType('income');
            } else {
                setBalanceType('expense');
            }
            setBalance(balanceSum.toFixed(2).replace('.', ','));
        });
    }

    function recordInfo(data) {
        const value = parseFloat(data.value).toFixed(2).replace('.', ',');
        return (
            <li key={data.id}>
                <Data>
                    <Day>{data.date}</Day>
                    <Description>
                        <Text>{data.description}</Text>
                        <Value type={data.type}>
                            {value}
                            <Icons
                                src={Edit}
                                alt="editar"
                                id={data._id}
                                onClick={(e) => editRecord(e.target)}
                            />
                            <Icons
                                src={Trash}
                                alt="deletar"
                                id={data._id}
                                onClick={(e) => deleteRecord(e.target)}
                            />
                        </Value>
                    </Description>
                </Data>
            </li>
        );
    }

    function PrintData() {
        if (!data.records || data.records.length === 0) {
            return (
                <Container>
                    <None>Não há registros de entrada ou saída</None>
                </Container>
            );
        } else {
            return (
                <Container>
                    <ul>{data.records.map((data) => recordInfo(data))}</ul>
                    <Balance>
                        <span>SALDO</span>
                        <Value type={balanceType}>{balance}</Value>
                    </Balance>
                </Container>
            );
        }
    }

    if (!data) {
        return <Name>Carregando...</Name>;
    }

    return (
        <>
            <Header>
                <Name>Olá, {data.name}</Name>
                <img src={LogOut} onClick={() => logout()} />
            </Header>
            <PrintData />
            <Buttons>
                <Link to={`/add/income`}>
                    <Button>
                        <Icon src={Income} />
                        <span>Nova entrada</span>
                    </Button>
                </Link>
                <Link to={`/add/expense`}>
                    <Button>
                        <Icon src={Expense} />
                        <span>Nova saida</span>
                    </Button>
                </Link>
            </Buttons>
        </>
    );
}

export default Wallet;
