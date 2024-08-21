
import { useEffect, useState } from "react"
import { pedirDatos } from "../helpers/pedirDatos"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import {db} from "../firebase/data";


const ItemListContainer = () => {

    const [productos, setProductos] = useState([]); 
    const [titulo, setTitulo] = useState("Productos")
    
    const categoria = useParams().categoria;
  
    
    useEffect(() => {

      const productosReference = collection (db, "productos");

      const qu = categoria ? query(productosReference, where("categoria", "==", categoria)) : productosReference

      getDocs(qu)
      .then((response) => {
        setProductos(
          response.docs.map((doc) => {
            return {...doc.data(), id: doc.id}
          })
        );
      })


    }, [categoria])

  return (
    <div>
        <ItemList productos={productos} titulo={titulo}/>
    </div>
  )
}

export default ItemListContainer