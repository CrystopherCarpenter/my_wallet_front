import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../Context/UserContext";
import { Header, Name, Container, Data, Day, Description, Text, Value, Balance, Buttons, Button, Icon, None} from './style';
import LogOut from '../../assets/logOut.png';
import Income from '../../assets/income.png';
import Expense from '../../assets/expense.png'
import axios from "axios";

function Wallet() {
  let balanceSum = 0;
  const [balanceType, setBalanceType] = useState('');
  const [balance, setBalance] = useState(0);
  const [data, setData] = useState();
  const { token } = useContext(UserContext);
  const navigate = useNavigate()

  useEffect(() => {
    loadData();  
  }, []);

  function loadData() {
    const promise = axios.get(`http://localhost:5000/mywallet`,
    { headers: { Authorization: `Bearer ${token}` } }
    );
    
    promise.then((answer) => {
      setData(answer.data);
      balanceCalc(answer.data.records);
    })
  }
    
  function logout() {
    const promise = axios.post(`http://localhost:5000/logout`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    
    promise.then(() => { 
      navigate(`/`);
    })
  }
  
  function balanceCalc(data) {
    data.forEach(record => (
      record.type === 'income' ? balanceSum += parseFloat(record.value) : balanceSum -= parseFloat(record.value)
    ));
    { balanceSum > 0 ? setBalanceType('income') : setBalanceType('expense') };
    setBalance(balanceSum);
  }
  
  function printData() {
    if (data.records.length === 0) {
      return <Container><None>Não há registros de entrada ou saída</None></Container>
    } else {
      return (
        <Container>
          <ul>
            {data.records.map(data => (
              <li><Data><Day>{data.day}</Day><Description><Text>{data.description}</Text><Value type={data.type}>{parseFloat(data.value).toFixed(2).replace('.',',')}</Value></Description></Data></li>
            ))}
          </ul>
          <Balance><span>SALDO</span><Value type={balanceType}>{balance.toFixed(2).replace('.', ',')}</Value></Balance>
        </Container>
      );
    }
  }
  
  if (!data) {
    return <Name>Carregando...</Name>
  }
  
  return (
    <>
      <Header><Name>Olá, {data.name}</Name><img src={LogOut} onClick={()=> logout() }/></Header>
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
