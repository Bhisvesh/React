import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'

function App() {
  const [Color, setColor] = useState("olive")
  return(
    <>
  <div className = "w-full h-screen duration-200" style={{backgroundColor: Color}} >
    <div className = "fixed flex-wrap justify-centre bottom-12 inset-x-0 px-3 py-1"> 

        <div className ="flex flex-wrap justify-center gap-15 shadow-lg bg-white px-1 py-3 rounded-3xl">
          <button onClick={() => setColor("red")} className="outline-none px-4 py-2 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
          <button onClick={() => setColor("green")} className="outline-none px-4 py-2 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}}>Green</button>
           <button onClick={() => setColor("blue")} className="outline-none px-4 py-2 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}}>Blue</button>

          <button onClick={() => setColor("white")} className="outline-none px-4 py-2 rounded-full text-black shadow-lg" style={{backgroundColor: "white"}}>White</button>

          <button onClick={() => setColor("black")} className="outline-none px-4 py-2 rounded-full text-white shadow-lg" style={{backgroundColor: "black"}}>Black</button>

          <button onClick={() => setColor("lavender")} className="outline-none px-4 py-2 rounded-full text-black shadow-lg" style={{backgroundColor: "lavender"}}>Lavender</button>
        </div>
    </div> 
  </div>
    

  
  </>
  
)}

export default App
