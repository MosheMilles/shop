import { Link } from "react-router-dom";
import OrderRow from "./OrderRow";



function OrdersList({orders}) {

    return (
        <div dir="rtl">
            <h1>הזמנות שהתקבלו</h1>
            <div className="ordersList">
                {
                    // console.log(orders);
                    orders.map(order => <Link to={`orders/${order._id}`} key={order._id}><OrderRow order={order} /></Link>)
                }
            </div>
            <Link to={"crud"}><button>ניהול מוצרים</button></Link>
        </div>
    )
};
export default OrdersList;
