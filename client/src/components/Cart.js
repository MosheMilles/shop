import './styles/Cart.css';
import CartProduct from "./CartProduct";
import { useContext } from "react";
import CartContext from "../contexts/CartContext";
function Cart({ totalPrice }) {

  const cart = useContext(CartContext);
  return (
    <div className="cart">
      <div className="totalPrice">{totalPrice} ש"ח</div>
      <div className="cartProducts">
        {cart.data.map(product => <CartProduct product={product} />)}
      </div>
    </div>
  )
};
export default Cart;
