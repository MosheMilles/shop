import './styles/OrderRow.css';
import { Link } from "react-router-dom";

function OrderRow({ order }) {
    return (
        <div className="order_row">
            <Link to={`orders/${order._id}`} key={order._id} className="link_to_order">
                <div className="cell">{order.id}</div>
                <div className="cell">{order.time}</div>
                <div className="cell">{order.requestedTime}</div>
                <div className="cell">{order.name}</div>
                <div className="cell">{order.address}</div>
                <div className="cell">{order.phoneNumber}</div>
                <div className="cell">{order.productsQuantity}</div>
                <div className="cell">{order.totalPrice}</div>
                <div className="cell" id="comment">{order.clientComments}</div>
                <div className="cell" id="comment">{order.staffComments}</div>
            </Link>
            <div className="cell" id="print"> <button>הדפס</button></div>
            <div className="cell" id="close"><button>סגור הזמנה</button></div>
        </div>

    );
};
export default OrderRow;