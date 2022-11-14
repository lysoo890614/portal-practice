import './App.css';
import axios from 'axios';
import {useState} from "react";



function App() {
    const [success, setSuccess] = useState('');
    async function onclick() {
        let result = await axios.get('http://3.39.236.94:8080/home');
        console.log(result);
        setSuccess(result?.data.message);
    }


  return (
    <div className="App">
        <div>
            API Call Test: <span>{success}</span><br/>
            <button onClick={()=>onclick()}>API Call</button>
        </div>
    </div>
  );
}

export default App;
