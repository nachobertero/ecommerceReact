
import { useEffect, useState } from "react"
import { pedirDatos } from "../helpers/pedirDatos"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
const ItemListContainer = () => {

    const [productos, setProductos] = useState([]); 
    const [titulo, setTitulo] = useState("Productos")
    
    const categoria = useParams().categoria;
  console.log(categoria);
    
    useEffect(() => {

        pedirDatos()
        .then((response) => {

          if (categoria) {
            setProductos(response.filter((produ) => produ.categoria === categoria))
            setTitulo(categoria)
          } else {
            setProductos(response)
            setTitulo("Productos")
          }
        })

    }, [categoria])

  return (
    <div>
        <ItemList productos={productos} titulo={titulo}/>
    </div>
  )
}

export default ItemListContainer