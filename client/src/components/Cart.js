import './styles/Cart.css';
import CartProduct from "./CartProduct";
import { createRef, useContext, useState } from "react";
import CartContext from "../contexts/CartContext";
import { Dialog, Button } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Cart({ totalPrice, submitOrder }) {
  console.log(totalPrice)
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
    const time = timeInput.current.value;
    const comments = commentsInput.current.value;
    console.log(name)
    console.log(address)
    // console.log(address.current.value)
    submitOrder({ name, address, phoneNumber, time, comments })
  }

  return (
    <div className='cart'>
      <div className='cart_details'>
        <ShoppingCartOutlinedIcon className="material-icons" style={{ fontSize: '40px' }} />
        <h3 className="total_price">{totalPrice} ש"ח</h3>
        <div className='button_container'><button className='cart_button' onClick={openDialog}>סיום קנייה</button></div>
      </div>
      <div className="cartProducts">
        {cart.data.map(product => <CartProduct product={product} />)}
      </div>
      <Dialog dir="rtl" open={open} onClose={closeDialog} >
        <label>שם:
          <input ref={nameInput} type="text" />
        </label>
        <label>כתובת:
          <input ref={addressInput} type="text" />
        </label>
        <label>טלפון:
          <input ref={phoneNumberInput} type="text" />
        </label>
        <label>זמן אספקה רצוי:
          <input ref={timeInput} type="text" />
        </label>
        <label>הערות:
          <input ref={commentsInput} type="text" />
        </label>

        <Button onClick={submit}>שלח הזמנה</Button>
        <Button onClick={closeDialog}>חזור</Button>

      </Dialog>
    </div>
  )
};
export default Cart;
