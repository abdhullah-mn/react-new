import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-screen h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center"
      style={{backgroundImage: "url('https://images.pexels.com/photos/325154/pexels-photo-325154.jpeg')"  }}
      >
        <h1 className='bg-red-200'>test for tailwind</h1>
      </div>
        
    </>
  )
}

export default App
