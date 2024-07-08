

import "./navbar.css"
import { FaCartArrowDown } from "react-icons/fa";

const CartWidget = () => {
    return (
      <div className="carrito">
        <FaCartArrowDown className="img" size={30} />
        <p className="cantidadCarrito">1</p>
       
      </div>
    );
  }
  
  export default CartWidget;
  
