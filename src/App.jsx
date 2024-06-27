/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './App.css'
import Titulo from './components/Titulo'
/* import NavBar from './components/NavBar'; */
import {NavBar} from './components/NavBar'

function App() {

  const saludo = "HOlanda";


  return (
  
    <div style={{backgroundColor: 'black', color: 'white'}}>
    <NavBar />
    <h1 className='titulo'>{saludo}</h1>

    <img src="" alt="" />
    <Titulo />

    </div>
/*       <div>
    <h2>HOLA</h2>
      </div> */

  )
}

export default App
