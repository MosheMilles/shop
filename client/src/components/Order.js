import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function Order({ orders }) {

    ///////////////////////
// const [order,setOrder]=useState({})
    ///////////////////////

    let params = useParams();
    console.log(params.id)
    let id = params.id

    console.log(id)
    console.log(orders)


    let currOrder = orders.find(order => order._id === id);
    console.log(currOrder)
    console.log(currOrder.products)
//    setOrder(currOrder)
    // let products=order.products


    return (
        <div>
            {currOrder.products.map(product=>
            <div key={product.id}>{product.quantity} {product.name} {product.price} </div>
                )}
                <Link to=".."><button>חזור</button></Link>
        </div>
    );
};
export default Order;
