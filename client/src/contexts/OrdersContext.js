import React from 'react'
const OrdersContext = React.createContext({});
export const OrdersProvider = OrdersContext.Provider;
export const CartConsumer = OrdersContext.Consumer;
export default OrdersContext;