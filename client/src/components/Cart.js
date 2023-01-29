import './styles/Cart.css';
import CartProduct from "./CartProduct";
import { useContext } from "react";
import CartContext from "../contexts/CartContext";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from 'react-router-dom';

function Cart({ submitOrder, cartShown,setCartShown,toggleCart }) {
  const cart = useContext(CartContext);
 
  return (
    <div className="cart">
      <div className="cart_details" onClick={toggleCart}>
        <ShoppingCartOutlinedIcon className="material-icons" style={{ fontSize: '40px' }} />
        <h3 className="total_price">{cart.totalPrice} ש"ח</h3>
        <div className='button_container'><Link to="submit"><button className='cart_button'>סיום קנייה</button></Link></div>
      </div>
      <div className={`cart_products${cartShown ? "_shown" : ""}`}>
      {cart.data.length===0&&<h2 id="no_products">עדיין אין מוצרים בעגלה</h2>}
        {cart.data.map(product => <CartProduct product={product} />)}
      </div>
    </div>
  )
};
export default Cart;
