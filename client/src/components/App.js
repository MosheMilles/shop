import './styles/App.css';
import CategoriesBar from './CategoriesBar';
import Intro from './Intro';
import Products from './Products';
import Cart from './Cart.js';
import { useEffect, useState } from 'react';
import { Link, Outlet, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '../contexts/CartContext';
import Admin from './Admin';
import Layout from './Layout';
const axios = require('axios').default;

function App() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
  }, []);

  console.log(allProducts);
  const [cartProducts, setCartProducts] = useState([]);
  const cart = { data: cartProducts, add: (value) => addToCart(value), remove: (value) => removeFromCart(value) };
  const totalPrice = cart.data.reduce((previous, current) => { return previous + current.quantity * current.price }, 0).toFixed(1);
console.log(totalPrice)

  function fetchProducts() {
    fetch("http://localhost:3001/api/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setAllProducts(data)
      });
  };

  function addToCart(product) {
    console.log(!cartProducts.includes(product))
    if (!cartProducts.includes(product)) {
      product.quantity = product.isWeighable ? 0.5 : 1;
      setCartProducts([...cartProducts, product]);
    } else {
      product.quantity = product.isWeighable ? product.quantity + 0.5 : product.quantity + 1;
      setCartProducts([...cartProducts])
    };
  }

  function removeFromCart(product) {
    if (product.quantity > 0) {
      product.quantity = product.isWeighable ? product.quantity - 0.5 : product.quantity - 1;
      if (product.quantity === 0) setCartProducts(cartProducts.filter(item => item.id !== product.id));
      else setCartProducts([...cartProducts]);
    };
  }

  function submitOrder() {
    axios.post('http://localhost:3001/api/orders', {

      firstName: 'Fred',
      lastName: 'Flintstone'
    })
      .then(function (response) {
        console.log('hi')
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <Router>
      <CartProvider value={cart}>
        <Routes>
          <Route path="/" element={<Layout totalPrice={totalPrice} submitOrder={submitOrder} />}>
            <Route index element={<Intro />} />
            <Route path="products/:category" element={
              <Products allProducts={allProducts} />} />
          </Route>
          <Route path="admin/*" element={<Admin />} />
        </Routes>
      </CartProvider>
    </Router >

  );
}

export default App;