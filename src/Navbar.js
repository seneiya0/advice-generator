import './Navbar.css';
import {FaSearch} from 'react-icons/fa'

function Navbar(){
    return(
      <div id='nav'>
        <h2> Advice Generator</h2>
        <button id='search'> <FaSearch /> </button>
      </div>
    )
  }

  export default Navbar