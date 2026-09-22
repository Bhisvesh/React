import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-blue-500 mb-4 text-white p-4">Tailwind Test</h1>
      <Card title = "Modern Design Solutions" btntext = "Learn More"/>  
    </>
  )
}

export default App
