import "./App.css";
import "axios";
import { Button } from "@mui/material";
import axios from 'axios';

function App() {

  
  const headers = {
    "Content-Type": "application/json",

  };

  function login() {
    axios
      .post(
        "http://localhost:8000/api/user/login",
        { username: "hsipl206", password: "hsipl206" },
        {
          headers: {
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
          },
          withCredentials: true
        }
      )
      .then((response) => console.log(response.data));
  }

  function store() {
    axios.get("http://localhost:8000/api/store",{
      headers: {
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
      },
      withCredentials: true
    }).then((res) => {
      console.log(res.data);
    });
  }
//   const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json',credentials: 'include',cookie:'' },
    
//     body: JSON.stringify({ username: "hsipl206", password: "hsipl206" })
// };
//   function login() {
//     fetch(
//         "http://140.125.45.167:8000/api/user/login",
//         requestOptions
//       )
//       .then((response) => console.log(response.headers));
//   }



  return (
    <div className="App">
      <Button variant="text" onClick={() => login()}>
        login
      </Button>
      <Button variant="text" onClick={() => store()}>
        store
      </Button>
    </div>
  );
}

export default App;
