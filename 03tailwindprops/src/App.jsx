import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App(props) {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3'>Vite tailwind</h1>
      <Card userName = "Abdhullah" post = "Software Engineer"/>
      <Card userName = "Shana" post = "Devops Engineer"/>
      <Card/>
      <Card/>
    </>
  )
}

export default App
