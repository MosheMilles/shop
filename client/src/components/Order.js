import './styles/Order.css';
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Order({ orders, fetchOrders }) {
    // useEffect(() => {
    //     fetchOrders();
    //     console.log(orders)
    // }, []);

    //in page refreshing, it's not compiled because the prop "orders" is passed before the fetching.
    //maybe it's necessary to fetch here again with useEffect and not to pass it.

    console.log(orders)


    let params = useParams();
    console.log(params._id)
    let id = params._id

    console.log(id)
    console.log(orders)


    let order = orders.find(order => order._id === id);
    console.log(order)
    console.log(order.products)
    //    setOrder(currOrder)
    // let products=order.products


    return (
        <div>
            <h3 id="order_number"><span className="bold">מספר הזמנה:</span><span>{order.id}</span></h3>
            <div><h1 id="client_name"><span className="bold">לקוח: </span><span>{order.name}</span></h1></div>
            <div id="client_details">
                <div className="general_details"><span className="bold">כתובת:</span><div>{order.address} </div></div>
                <div className="general_details"><span className="bold">טלפון: </span><div>{order.phoneNumber} </div></div>
            </div>
            <div id="comments">
            {order.staffComments&&<div className="general_details"><span className="bold">הערות צוות:</span><div>{order.staffComments}</div></div>}
            {order.clientComments&&<div className="general_details"><span className="bold">הערות לקוח:</span><div>{order.clientComments}</div></div>}
            </div>
            {order.products.map(product =>
                <div key={product.barcode}>
                    <div>{product.quantity}</div>
                    <div>{product.barcode}</div>
                    <div> {product.name}</div>
                    <div>{product.price}</div>
                </div>
            )};
            <div className="order_details">
                <div id="cell">מחיר כולל:<div>{order.totalPrice} ש"ח</div></div>
            </div>
            <button>הדפס</button>
            <Link to=".."><button>חזור</button></Link>
        </div>
    );
};
export default Order;
