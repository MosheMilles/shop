import './styles/OrdersList.css';
import OrderRow from "./OrderRow";



function OrdersList({ orders, setOrders, closeOrder, filterOrders }) {

console.log(orders)

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
                    <div className="column_headline"><h3 id="column_headline_txt">מספר הזמנה</h3></div>
                    <div className="column_headline"> <h3 id="column_headline_txt">נשלח ב:</h3></div>
                    <div className="column_headline" id="time_col"> <h3 id="column_headline_txt">זמן אספקה מבוקש</h3></div>
                    <div className="column_headline"><h3 id="column_headline_txt">לקוח</h3></div>
                    <div className="column_headline"><h3 id="column_headline_txt">כתובת</h3></div>
                    <div className="column_headline"><h3 id="column_headline_txt">טלפון</h3></div>
                    <div className="column_headline"> <h3 id="column_headline_txt">כמות מוצרים</h3></div>
                    <div className="column_headline"> <h3 id="column_headline_txt">מחיר כולל</h3></div>
                    <div className="column_headline" id="comment"><h3 id="column_headline_txt">הערות לקוח</h3></div>
                    <div className="column_headline" id="comment"><h3 id="column_headline_txt">סטטוס / הערות צוות</h3></div>
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
