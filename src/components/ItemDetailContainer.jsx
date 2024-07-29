import { useState, useEffect } from "react"
import { pedirItemPorId } from "../helpers/pedirDatos"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)

    const id = useParams().id;
    console.log(id);

    useEffect(() => {
      pedirItemPorId(Number(id))
      .then((response) => {
        setItem(response)
      })
    }, [id])
    
  return (
    <div>
        {item && <ItemDetail item={item}/>}
        
    </div>
  )
}

export default ItemDetailContainer