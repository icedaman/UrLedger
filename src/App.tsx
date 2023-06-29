import { useState } from 'react'
import './App.css'
import Header from "./Components/Header"
import { MainContainer } from './Components/MainContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='absolute top-0 left-0 right-0 min-h-full bg-black scroll-smooth'>
      <Header />      
      <MainContainer />
    </div>
  )
}

export default App
