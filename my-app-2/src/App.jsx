import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className='login-panel'>
           <input className='text-field' type='text' placeholder='Insert password'/>
           <input className='password-field' type='password' placeholder='Insert password'/>
            <button type='submit' >ENTRAR</button>
        </div>
      </section>

      <div className="ticks"></div>
    </>
  )
}

export default App
