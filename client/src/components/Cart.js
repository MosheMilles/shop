import './styles/Cart.css';
import CartProduct from "./CartProduct";
import { createRef, useContext, useState } from "react";
import CartContext from "../contexts/CartContext";
import { Dialog, Button } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Cart({ submitOrder, cartShown,setCartShown,toggleCart }) {
  const cart = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);
  const nameInput = createRef();
  const addressInput = createRef();
  const phoneNumberInput = createRef();
  const timeInput = createRef();
  const commentsInput = createRef();

  function submit() {
    const name = nameInput.current.value;
    const address = addressInput.current.value;
    const phoneNumber = phoneNumberInput.current.value;
    const requestedTime = timeInput.current.value;
    const comments = commentsInput.current.value;
    console.log(name)
    console.log(address)
    // console.log(address.current.value)
    submitOrder({ name, address, phoneNumber, requestedTime, comments })
  }

  return (
    <div className="cart">
      <div className="cart_details" onClick={toggleCart}>
        <ShoppingCartOutlinedIcon className="material-icons" style={{ fontSize: '40px' }} />
        <h3 className="total_price">{cart.totalPrice} ש"ח</h3>
        <div className='button_container'><button className='cart_button' onClick={openDialog}>סיום קנייה</button></div>
      </div>
      <div className={`cart_products${cartShown ? "_shown" : ""}`}>
      {cart.data.length===0&&<h2 id="no_products">עדיין אין מוצרים בעגלה</h2>}
        {cart.data.map(product => <CartProduct product={product} />)}
      </div>
      <Dialog dir="rtl" open={open} onClose={closeDialog} >
        <div id="submit_dialog">
          <label id="name_input">שם:
            <input ref={nameInput} type="text" />
          </label> <br />
          <label id="address_input">כתובת:
            <input ref={addressInput} type="text" />
          </label> <br />
          <label id="phone_input">טלפון:
            <input ref={phoneNumberInput} type="text" />
          </label> <br />
          <label id="time_input">זמן אספקה רצוי:
            <input ref={timeInput} type="text" />
          </label> <br />
          <label id="comments_input">הערות:
            <input ref={commentsInput} type="text" />
          </label> <br />

          <Button id="submit_button" onClick={submit}>שלח הזמנה</Button>
          <Button id="back_button" onClick={closeDialog}>חזור</Button>
        </div>
      </Dialog>
    </div>
  )
};
export default Cart;
