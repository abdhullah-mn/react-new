import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [counter, setCounter] = useState(15);

  //let counter = 15;

  const addValue = ()=>{
    setCounter ((prevCounter)=> prevCounter + 1);
    setCounter ((prevCounter)=> prevCounter + 1);
    setCounter ((prevCounter)=> prevCounter + 1);
    setCounter ((prevCounter)=> prevCounter + 1);
  }

  const newValue = ()=>{
    setCounter ((prevCounter)=> prevCounter - 1);
    setCounter ((prevCounter)=> prevCounter - 1);
    setCounter ((prevCounter)=> prevCounter - 1);
    setCounter ((prevCounter)=> prevCounter - 1);
  }

  return (
    <>
      <h1>My React Counter App {counter}</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick = {addValue}
      >Add Value</button> {" "}
      <button onClick = {newValue}>Remove Value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
