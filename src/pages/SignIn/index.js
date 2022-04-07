import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import {
    Container,
    Input,
    Button,
    PageLink,
    Logo,
} from '../../components/FormComponents';
import { ThreeDots } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import useAuth from '../../hooks/useAuth';
import api from '../../services/api';
import Swal from 'sweetalert2';

function SignIn() {
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();
    const { auth } = useAuth();

    useEffect(() => {
        if (auth && auth !== '') {
            setLoading(true);
            authValidation();
        }
    }, []);

    async function authValidation() {
        try {
            await api.authToken(auth.token);
            navigate('/wallet');
            setLoading(false);
        } catch {
            Swal.fire({
                text: 'Faça login para continuar',
            });
            setLoading(false);
        }
    }

    function handleSetUser({ target }) {
        setUserData({ ...userData, [target.name]: target.value });
    }

    async function handleLogin() {
        setLoading(true);

        try {
            const { data } = await api.login(userData);
            saveToken(data.token);
            navigate(`/wallet`);
        } catch {
            setLoading(false);
            Swal.fire({
                icon: 'error',
                title: 'Ops!',
                text: 'Email ou senha incorretos',
            });
        }
    }

    return (
        <>
            <Logo login={true}>MyWallet</Logo>
            <Container>
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
                <Button disabled={loading} onClick={(e) => handleLogin()}>
                    {loading ? (
                        <ThreeDots color="#FFFFFF" height={60} width={60} />
                    ) : (
                        `Entrar`
                    )}
                </Button>
            </Container>
            <Link to={'/signup'} disabled={loading}>
                <PageLink>Primeira vez? Cadastre-se!</PageLink>
            </Link>
        </>
    );
}

export default SignIn;
