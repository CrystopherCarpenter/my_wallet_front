import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './css/style';
import SignIn from './pages/SignIn/index';
import SignUp from './pages/SignUp/index';
import Wallet from './pages/Wallet/index';
import NewData from './pages/NewData/index';
import { AuthProvider } from './contexts/AuthContext';

function App() {
	return (
		<>
			<GlobalStyle />
			<AuthProvider>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<SignIn />}></Route>
						<Route path='/signup' element={<SignUp />}></Route>
						<Route path='/wallet' element={<Wallet />}></Route>
						<Route
							path='/add/:incomeOrExpense'
							element={<NewData />}
						></Route>
					</Routes>
				</BrowserRouter>
			</AuthProvider>
		</>
	);
}

export default App;
