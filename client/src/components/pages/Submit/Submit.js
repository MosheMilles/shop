import "./Submit.css";
import { useContext, createRef, useState } from 'react';
import CartContext from '../../../contexts/CartContext';
import SearchHeader from '../../layout/Header/Header';
import { FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import { Link } from 'react-router-dom';
function Submit({ submitOrder,allProducts }) {
  const cart = useContext(CartContext);
  const nameInput = createRef();
  const addressInput = createRef();
  const phoneNumberInput = createRef();
  const dateInput = createRef();
  const hoursInput = createRef();
  const commentsInput = createRef();

  function getOrderDate(daysForward){
    const daysOfWeek=["ראשון","שני","שלישי","רביעי","חמישי","שישי","מוצאי שבת"]
  let today=new Date();
  let orderDate=new Date(today)
  orderDate.setDate(orderDate.getDate()+daysForward)
  let month=orderDate.getMonth()+1;
  return "יום "+daysOfWeek[orderDate.getDay()]+" "+orderDate.getDate()+"/"+month+"/"+orderDate.getFullYear();
  }

  function submit() {
    const name = nameInput.current.value;
    const address = addressInput.current.value;
    const phoneNumber = phoneNumberInput.current.value;
    // const requestedTime = [dateInput.current.value,hoursInput.current.value];
    const date = dateInput.current.value;
    const hours = hoursInput.current.value;
    const comments = commentsInput.current.value;
    // console.log(requestedTime)
    submitOrder({ name, address, phoneNumber, date, hours, comments })
  }
  return (

    <div className="summary">
      <SearchHeader />
      <div id="summary_headline">
        <h1 id="summary_headline_text">סיכום הזמנה</h1>
      </div>
      <div className="client_input">
        <label id="name_input"><h1 id="details">שם מלא:</h1>
          <input id="summary_input" ref={nameInput} type="text" />
        </label> <br />
        <label id="address_input"><h1 id="details">כתובת:</h1>
          <input id="summary_input" ref={addressInput} type="text" />
        </label> <br />
        <label id="phone_input"><h1 id="details">טלפון:</h1>
          <input id="summary_input" ref={phoneNumberInput} type="text" />
        </label> <br />
        <label id="time_input"><h1 id="details">מתי תרצו לקבל את המשלוח?</h1>
          <select id="date_input" ref={dateInput} >
            <option value={getOrderDate(0)}>היום {getOrderDate(0)}</option>
            <option value={getOrderDate(1)}>מחר {getOrderDate(1)}</option>
            <option value={getOrderDate(2)}>{getOrderDate(2)}</option>
            <option value={getOrderDate(3)}>{getOrderDate(3)}</option>
            <option value="מועד מאוחר יותר">מועד מאוחר יותר</option>
          </select>
          <select id="hours_input" ref={hoursInput} >
            <option value="7:00-11:00">7:00-11:00</option>
            <option value="10:00-14:00">10:00-14:00</option>
            <option value=">13:00-17:00">13:00-17:00</option>
            <option value="16:00-20:00">16:00-20:00</option>
          </select>
        </label>
        <label id="comments_input"><h1 id="details">הערות:</h1>
          <input id="summary_input" ref={commentsInput} type="text" />
        </label> <br />
      </div>
      <div id="submit_or_back">
        <Button id="submit_button" onClick={submit}>שלח הזמנה</Button>
        <Link to=".."><Button id="back_button">חזור</Button></Link>
      </div>
    </div>
  )
}
export default Submit;