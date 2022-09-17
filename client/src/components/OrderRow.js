function OrderRow({ order }) {
    console.log('hiiiiiiiiiiiiiiii');
    console.log(order);
    console.log('byyyyyyyyyyyyyyyyyyyy');
    return (
        <div>
            
            <div>
            {order.totalPrice}
            </div>
             <div>{order.id}</div>
            <div>{order.totalPrice}</div>
            {/* <div>{order.products}</div>  */}
        </div>

    );
};
export default OrderRow;