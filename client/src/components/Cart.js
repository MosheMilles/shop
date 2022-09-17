import './styles/Cart.css';
import CartProduct from "./CartProduct";
import { useContext } from "react";
import CartContext from "../contexts/CartContext";
function Cart({ totalPrice, submitOrder }) {

  const cart = useContext(CartContext);

  function submit() {
    submitOrder();
  }

  return (
    <div className="cart">
      <div className="totalPrice">{totalPrice} ש"ח</div>
      <button onClick={submit}>בצע הזמנה</button>
      <div className="cartProducts">
        {cart.data.map(product => <CartProduct product={product} />)}
      </div>
    </div>
  )
};
export default Cart;
