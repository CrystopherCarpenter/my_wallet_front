import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './style'

function App() {
        
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={< />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
