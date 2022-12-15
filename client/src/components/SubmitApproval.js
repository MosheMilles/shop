import './styles/SubmitApproval.css';

function SubmitApproval({ cartProducts }) {
    console.log(cartProducts)
    return (
        <div className="approval">
            <h2>{cartProducts}</h2>
            <h1>ההזמנה נקלטה בהצלחה</h1>
        </div>
    )
}
export default SubmitApproval;