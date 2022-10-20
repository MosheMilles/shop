import { useState, useEffect } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import OrdersList from "./OrdersList";
import Order from "./Order";
import Crud from "./Crud";
import Intro from "./Intro";

function Admin({orders,fetchOrders}) {
    console.log('sgajksdg')
   

    useEffect(() => {
        console.log('hiii')
        fetchOrders()
        console.log('byyy')
        console.log(orders)
    }, []);

    console.log(orders)
    console.log('jklhlk')
   
    console.log(orders)
    return (
        // <Routes>
        //     <Route path="/" element={<AdminLayout />}>
        //         <Route index element={<OrdersList orders={orders} />} />
        //         <Route path="orders/:_id" element={<h1>sdgjakg;asjg;s</h1>} />
        //         <Route path="crud" element={<Crud />} />
        //         {/* <Order orders={orders} /> */}
        //     </Route>
        // </Routes>
        <div>
        <h1>Admin</h1>
        <Outlet />
        </div>
    )
};
export default Admin;
