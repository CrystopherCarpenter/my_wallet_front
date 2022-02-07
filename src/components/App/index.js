import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./style";
import Login from "../Login/index";
import SignUp from "../SignUp/index";
import Wallet from "../Wallet/index";
import NewData from "../NewData/index";
import UserContext from "../../Context/UserContext";
import { useState } from "react";

function App() {
        const [token, setToken] = useState(null); 

  return ( 
    <>
      <GlobalStyle />
      <UserContext.Provider value={{ token, setToken }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/wallet" element={<Wallet />}></Route>
            <Route path="/add/:incomeOrExpense" element={<NewData />}></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
