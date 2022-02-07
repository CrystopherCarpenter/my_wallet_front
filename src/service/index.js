import axios from "axios";

 function loadData() {
    const promise = axios.get(`http://localhost:5000/mywallet`,
      { headers: { Authorization: `Bearer 50519212-6b87-4cef-bc1e-05e470fdfee3` } }
    );

    promise.then((answer) => {
      return(answer.data);
    })}
      
  function logout() {
    const promise = axios.post(`http://localhost:5000/logout`,
      { headers: { Authorization: `Bearer 50519212-6b87-4cef-bc1e-05e470fdfee3` } }
    );

    promise.then(() => { 
      navigate(`/`);
    })}
  

export { loadData, logout };