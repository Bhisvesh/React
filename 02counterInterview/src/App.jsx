import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);
  

  const addValue = () => {
    setCounter(prevCounter => prevCounter + 1);   // using callback function to update previous state counter by increenting it by 1 thats now is 16.
    setCounter(prevCounter => prevCounter + 1);   // 17

    setCounter(prevCounter => prevCounter + 1);   // 18
    
   }
  const removeValue = () => {
    setCounter(counter - 1);
  
  }

  return (
    <>
     <h1>chai aur react</h1>
     <h2>Counter Value : {counter}</h2>
     <button onClick={(addValue)} >Add value{counter}  </button>
     <br/>
     <button onClick={(removeValue)}>remove value{counter}</button>
    </>
  )
}

export default App
