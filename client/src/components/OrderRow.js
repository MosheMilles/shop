import './styles/OrderRow.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { Dialog } from '@mui/material';

function OrderRow({ order, filterOrders,closeOrder }) {
    const [open, setOpen] = useState(false);
    const openDialog = () => setOpen(true);
    const closeDialog = () => setOpen(false);

    function close() {
        order.status="archieve";
        closeOrder(order);
        filterOrders();
        closeDialog();
    }
    return (
        <div className="order_row">
            <Link to={`orders/${order._id}`} key={order._id} className="link_to_order">
                <div className="cell">{order.id}</div>
                <div className="cell">{order.time}</div>
                <div className="cell" id="time_col">{order.date}<br/>{order.hours}</div>
                <div className="cell">{order.name}</div>
                <div className="cell">{order.address}</div>
                <div className="cell">{order.phoneNumber}</div>
                <div className="cell">{order.productsQuantity}</div>
                <div className="cell">{order.totalPrice}</div>
                <div className="cell" id="comment">{order.clientComments}</div>
                <div className="cell" id="comment">{order.staffComments}</div>
            </Link>
            <div className="cell" id="print"> <button>הדפס</button></div>
            <div className="cell" id="close"><button onClick={openDialog}>סגור הזמנה</button></div>
            <Dialog  dir="rtl" open={open} onClose={closeDialog} >
                <div id="submit_dialog">
                <h3>הזמנה מספר:  {order.id}</h3>
                <h3>לקוח: {order.name}</h3>
                <h3>האם לסגור את ההזמנה? </h3>
                <button onClick={close}>אישור</button>
                <button onClick={closeDialog}>ביטול</button>
                </div>
            </Dialog>
        </div>

    );
};
export default OrderRow;