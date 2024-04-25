import { useState } from 'react'
import bg from './assets/background.jpg'

import './App.css'
import PassGen from './components/PassGenrator/PassGen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section style={{backgroundImage:`url(${bg})`}} className='h-[100vh] bg-center'>
    <PassGen />
    </section>
  )
}

export default App
