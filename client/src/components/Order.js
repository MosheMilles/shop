import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function Order({ orders }) {

    //in page refreshing, it's not compiled because the prop "orders" is passed before the fetching.
    //maybe it's necessary to fetch here again with useEffect and not to pass it.

console.log(orders)


    let params = useParams();
    console.log(params._id)
    let id = params._id

    console.log(id)
    console.log(orders)


    let order = orders.find(order => order._id === id);
    console.log(order)
    console.log(order.products)
//    setOrder(currOrder)
    // let products=order.products


    return (
        <div>
            {order.products.map(product=>
            <div key={product.id}>{product.quantity} {product.name} {product.price} </div>
                )}
                <Link to=".."><button>חזור</button></Link>
        </div>
    );
};
export default Order;
