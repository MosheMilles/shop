import './Cart.css';
import CartProduct from "../CartProduct/CartProduct";
import { useContext, useState } from "react";
import CartContext from "../../../contexts/CartContext";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';

function Cart({ isCartShown, toggleCart}) {
  const cart = useContext(CartContext);

  return (
    <div className="cart">
      <div className="cart_details" onClick={toggleCart}>
        <ShoppingCartOutlinedIcon className="material-icons" style={{ fontSize: '40px' }} />
        <h3 className="total_price">{cart.totalPrice} ש"ח</h3>
        <div className='button_container'><Link to="submit"><button className='cart_button'>סיום קנייה</button></Link></div>
      </div>
      {isCartShown && <div className="cart_products_shown">
        {cart.data.length === 0 && <h2 id="no_products">עדיין אין מוצרים בעגלה</h2>}
        {cart.data.map(product => (
          <div>
            <CartProduct product={product} />
          </div>
        ))}
      </div>}
    </div>
  )
};
export default Cart;
