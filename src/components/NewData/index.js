import {useState} from 'react';
import { useParams } from 'react-router-dom';
import { ThreeDots } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Name, Container, Input, Button } from './style'
import axios from "axios";

function NewData() {
  const [value, setValue] = useState();
  const [description, setDescription] = useState();
  const [loading, setLoading] = useState(false);
  const params = useParams();
 
  const inputs = [{ type: "currency", placeholder: "Valor", set: setValue, value: value },
    { type: "text", placeholder: "Descrição", set: setDescription, value: description }]

  function inputGenerator(type, placeholder, set, value) {
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

  return (
    <>
      <Container>
        <Name>Nova {params.incomeOrExpense === 'income' ? 'entrada' : 'saída'}</Name>
        {inputs.map(({ type, placeholder, set, value }) => inputGenerator(type, placeholder, set, value))}
        <Button
            disabled={loading}
            onClick={() => {
              setLoading(true);
              const promise = axios.post(``, signUp);
              promise.then(() => {
                navigate(`/`);
              });
              promise.catch(() => {
                alert(`Verifique os dados e tente novamente`);
                setLoading(false);
              });
            }}
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