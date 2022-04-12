import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { ThreeDots } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import {
    Container,
    Input,
    Button,
    PageLink,
    Logo,
} from '../../components/FormComponents';
import api from '../../services/api';
import Swal from 'sweetalert2';

function SignUp() {
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        passwordConf: '',
    });
    const navigate = useNavigate();

    function handleSetUser({ target }) {
        setUserData({ ...userData, [target.name]: target.value });
    }

    async function handleSignup() {
        if (userData.passwordConf !== userData.password) {
            Swal.fire({
                icon: 'error',
                title: 'Ops!',
                text: 'As senhas devem ser iguais',
            });
            return;
        }

        const user = { ...userData };

        delete user.passwordConf;

        setLoading(true);
        try {
            const res = await api.createUser(user);
            navigate(`/`);
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Ops!',
                text: 'Verifique os dados e tente novamente',
            });
            setLoading(false);
        }
    }

    return (
        <>
            <Logo login={false}>MyWallet</Logo>
            <Container>
                <Input
                    type="text"
                    placeholder="Nome"
                    name="name"
                    disabled={loading}
                    onChange={(e) => handleSetUser(e)}
                    value={userData.name}
                    required
                ></Input>
                <Input
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    disabled={loading}
                    onChange={(e) => handleSetUser(e)}
                    value={userData.email}
                    required
                ></Input>
                <Input
                    type="password"
                    placeholder="Senha"
                    name="password"
                    disabled={loading}
                    onChange={(e) => handleSetUser(e)}
                    value={userData.password}
                    required
                ></Input>
                <Input
                    type="password"
                    placeholder="Confirme a Senha"
                    name="passwordConf"
                    disabled={loading}
                    onChange={(e) => handleSetUser(e)}
                    value={userData.passwordConf}
                    required
                ></Input>
                <Button disabled={loading} onClick={() => handleSignup()}>
                    {loading ? (
                        <ThreeDots color="#FFFFFF" height={60} width={60} />
                    ) : (
                        `Cadastrar`
                    )}
                </Button>
            </Container>
            <Link to={'/'} disabled={loading}>
                <PageLink>Já tem uma conta? Faça login!</PageLink>
            </Link>
        </>
    );
}

export default SignUp;
