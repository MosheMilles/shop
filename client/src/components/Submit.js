import { useContext,createRef,useState } from 'react';
import CartContext from '../contexts/CartContext';
import {FormControl,InputLabel,Select,MenuItem, Button} from '@mui/material';
import { Link } from 'react-router-dom';
function Submit({submitOrder}){
    const cart = useContext(CartContext);
    const nameInput = createRef();
    const addressInput = createRef();
    const phoneNumberInput = createRef();
    const dateInput = createRef();
    const hoursInput = createRef();
    const commentsInput = createRef();

    console.log('hiii')
    console.log(submitOrder)
  
    function submit() {
        const name = nameInput.current.value;
        const address = addressInput.current.value;
        const phoneNumber = phoneNumberInput.current.value;
        // const requestedTime = [dateInput.current.value,hoursInput.current.value];
        const comments = commentsInput.current.value;
        submitOrder({ name, address, phoneNumber,  comments })
      }
    return(
        <div>
              <FormControl fullWidth>
          <label id="name_input"><h1>שם:</h1>
            <input ref={nameInput} type="text" />
          </label> <br />
          <label id="address_input"><h1>כתובת:</h1>
            <input ref={addressInput} type="text" />
          </label> <br />
          <label id="phone_input"><h1>טלפון:</h1>
            <input ref={phoneNumberInput} type="text" />
          </label> <br />
          <label id="time_input"><h1>זמן אספקה רצוי:</h1>
          ////////////
        
  <InputLabel id="order_day_label">חיהחסלזידחגהדחהדנ</InputLabel>
  <Select
    labelId="order_day_label"
    id="order_day"
    value={dateInput}
    label="יום"
    // onChange={handleChange}
  >
    <MenuItem value="היום">Ten</MenuItem>
    <MenuItem value="20">Twenty</MenuItem>
    <MenuItem value="30">Thirty</MenuItem>
  </Select>

          ////////////
            {/* <input ref={dateInput} type="text" /> */}
            <input ref={hoursInput} type="text" />
          </label> <br />
          <label id="comments_input"><h1>הערות:</h1>
            <input ref={commentsInput} type="text" />
          </label> <br />

          <Button id="submit_button" onClick={submit}>שלח הזמנה</Button>
          <Link to=".."><Button id="back_button">חזור</Button></Link>
          </FormControl>
        </div>
    )
}
export default Submit;