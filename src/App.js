import './App.css';
import { useState } from 'react';
import AdviceContainer from './AdviceContainer';
import Navbar from './Navbar';

function App() {
  const [advice, setAdvice] = useState('')

  const fetchData = () => {
    fetch('https://api.adviceslip.com/advice')
    .then(r => r.json())
    .then((data) => setAdvice(data.slip.advice))
  }

  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div className="container">
        {!advice && (
          <button className='button' onClick={() => fetchData()}> Generate Advice </button>
        )}
      </div>
      <AdviceContainer advice={advice} fetchData={fetchData}/>
    </div>
  );
}

export default App;
