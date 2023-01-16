
// משימות לביצוע:
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
import { Routes, Route, useNavigate } from 'react-router-dom';
import { CartProvider } from '../contexts/CartContext';
import Admin from './Admin';
import Order from './Order';
import InsertProduct from './InsertProduct';
import OrdersList from './OrdersList';
import Layout from './Layout';
import SubmitApproval from './SubmitApproval';

function App() {
  const axios = require('axios').default;
  const navigate = useNavigate();
  const [allProducts, setAllProducts] = useState([]);
  const [products,setProducts]=useState([]);
  const [orders, setOrders] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const cart = {
    data: cartProducts,
    totalPrice: cartProducts.reduce((previous, current) => { return previous + current.quantity * current.price }, 0).toFixed(2),
    productsCount: cartProducts.length,
    add: (value) => addToCart(value),
    remove: (value) => removeFromCart(value),
    addProductComment:({product,productComment})=>addComment({product,productComment})
  };
  const [currCategory,setCurrCategory]=useState();

  useEffect(() => {
    fetchProducts()
  }, []);

  // let orderNumber=0;
  // orders.map((order)=>{
  //   order.id=orderNumber;
  //   orderNumber++;
  //   return order.id;
  // });

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
        setOrders(data.filter(order => order.status === "new_order"));
      });
  };

  function closeOrder(order) {
    console.log("hiii")
    axios.put(`http://localhost:3001/api/orders/${order._id}`, {
      ...order,
      status:"archieve"
    }).then(
    console.log(order)
  )}

//////////////
function changeCategory(category){
  console.log(category)
  if(category){
    console.log(category)
  // setCurrCategory(category);
  navigate(`products/${category}`)}
  else{setCurrCategory();
  navigate('..')}
}
//////////////

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
      if (product.quantity === 0) setCartProducts(cartProducts.filter(item => item.barcode !== product.barcode));
      else setCartProducts([...cartProducts]);
    };
  };

  function addComment({product,productComment}){
    product.comment=productComment;
    setCartProducts([...cartProducts]);
  }

  function submitOrder({ name, address, phoneNumber, requestedTime, comments }) {
    axios.post('http://localhost:3001/api/orders', {
      name: name,
      address: address,
      phoneNumber: phoneNumber,
      // requestedTime:{requestedTime},
      clientComments: comments,
      products: cartProducts,
      productsQuantity: cart.productsCount,
      totalPrice: cart.totalPrice,
      status: "new_order"
    })
      .then(function () {
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
            <Products allProducts={allProducts}setCurrCategory={setCurrCategory} />} />
        </Route>
        <Route path="admin" element={<Admin orders={orders} fetchOrders={fetchOrders} allProducts={allProducts} />} >
          <Route index element={<OrdersList orders={orders} setOrders={setOrders} closeOrder={closeOrder} />} />
          <Route path="orders/:_id" element={<Order orders={orders} fetchOrders={fetchOrders} />} />
          <Route path="insert" element={<InsertProduct />} />
        </Route>
        <Route path="submit_approval" element={<SubmitApproval changeCategory={changeCategory} />} />
      </Routes>
    </CartProvider>
  );
};

export default App;