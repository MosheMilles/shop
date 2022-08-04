import './styles/App.css';
import './styles/categoriesBar.css';
import * as React from 'react';
// import {allProducts} from '../data.js';
import Home from './Home'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import { Outlet, NavLink } from 'react-router-dom';
import Header from './Header.js';
// import {allProducts} from '../data.js';
import Cart from './Cart.js';
import CategoriesBar from './CategoriesBar';
import Products from './Products';
import { useState,useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { CartProvider } from '../contexts/CartContext';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {

  const [cartProducts, setCartProducts] = useState([]);
  const cart = { data: cartProducts, add: (value) => addToCart(value), remove: (value) => removeFromCart(value) };
  const totalPrice = cart.data.reduce((previous, current) => { return previous + current.quantity * current.price }, 0).toFixed(1);

  const [allProducts, setAllProducts] = useState([]);
  console.log(allProducts)

  useEffect(() => {
    fetchProducts()
  }, []);

  function fetchProducts() {
    fetch("http://localhost:3001/api/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data))
      .then(console.log(allProducts));
  };


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
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="products" element=
              {<CategoriesBar allProducts={allProducts} />}>

              <Route
                index
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>Select a category</p>
                  </main>
                }
              />
              <Route path=":category" element={
                <div>
                  <Products allProducts={allProducts} />
                </div>
              }
              />

            </Route>
          </Route>
        </Routes>
      </Router >
      {/* <CartProvider value={cart}>
          <Outlet />
          <Cart className="cart" totalPrice={totalPrice} />
        </CartProvider> */}
    </div>
  );
}

export default App;