import './styles/Order.css';
import OrderToPrint from './OrderToPrint';
import { Link } from 'react-router-dom';

function Order({orders}) {

    return (
        <div>
            <div className="order_buttons">
                <Link to=".."><button id="back_to_orders">חזור</button></Link>
                <button id="print_order">הדפס</button>
            </div>
            <div id="order_container">
            <OrderToPrint orders={orders} />
            </div>
        </div>
    )
}
export default Order;