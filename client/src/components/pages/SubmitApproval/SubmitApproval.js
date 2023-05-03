import './SubmitApproval.css';

function SubmitApproval({changeCategory}) {
    const change=()=>changeCategory();
    return (
        <div className="approval">
            {/* <h2>{cartProducts}</h2> */}
            <h1 id="success">ההזמנה נקלטה בהצלחה</h1>
            <h1 id="thanks">תודה שקנית אצלנו!</h1>
            {/* <h1>סופר רחלים</h1> */}
            <h5 id="back_to_site" onClick={change}>חזרה לאתר</h5>
        </div>
    )
}
export default SubmitApproval;