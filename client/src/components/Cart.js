import './styles/Cart.css';
import CartProduct from "./CartProduct";
import { createRef, useContext, useState } from "react";
import CartContext from "../contexts/CartContext";
import { Dialog, Button } from '@mui/material';
function Cart({ totalPrice, submitOrder }) {
  console.log(totalPrice)
  const cart = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);
  const nameInput=createRef();
  const addressInput=createRef();
  const phoneNumberInput=createRef();

function submit(){
  const name=nameInput.current.value;
  const address=addressInput.current.value;
  const phoneNumber=phoneNumberInput.current.value;
  console.log(name)
  console.log(address)
  // console.log(address.current.value)
  submitOrder({name,address,phoneNumber})
}

  return (
    <div className="cart">
      <div className="totalPrice">{totalPrice} ש"ח</div>
      <button onClick={openDialog}>בצע הזמנה</button>
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

        <Button onClick={submit}>שלח הזמנה</Button>
        <Button onClick={closeDialog}>חזור</Button>

      </Dialog>
    </div>
  )
};
export default Cart;
