import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import OrderRow from "./OrderRow";



function OrdersList({orders}) {

    return (
        <div dir="rtl">
            <h1>הזמנות שהתקבלו</h1>
            <div>
                {
                    // console.log(orders);
                    orders.map(order => <Link to={`orders/${order._id}`} key={order._id}><OrderRow order={order} /></Link>)
                }
            </div>
        </div>
    )
};
export default OrdersList;
