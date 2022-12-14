import './styles/Admin.css';
import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import Logo from "./Logo";
import SearchHeader from './SearchHeader';

function Admin({ orders, fetchOrders, allProducts }) {

    useEffect(() => {
        fetchOrders();
        console.log(orders)
    }, []);

    return (
        <div>
            <SearchHeader allProducts={allProducts} />
            <div className="subheader">
                <h1>ממשק ניהול</h1>
            </div>
            <Outlet />
        </div>
    )
};
export default Admin;
