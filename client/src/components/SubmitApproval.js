import './styles/SubmitApproval.css';
import { Link } from 'react-router-dom';

function SubmitApproval({changeCategory}) {
    const change=()=>changeCategory();
    return (
        <div className="approval">
            {/* <h2>{cartProducts}</h2> */}
            <h1>ההזמנה נקלטה בהצלחה</h1>
            <h1>תודה שקנית אצלנו!</h1>
            {/* <h1>סופר רחלים</h1> */}
            <h5 onClick={change}>חזרה לאתר</h5>
        </div>
    )
}
export default SubmitApproval;