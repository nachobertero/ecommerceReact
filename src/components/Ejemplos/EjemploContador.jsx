
import { useEffect, useState } from "react";



const EjemploContador = () => {
    const [contador, setContador] = useState(0);

    useEffect (() => {
      const fetchApi = () => {
        fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => console.log(data))
      }
  
      fetchApi()
    }, [])
    const sumar = () => {
        setContador(contador+1)

    }

  return (
    <div>
        <p>Contador: {contador}</p>
        <button onClick={sumar}>+</button>
        
        <button>-</button>

    </div>
  )
}

export default EjemploContador