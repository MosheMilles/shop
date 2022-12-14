import './styles/OrdersList.css';
import { Link } from "react-router-dom";
import OrderRow from "./OrderRow";



function OrdersList({ orders }) {
console.log(orders)
    return (
        <div dir="rtl">
            <h1 className="orders_headline">הזמנות שהתקבלו</h1>
            <div className="columns_headlines">
                <div className="link_to_order">
                    <div className="column_headline"><h3>מספר הזמנה</h3></div>
                    <div className="column_headline"> <h3>נשלח ב:</h3></div>
                    <div className="column_headline"> <h3>זמן אספקה מבוקש</h3></div>
                    <div className="column_headline"><h3>לקוח</h3></div>
                    <div className="column_headline"><h3>כתובת</h3></div>
                    <div className="column_headline"><h3>טלפון</h3></div>
                    <div className="column_headline"> <h3>כמות מוצרים</h3></div>
                    <div className="column_headline"> <h3>מחיר כולל</h3></div>
                    <div className="column_headline" id="comment"><h3>הערות לקוח</h3></div>
                    <div className="column_headline" id="comment"><h3>סטטוס / הערות צוות</h3></div>
                </div>
                <div className="column_headline" id="print"></div>
                <div className="column_headline" id="close"></div>
            </div>
            {
                orders.map(order => <OrderRow order={order} />)
            }

        </div>
    )
};
export default OrdersList;
