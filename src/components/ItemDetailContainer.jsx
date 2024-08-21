import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import {doc, getDoc} from "firebase/firestore";
import {db} from "../firebase/data";

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)

    const id = useParams().id;
    

    useEffect(() => {

      const docReference = doc(db, "productos", id);
      getDoc(docReference)
      .then((response) => {
        setItem(
          {...response.data(), id:response.id}
        )
      })
     
    }, [id])
    
  return (
    <div>
        {item && <ItemDetail item={item}/>}
        
    </div>
  )
}

export default ItemDetailContainer