import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <Link className='menu-link' to="/carrito">
        <AiOutlineShoppingCart size={30} />
        <span>0</span>
      </Link>
    </div>
  );
}

export default CartWidget;
