import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { Container, Input, Button, PageLink, Logo } from "./style";
import { ThreeDots } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import axios from "axios";

function Login() {
  //  const { setUser } = useContext(UserContext);
  // const { setToken } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const navigate = useNavigate();

   const inputs = [{ type: "email", placeholder: "E-mail", set: setEmail, value: email },
  { type: "password", placeholder: "Senha", set: setPassword, value: password }];

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
      <Logo login={true}>MyWallet</Logo>
      <Container>
        {inputs.map(({ type, placeholder, set, value }) => inputGenerator(type, placeholder, set, value))}
        <Button
          disabled={loading}
          onClick={() => {
            setLoading(true);
            const promise = axios.post(``, {
              email: `${email}`,
              password: `${password}`,
            });
            promise.then((answer) => {
              setUser(answer.data);
              setToken(answer.data.token);
              navigate(`/wallet`);
            });
            promise.catch(() => {
              setLoading(false);
            });
          }}
        >
          {loading ? (
            <ThreeDots color="#FFFFFF" height={60} width={60} />
          ) : (
            `Entrar`
          )}
        </Button>
      </Container>
      <Link to={"/signup"} disabled={loading}>
        <PageLink>Primeira vez? Cadastre-se!</PageLink>
      </Link>
    </>
  );
}

export default Login;
