import './styles/App.css';
import Header from './Header.js';
import {allProducts} from '../data.js';
import Cart from './Cart.js';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { CartProvider } from '../contexts/CartContext';

function App() {
 
  console.log(allProducts);
  const [cartProducts, setCartProducts] = useState([]);
  const cart = { data: cartProducts, add: (value) => addToCart(value), remove: (value)=>removeFromCart(value) };
  const totalPrice = cart.data.reduce((previous, current) => { return previous + current.quantity * current.price }, 0).toFixed(1);

  function addToCart(product) {
    console.log(!cartProducts.includes(product))
    if (!cartProducts.includes(product)) {
      product.quantity = 1;
      setCartProducts([...cartProducts, product]);
    } else {
      product.quantity++;
      setCartProducts([...cartProducts])
    };
  }

  function removeFromCart(product) {
    if (product.quantity > 0) {
      product.quantity--;
      if (product.quantity === 0) setCartProducts(cartProducts.filter(item => item.id !== product.id));
      else setCartProducts([...cartProducts]);
    };
  }

  return (
      <div className="App" dir="rtl">
        <CartProvider value={cart}>
          <Outlet />
          <Cart className="cart" totalPrice={totalPrice} />
        </CartProvider>
      </div>
  );
}

export default App;