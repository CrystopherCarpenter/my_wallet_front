import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header, Name, Container, Data, Day, Description, Text, Value, Balance, Buttons, Button, Icon, None} from './style';
import LogOut from '../../assets/logOut.png';
import Income from '../../assets/income.png';
import Expense from '../../assets/expense.png'
import axios from "axios";

function Wallet() {
  let balanceSum = 0;
  const [balanceType, setBalanceType] = useState('');
  const [balance, setBalance] = useState(0);
  const data = {
    id: '9203817482093847', name: 'Petit Gateau', senhaCriptografada: 'HAHAHAHANÃOMEPEGA', registers: [{ day: '31/02', description: 'dinheiro de pinga', value: '2568', type: 'expense' },
    { day: '31/02', description: 'dinheiro de pinga 2', value: '5268', type: 'expense' },
    { day: '31/02', description: 'dinheiro da mega', value: '25680000', type: 'income' },
    { day: '31/02', description: 'salário', value: '99968', type: 'income' },
    { day: '31/02', description: 'dinheiro de pinga 3', value: '9568', type: 'expense' }]
  }; 
useEffect(() => {
       loadData();
        }, []);

  function loadData() {
    const promise = axios.get(`http://localhost:5000/mywallet`,
      { headers: { Authorization: `Bearer 88d1a063-cb7f-43da-b531-c1d1321fcb63` } }
    );

    promise.then((answer) => console.log(answer)
      //setData(data);
      //data.data.forEach(data => (
      // data.type === 'income' ? balanceSum += parseInt(data.value) : balanceSum -= parseInt(data.value)
      //));
      //{ balanceSum > 0 ? setBalanceType('income') : setBalanceType('expense') };
      //setBalance(balanceSum);
    )}
  
  function printData() {
    if (data.registers.length === 0) {
      return <Container><None>Não há registros de entrada ou saída</None></Container>
    } else {
      return (
        <Container>
          <ul>
              {data.registers.map(data => (
              <li><Data><Day>{data.day}</Day><Description><Text>{data.description}</Text><Value type={data.type}>{parseInt(data.value).toFixed(2).replace('.',',')}</Value></Description></Data></li>
                ))}
          </ul>
          <Balance><span>SALDO</span><Value type={balanceType}>{balance.toFixed(2).replace('.', ',')}</Value></Balance>
        </Container>
      );
    }
  }

  function logout() {

  }
  
  return (
    <>
      <Header><Name>Olá, {data.name}</Name><img src={LogOut} onClick={(e)=> logOut() }/></Header>
      {printData()}
      <Buttons><Link to={`/add/income`}>
        <Button><Icon src={Income}/><span>Nova entrada</span></Button>
      </Link>
      <Link to={`/add/expense`}>
          <Button><Icon src={Expense}/><span>Nova saida</span></Button>
        </Link>
      </Buttons>
  </>
  );
}

export default Wallet;
