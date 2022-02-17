import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import { useNavigate } from 'react-router';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Container, Input, Button } from '../../components/FormComponents';
import { Name, Back } from '../../components/Header';
import BackArrow from '../../assets/back.png';
import api from '../../services/api';
import useAuth from '../../hooks/useAuth';

function NewData() {
	const params = useParams();
	const [data, setData] = useState({
		value: '',
		description: '',
		type: params.incomeOrExpense,
	});
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const { auth } = useAuth();

	function handleSetData({ target }) {
		setData({ ...data, [target.name]: target.value });
	}

	async function handleInsertData() {
		setLoading(true);
		try {
			await api.createRecord(auth, data);
			setData({
				value: '',
				description: '',
				type: params.incomeOrExpense,
			});
			setLoading(false);
		} catch (error) {
			console.log(error);
			alert('Algo deu errado... tente novamente');
			setLoading(false);
		}
	}

	return (
		<>
			<Back
				src={BackArrow}
				alt='Voltar'
				onClick={() => navigate(-1)}
			></Back>
			<Container>
				<Name>
					Nova{' '}
					{params.incomeOrExpense === 'income' ? 'entrada' : 'saída'}
				</Name>
				<Input
					type='courency'
					placeholder='Valor'
					name='value'
					disabled={loading}
					onChange={(e) => handleSetData(e)}
					value={data.value}
					required
				></Input>
				<Input
					type='text'
					placeholder='Descrição'
					name='description'
					disabled={loading}
					onChange={(e) => handleSetData(e)}
					value={data.description}
					required
				></Input>
				<Button disabled={loading} onClick={() => handleInsertData()}>
					{loading ? (
						<ThreeDots color='#FFFFFF' height={60} width={60} />
					) : (
						`Cadastrar`
					)}
				</Button>
			</Container>
		</>
	);
}

export default NewData;
