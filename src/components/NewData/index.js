import {useState, useContext} from 'react';
import { useParams } from 'react-router-dom';
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router";
import UserContext from "../../Context/UserContext";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Name, Container, Input, Button } from './style'
import axios from "axios";

function NewData() {
  const [value, setValue] = useState();
  const [description, setDescription] = useState();
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const { token } = useContext(UserContext);
  const navigate = useNavigate();
  const inputs = [{ type: "currency", placeholder: "Valor", set: setValue, value: value },
    { type: "text", placeholder: "Descrição", set: setDescription, value: description }]

  function inputGenerator({type, placeholder, set, value}) {
    return (
      <Input
        type={type}
        placeholder={placeholder}
        disabled={loading}
        onChange={(e) => {
          set(e.target.value);
        }}
        value={value}
      ></Input>
    );
  }

  function insertData() {
    setLoading(true);
    const promise = axios.post(`http://localhost:5000/newdata`, { value, description, type: params.incomeOrExpense },
    { headers: { Authorization: `Bearer ${token}` } });
    promise.then(() => {
      navigate(`/wallet`);
    });
    promise.catch(() => {
      setLoading(false);
    });
  }

  return (
    <>
      <Container>
        <Name>Nova {params.incomeOrExpense === 'income' ? 'entrada' : 'saída'}</Name>
        {inputs.map((input) => inputGenerator(input))}
        <Button
            disabled={loading}
            onClick={() => insertData()}
          >
            {loading ? (
              <ThreeDots color="#FFFFFF" height={60} width={60} />
            ) : (
              `Cadastrar`
            )}
        </Button>
      </Container>
    </>
  );
}

export default NewData;