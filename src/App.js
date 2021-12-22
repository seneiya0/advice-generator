import './App.css';
import { useState } from 'react';
import AdviceContainer from './AdviceContainer';
import Navbar from './Navbar';

function App() {
  const [advice, setAdvice] = useState('')
  const [value, setValue] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [noResults, setNoResults] = useState('')
  const [searched, setSearched] = useState(false)

  const fetchData = () => {
    fetch('https://api.adviceslip.com/advice')
    .then(r => r.json())
    .then((data) => setAdvice(data.slip.advice))
  }

  function handleSubmit(e){
    e.preventDefault()
    setSearched(true)
    fetch(`https://api.adviceslip.com/advice/search/${value}`)
    .then(r => r.json())
    .then(r => r.message? setNoResults(`No advice slips found matching ${value}, try another search.`) : setSearchResults(r.slips))
  }

  console.log(searchResults)
  console.log(noResults)

  return (
    <div className="App">
    {!searched && (
      <div>
      <div>
        <Navbar handleSubmit={handleSubmit} value={value} setValue={setValue} />
      </div>
      <div className="container">
        {!advice && (
          <button className='button' onClick={() => fetchData()}> Generate Advice </button>
        )}
      </div>
      <AdviceContainer advice={advice} fetchData={fetchData}/>
      </div>
      )}
      {searched && (
        <div>
          <Navbar handleSubmit={handleSubmit} value={value} setValue={setValue} />
          <h3 style={{color:'white'}}> {searchResults.map((r) => <h3 id='search-results'> {r.advice} </h3>)} </h3>
          <h3 style={{color:'white'}}> {noResults} </h3>
          <button className='button' onClick={() => setSearched(false)}> Home </button>
        </div>
      )}
    </div>
  );
}

export default App;
