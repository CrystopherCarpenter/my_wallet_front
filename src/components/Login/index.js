import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import UserContext from "../../Context/UserContext";
import { Container, Input, Button, PageLink, Logo } from "./style";
import { ThreeDots } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import axios from "axios";

function Login() {
  const { setToken } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const navigate = useNavigate();
  const inputs = [{ type: "email", placeholder: "E-mail", set: setEmail, value: email },
  { type: "password", placeholder: "Senha", set: setPassword, value: password }];

  function inputGenerator({ type, placeholder, set, value }) {
    return (
      <Input
        type={type}
        placeholder={placeholder}
        disabled={loading}
        validation = {validation(value)}
        onChange={(e) => {
          validation(value);
          set(e.target.value);
        }}
        value={value}
      ></Input>
    );
  }

  function validation(value) {
    let validation = true;
    return (validation);
  }

  function login() {
     setLoading(true);
            const promise = axios.post(`http://localhost:5000/signin`, { email, password } );
            promise.then((answer) => {
              setToken(answer.data.token);
              navigate(`/wallet`);
            });
            promise.catch((error) => {
              setLoading(false);
              alert('Email ou senha incorretos')
            });
          }    
  
  return (
    <>
      <Logo login={true}>MyWallet</Logo>
      <Container>
        {inputs.map((input) => inputGenerator(input))}
        <Button
          disabled={loading}
          onClick={(e)=>login()}>
          {loading ? (<ThreeDots color="#FFFFFF" height={60} width={60} />) : (`Entrar`)}
        </Button>
      </Container>
      <Link to={"/signup"} disabled={loading}>
        <PageLink>Primeira vez? Cadastre-se!</PageLink>
      </Link>
    </>
  );
}

export default Login;
