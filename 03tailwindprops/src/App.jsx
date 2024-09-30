import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "kuldeep",
    age: "39"
  }
  let newArr = [1,2, 3, 4];
  
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
     <Card username="reactproperty" btnText="click me" someObj={myObj} someArr ={newArr}/>
     <Card username="kuldeep" btnText="visit me"/>
    </>
  )
}

export default App
