import { useState } from 'react'
import './App.css'
import { Habit } from './components/Habit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Habit completed={3}/>
      <Habit completed={10}/>
      <Habit completed={20}/>
      <Habit completed={30}/>
    </div>
  )
}

export default App
