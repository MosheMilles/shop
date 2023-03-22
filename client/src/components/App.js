
// משימות לביצוע:
// - הזדהות לממשק אדמין -
// - שיפור והרחבת מסך שידור הזמנה -
// - קבלת הזמנות ללא רפרוש (ajax?) -
// -  ארכיון הזמנות -
// - מערכת ניהול מוצרים -
// - מערכת לקוחות -
// - אייקון טעינה -


import './styles/App.css';
import Products from './Products';
import { useEffect, useState, useMemo } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { CartProvider } from '../contexts/CartContext';
import Admin from './Admin';
import Order from './Order';
import OrdersList from './OrdersList';
import Layout from './Layout';
import Submit from './Submit';
import SubmitApproval from './SubmitApproval';

function App() {
  const axios = require('axios').default;
  const navigate = useNavigate();
  const [allProducts, setAllProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [currCategory, setCurrCategory] = useState();
  const temporarySales = [{ id: 1, title: "ניסיון1 וניסיון2 - 3 ב-30", products: [101, 102], count: 3, specialPrice: 30, condition: 100, exception: [101, 102, 110] }];
  const cart = {
    data: cartProducts,
    totalPrice: parseFloat(cartProducts.reduce((previous, current) => { return previous + current.quantity * current.price - current.discount.sum }, 0).toFixed(2)),
    productsCount: cartProducts.length,
    add: (value) => addToCart(value),
    remove: (value) => removeFromCart(value),
    zero: () => {
      setCartProducts([]);
    },
    addProductComment: ({ product, productComment }) => addComment({ product, productComment })
  };

  useEffect(() => {
    fetchProducts()
  }, []);

  function fetchProducts() {
    fetch("http://localhost:3001/api/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data)
      });
  };

  function fetchOrders() {
    fetch("http://localhost:3001/api/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data.filter(order => order.status === "new_order"));
      });
  };

  function closeOrder(order) {
    axios.put(`http://localhost:3001/api/orders/${order._id}`, {
      ...order,
      status: "archieve"
    })
  }

  function changeCategory(category) {
    if (category) {
      navigate(`products/${category}`)
    }
    else {
      setCurrCategory();
      navigate('..')
    }
  }

  function addToCart(product) {
    if (!cartProducts.includes(product)) {
      product.quantity = product.isWeighable ? 0.5 : 1;
      cartProducts.push(product);
    } else product.quantity = product.isWeighable ? product.quantity + 0.5 : product.quantity + 1;
    let updatedPrice = cart.totalPrice + product.price;
     console.log(typeof cart.totalPrice)
    console.log(typeof updatedPrice)
    cartProducts.map((product, index) => {
      console.log(updatedPrice)
      if (product.sale) implementSale(product, index,updatedPrice);
      return product;
    });
    setCartProducts([...cartProducts]);
  };

  function removeFromCart(product) {
    if (product.quantity > 0) {
      product.quantity = product.isWeighable ? product.quantity - 0.5 : product.quantity - 1;
      let updatedPrice = cart.totalPrice - product.price;
      cartProducts.map((product, index) => {
        if (product.sale) implementSale(product, index,updatedPrice);
        return product;
      });
      setCartProducts(cartProducts.filter(item => item.quantity > 0));
    };
  };

  function implementSale(product, index,updatedPrice) {
    console.log('hiiiii')
    const sale = temporarySales.find(sale => sale.id === product.sale);
    const saleProducts = cartProducts.filter(item => item.sale === product.sale);
    const saleProductsQuantity = saleProducts.reduce((prev, curr) => { return prev + curr.quantity }, 0);
    const exceptionProducts = cartProducts.filter(item => sale.exception.includes(item.barcode));
    const exception = exceptionProducts.reduce((previous, current) => { return previous + current.quantity * current.price - current.discount.sum }, 0).toFixed(2);
    const saleProductsPrice = sale.specialPrice * Math.floor(saleProductsQuantity / sale.count)
      + (saleProductsQuantity % sale.count) * saleProducts[0].price;
    const discount = (saleProducts.reduce((prev, curr) => { return prev + curr.price * curr.quantity }, 0) - saleProductsPrice).toFixed(2);
    const saleIndex = cartProducts.findLastIndex(item => item.sale === product.sale);
    console.log(updatedPrice - exception)
    if (updatedPrice - exception >= sale.condition && index === saleIndex) {
      console.log('hoooooo')
      product.discount.sum = discount;
      product.discount.sale = sale.title
    }
    else product.discount.sum = 0;
  };

  function addComment({ product, productComment }) {
    product.comment = productComment;
    setCartProducts([...cartProducts]);
  }

  function submitOrder({ name, address, phoneNumber, date, hours, comments }) {
    console.log("submit")
    // console.log(requestedTime)
    axios.post('http://localhost:3001/api/orders', {
      name: name,
      address: address,
      phoneNumber: phoneNumber,
      date: date,
      hours: hours,
      clientComments: comments,
      products: cartProducts,
      productsQuantity: cart.productsCount,
      totalPrice: cart.totalPrice,
      status: "new_order"
    })
      .then(function () {
        cart.zero();
        navigate("submit_approval");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <CartProvider value={cart}>
      <Routes>
        <Route path="/" element={<Layout allProducts={allProducts} currCategory={currCategory} changeCategory={changeCategory} submitOrder={submitOrder} />}>
          <Route path="products/:category" element={
            <Products allProducts={allProducts} setCurrCategory={setCurrCategory} />} />
        </Route>
        <Route path="submit" element={<Submit submitOrder={submitOrder} allProducts={allProducts} />} />
        <Route path="submit_approval" element={<SubmitApproval changeCategory={changeCategory} />} />
        <Route path="admin" element={<Admin orders={orders} fetchOrders={fetchOrders} allProducts={allProducts} />} >
          <Route index element={<OrdersList orders={orders} setOrders={setOrders} closeOrder={closeOrder} />} />
          <Route path="orders/:_id" element={<Order orders={orders} fetchOrders={fetchOrders} />} />
        </Route>
      </Routes>
    </CartProvider>
  );
};

export default App;