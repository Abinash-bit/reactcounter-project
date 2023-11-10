import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)

  const addValue = () => {
    counter = counter + 1;
    if(counter < 20){
      setCounter(counter)
    }
    else
    console.log("Can't increase more than 20", counter)
  }

  const removeValue = () => {
    counter = counter - 1
    if(counter > 0){
      setCounter(counter)
    }
    else
    console.log("Can't decrease below zero", counter)
  }

  return (
    <>
    <h1>ChatGPT</h1>
    <h2>Counter Value {counter}</h2>
    <button
    onClick={addValue}>Add Value</button>
    <button
    onClick={removeValue}>Remove Value</button>


    </>
  )
}

export default App
