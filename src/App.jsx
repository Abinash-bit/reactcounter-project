import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)

  const addValue = () => {
    setCounter(counter+1)
    console.log("added value", counter)
  }

  const removeValue = () => {
    setCounter(counter-1)
    console.log("Removed Value", counter)
  }

  return (
    <>
    <h1>Chai Aur React</h1>
    <h2>Counter Value {counter}</h2>
    <button
    onClick={addValue}>Add Value</button>
    <button
    onClick={removeValue}>Remove Value</button>


    </>
  )
}

export default App
