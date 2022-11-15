import './App.css';
import axios from 'axios';
import {useState} from "react";



function App() {
    const [success, setSuccess] = useState('');
    async function onclick() {
        let result = await axios.get('http://back-lb-757133604.ap-northeast-2.elb.amazonaws.com/home');
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
