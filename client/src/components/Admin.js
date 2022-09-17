import { useState, useEffect } from "react";
import { Link, Outlet, Routes, Route } from "react-router-dom";
import OrderRow from "./OrderRow";
import OrdersList from "./OrdersList";
import Order from "./Order";

function Admin() {
    console.log('sgajksdg')
    const [orders, setOrders] = useState([]);

    // fetchOrders()
    useEffect(() => {
        console.log('hiii')
        fetchOrders()
        console.log('byyy')
        console.log(orders)
    }, []);

    console.log(orders)
    console.log('jklhlk')
    function fetchOrders() {
        fetch("http://localhost:3001/api/orders")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                console.log('gdskjghakjdhgas');
                setOrders(data);
            });
    };
    console.log(orders)
    return (
        <Routes>
            <Route path="/" element={
                <div>
                    <OrdersList orders={orders} />
                </div>
            } />

            <Route path="orders/:id" element={
                <Order orders={orders} />
            } />
        </Routes >
    )
};
export default Admin;
