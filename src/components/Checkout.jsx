import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase/data';

const Checkout = () => {

    
    const [pedidoId, setPedidoId] = useState("");

    const { carrito, totalCarrito, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: totalCarrito()
        }
       

        const pedidosReference = collection(db, "pedidos");

        addDoc(pedidosReference, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
            })

    }

    if (pedidoId) {
        return (
            <div className="container">
                <h1 className="main-title">Muchas gracias por tu compra</h1>
                <p>Tu número de pedido es: {pedidoId}</p>
            </div>
        )
    }

  return (
    <div className="container">
        <h1 className="main-title">Finalizar compra</h1>
        <form className="form" onSubmit={handleSubmit(comprar)}>

            <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
            <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
            <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />

            <button className="checkoutlink" type="submit">Comprar</button>

        </form>
    </div>
  )
}

export default Checkout