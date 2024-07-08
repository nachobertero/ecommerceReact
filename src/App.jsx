import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import EjemploContador from './components/Ejemplos/EjemploContador'
import ComponentePadre from './components/Ejemplos/ComponentePadre'
import ComponenteHijo from './components/Ejemplos/ComponenteHijo'
function App() {

  const saludo = "Hola";
  return (
    <>
      <div>

        <NavBar/>
        <h1>{saludo}</h1>
        <ItemListContainer saludo={"Bienvenidos a mi Ecommerce"}/>
        <EjemploContador/>
        <ComponentePadre>
          <h2>Saludos desde app</h2>
          <p>Descripcion</p>
          <ComponenteHijo/>
        </ComponentePadre>

        <ComponentePadre>
          <h3>otro ComponentePadre</h3>
        </ComponentePadre>

      </div>
    
    </>
  )
}

export default App
