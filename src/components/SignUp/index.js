import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { ThreeDots } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Container, Input, Button, PageLink, Logo } from "../Login/style";
import axios from "axios";

function SignUp() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(``);
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const [passwordConf, setPasswordConf] = useState(``);
  const navigate = useNavigate();
  const signUp = { name, email, password };
  const inputs = [{ type: "text", placeholder: "Nome", set: setName, value: name },
  { type: "email", placeholder: "E-mail", set: setEmail, value: email },
  { type: "password", placeholder: "Senha", set: setPassword, value: password },
  { type: "password", placeholder: "Confirme a senha", set: setPasswordConf, value: passwordConf }];

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
      <Logo login={false}>MyWallet</Logo>
      <Container>
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
      <Link to={"/"} disabled={loading}>
        <PageLink>Já tem uma conta? Faça login!</PageLink>
      </Link>
    </>
  );
}

export default SignUp;