import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {

  const {cantidadEnCarrito} = useContext(CartContext);
  return (
    <div className="cart-widget">
      <Link className='menu-link' to="/carrito">
        <AiOutlineShoppingCart size={30} />
        <span>{cantidadEnCarrito()}</span>
      </Link>
    </div>
  );
}

export default CartWidget;
