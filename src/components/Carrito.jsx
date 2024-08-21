import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Carrito = () => {
  const { carrito, totalCarrito, vaciarCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  };

  return (
    <div className="container">
      <h2 className="main-title">Carrito</h2>
      {carrito.length > 0 ? (
        <div>
          {carrito.map((produc) => (
            <div key={produc.id}>
              <h3>{produc.titulo}</h3>
              <img src={produc.imagen} alt={produc.titulo} width={200} height={300} />
              <p>Cantidad: {produc.cantidad}</p>
              <p>Precio por unidad: $ {produc.precio}</p>
              <p>Total: $ {produc.precio * produc.cantidad}</p>
            </div>
          ))}
          <h2>Total Carrito: $ {totalCarrito()}</h2>
          <button onClick={handleVaciar} className="vaciarcarrito">Vaciar Carrito</button>
          <Link to="/checkout" className="checkoutlink">Finalizar Compra</Link>
        </div>
      ) : (
        <h1>Todavía no agregaste nada al carrito</h1>
      )}
    </div>
  );
};

export default Carrito;
