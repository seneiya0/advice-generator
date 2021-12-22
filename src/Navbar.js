import './Navbar.css';
import {FaCloudShowersHeavy, FaSearch} from 'react-icons/fa'
import {useState} from 'react'

function Navbar({handleSubmit, setValue, value}){
  const [searching, setSearching] = useState(false)

    return(
      <div id='nav'>
        <h2 onClick={() => {window.location.reload()}}> Advice Generator</h2>
        {searching && (
        <form onSubmit={handleSubmit} >
          <input
          type='text'
          id='search-bar'
          placeholder='search...'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          />
        </form>
        )}
        <button id='search' onClick={() => setSearching(true)}> <FaSearch /> </button>
      </div>
    )
  }

  export default Navbar