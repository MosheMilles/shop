import './styles/OrderToPrint.css';
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function OrderToPrint({ orders }) {

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
        <div className="order_page">
            <h3 id="order_number"><span className="bold">מספר הזמנה: </span><span className="regular">{order.id}</span></h3>
            <h3><span className="bold">נשלחה ב: </span><span className="regular">{order.time}</span></h3>
            <h3><span className="bold">זמן אספקה מבוקש: </span><span className="regular">{order.date}   {order.hours}</span></h3>

            <div><h1 id="client_name"><span className="bold">לקוח: </span><span>{order.name}</span></h1></div>
            <div id="client_details">
                <div className="general_details"><span className="bold">כתובת:</span><div>{order.address} </div></div>
                <div className="general_details"><span className="bold">טלפון: </span><div>{order.phoneNumber} </div></div>
            </div>
            <div id="comments">
                {order.staffComments && <div className="general_details"><span className="bold">הערות צוות:</span><div>{order.staffComments}</div></div>}
                {order.clientComments && <div className="general_details"><span className="bold">הערות לקוח:</span><div>{order.clientComments}</div></div>}
            </div>
            <div className="products_list">
                <div className="row">
                    <div id="narrow">כמות</div>
                    <div>מוצר</div>
                    <div>ברקוד</div>
                    <div id="narrow">מחיר ליחידה</div>
                    <div id="narrow">מחיר כולל</div>
                    <div>הערת לקוח</div>
                    <div id="narrow">בוצע</div>
                    <div>הערות</div>
                </div>
                {order.products.map(product =>
                    <div className="row" key={product.barcode}>
                        <div id="narrow">{product.quantity}</div>
                        <div>{product.name}</div>
                        <div>{product.barcode}</div>
                        <div id="narrow">{product.price}</div>
                        <div id="narrow">{(product.price * product.quantity).toFixed(2)}</div>
                        <div>{product.comment}</div>
                        <div  id="narrow"/>
                        <div />
                    </div>
                )}
            </div>
            <div className="order_details">
                <div className="general_details"><span className="bold">מחיר כולל:</span><div>{order.totalPrice} ש"ח</div></div>
            </div>
        </div>
    );
};
export default OrderToPrint;
