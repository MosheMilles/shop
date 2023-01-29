import './styles/OrdersList.css';
import OrderRow from "./OrderRow";



function OrdersList({ orders, setOrders, closeOrder, filterOrders }) {

    function close(order) {
        closeOrder(order);
    }

    function filter() {
        setOrders(orders.filter(order => order.status === "new_order"));
    }
    return (
        <div className="orders_list" dir="rtl">
            <h1 className="orders_headline">הזמנות שהתקבלו</h1>
            <div className="columns_headlines">
                <div className="link_to_order">
                    <div className="column_headline"><h3 id="column_headline">מספר הזמנה</h3></div>
                    <div className="column_headline"> <h3 id="column_headline">נשלח ב:</h3></div>
                    <div className="column_headline"> <h3 id="column_headline">זמן אספקה מבוקש</h3></div>
                    <div className="column_headline"><h3 id="column_headline">לקוח</h3></div>
                    <div className="column_headline"><h3 id="column_headline">כתובת</h3></div>
                    <div className="column_headline"><h3 id="column_headline">טלפון</h3></div>
                    <div className="column_headline"> <h3 id="column_headline">כמות מוצרים</h3></div>
                    <div className="column_headline"> <h3 id="column_headline">מחיר כולל</h3></div>
                    <div className="column_headline" id="comment"><h3 id="column_headline">הערות לקוח</h3></div>
                    <div className="column_headline" id="comment"><h3 id="column_headline">סטטוס / הערות צוות</h3></div>
                </div>
                <div className="column_headline" id="print"></div>
                <div className="column_headline" id="close"></div>
            </div>
            {!orders ? <h1 className="no_orders">אין הזמנות חדשות</h1>:
                orders.map(order => <OrderRow order={order} filterOrders={filter} closeOrder={close} />)
            }
        </div>
    )
};
export default OrdersList;
