import { createRef,useContext } from "react";

function SaleConfig(){
    const cart = useContext(CartContext);
    const titleInput = createRef();
    const numInput = createRef();
    const phoneNumberInput = createRef();
    const dateInput = createRef();
    const hoursInput = createRef();
    const commentsInput = createRef();
    return(
<div>
 <label>שם מבצע: 
 <input ref={titleInput} /></label>
 <label>מס' סידורי: 
 <input ref={numInput}/></label>
<label>מוצרים משתתפים: 
 <input /></label> 
 <label>כמות: 
 <input /></label>
 <label>מחיר: 
 <input /></label> 
 <label>מינימום קנייה: 
 <input /></label> 
 <label>מוצרים מוחרגים: 
 <input /></label> 
 <label>תוקף מבצע (עדיין לא פעיל): 
 <input /></label> 
</div>

    )
}
export default SaleConfig;