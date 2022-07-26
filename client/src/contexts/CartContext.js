// import {createContext} from "react";
// export default createContext();

import React from 'react'
const CartContext = React.createContext({});
export const CartProvider = CartContext.Provider;
export const CartConsumer = CartContext.Consumer;
export default CartContext;
