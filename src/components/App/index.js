import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./style";
import Login from "../Login/index";
import SignUp from "../SignUp/index";
import Wallet from "../Wallet/index";
import NewData from "../NewData/index";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/wallet" element={<Wallet />}></Route>
          <Route path="/add/:incomeOrExpense" element={<NewData />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
