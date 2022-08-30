import './styles/Cart.css';
import CartProduct from "./CartProduct";
import { useContext } from "react";
import CartContext from "../contexts/CartContext";
function Cart({ totalPrice, buyCart }) {

  const cart = useContext(CartContext);

  function buy() {
    buyCart();
  }

  return (
    <div className="cart">
      <div className="totalPrice">{totalPrice} ש"ח</div>
      <button onClick={buy}>בצע הזמנה</button>
      <div className="cartProducts">
        {cart.data.map(product => <CartProduct product={product} />)}
      </div>
    </div>
  )
};
export default Cart;
