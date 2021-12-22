import './App.css';
import {useEffect, useState} from 'react'

function App() {
  const [advice, setAdvice] = useState('')

  const fetchData = () => {
    fetch('https://api.adviceslip.com/advice')
    .then(r => r.json())
    .then((data) => setAdvice(data.slip.advice))
  }

  return (
    <div className="App">
      <h1> <button onClick={() => fetchData()}> FJHSHWGJ </button> </h1>
      <h2>{advice} </h2>
    </div>
  );
}

export default App;
