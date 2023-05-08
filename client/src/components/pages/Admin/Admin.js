import './Admin.css';
import { useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";
import Logo from "../../common/Logo/Logo";

function Admin({ orders, fetchOrders }) {

    useEffect(() => {
        fetchOrders();
        console.log(orders)
    }, []);

    return (
        <div>
            <div className="admin">
                <div className="admin_header">
                    <Logo />
                    <h1 id="admin_headline">ממשק ניהול</h1>
                </div>
                <div className="admin_options">
                    <NavLink id="admin_link" to="orders_list"><div><h2>הזמנות</h2></div></NavLink>
                    <NavLink id="admin_link" to="product_config"><div><h2>מוצרים</h2></div></NavLink>
                    <NavLink id="admin_link" to="sales"><div><h2>מבצעים</h2></div></NavLink>
                    <NavLink id="admin_link" to="view"><div><h2>תצוגה</h2></div></NavLink>
                </div>
            </div>
            <div className="outlet">
                <Outlet />
            </div>
        </div>
    )
};
export default Admin;
