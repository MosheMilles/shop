// בעיות:
// - הכל איטי מאוד -
// - שליחת ההזמנה לא עובדת -

// משימות לביצוע:
//  - עיצוב כל האתר -
// - פונקציית חיפוש מוצרים -
// - הזדהות לממשק אדמין -
// - שיפור והרחבת מסך שידור הזמנה -
// - קבלת הזמנות ללא רפרוש (ajax?) -
// -  ארכיון הזמנות -
// - מערכת ניהול מוצרים -
// - מערכת לקוחות -
// - אייקון טעינה -


import './styles/App.css';
import Intro from './Intro';
import Products from './Products';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '../contexts/CartContext';
import Admin from './Admin';
import Order from './Order';
import Crud from './Crud';
import OrdersList from './OrdersList';
import Layout from './Layout';
import Submit from './Submit';
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
  const [orders, setOrders] = useState([]);
  console.log(totalPrice);

  function fetchProducts() {
    fetch("http://localhost:3001/api/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setAllProducts(data)
      });
  };

  function fetchOrders() {
    fetch("http://localhost:3001/api/orders")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log('gdskjghakjdhgas');
        setOrders(data);
      });
  };

  function addToCart(product) {
    if (!cartProducts.includes(product)) {
      product.quantity = product.isWeighable ? 0.5 : 1;
      setCartProducts([...cartProducts, product]);
    } else {
      product.quantity = product.isWeighable ? product.quantity + 0.5 : product.quantity + 1;
      setCartProducts([...cartProducts])
    };
  };

  function removeFromCart(product) {
    if (product.quantity > 0) {
      product.quantity = product.isWeighable ? product.quantity - 0.5 : product.quantity - 1;
      if (product.quantity === 0) setCartProducts(cartProducts.filter(item => item.id !== product.id));
      else setCartProducts([...cartProducts]);
    };
  };

  function submitOrder({ name, address, phoneNumber }) {
    console.log(name)
    console.log(address)
    console.log(cartProducts)
    axios.post('http://localhost:3001/api/orders', {
      name: { name },
      address: { address },
      phoneNumber: { phoneNumber },
      products: { cartProducts },
      // totalPrice: {totalPrice}
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Router>
      <CartProvider value={cart}>
        <Routes>
          <Route path="/" element={<Layout allProducts={allProducts} totalPrice={totalPrice} submitOrder={submitOrder} />}>
            <Route index element={<Intro />} />
            <Route path="products/:category" element={
              <Products allProducts={allProducts} />} />
          </Route>
          <Route path="admin" element={<Admin orders={orders} fetchOrders={fetchOrders} />} >
            <Route index element={<OrdersList orders={orders} />} />
            <Route path="orders/:_id" element={<Order orders={orders} />} />
            <Route path="crud" element={<Crud />} />
          </Route>
          {/* <Route path="submit_order" element={<Submit products={cartProducts} />} /> */}
        </Routes>
      </CartProvider>
    </Router >
  );
};

export default App;