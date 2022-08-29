import './styles/App.css';
import CategoriesBar from './CategoriesBar';
import Header from './Header.js';
import Cart from './Cart.js';
import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { CartProvider } from '../contexts/CartContext';

function App() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
  }, []);

  console.log(allProducts);
  const [cartProducts, setCartProducts] = useState([]);
  const cart = { data: cartProducts, add: (value) => addToCart(value), remove: (value) => removeFromCart(value) };
  const totalPrice = cart.data.reduce((previous, current) => { return previous + current.quantity * current.price }, 0).toFixed(1);


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
      product.quantity =  product.isWeighable ? 0.5 : 1;
      setCartProducts([...cartProducts, product]);
    } else {
      product.quantity = product.isWeighable ? product.quantity+0.5 : product.quantity+1;
      setCartProducts([...cartProducts])
    };
  }

  function removeFromCart(product) {
    if (product.quantity > 0) {
      product.quantity = product.isWeighable ? product.quantity-0.5 : product.quantity-1;
      if (product.quantity === 0) setCartProducts(cartProducts.filter(item => item.id !== product.id));
      else setCartProducts([...cartProducts]);
    };
  }

  return (
    <CartProvider value={cart}>
      <div className="app" dir="rtl" >
        <CategoriesBar />
        <Cart totalPrice={totalPrice} />
        <Outlet />
      </div>

    </CartProvider>
  );
}

export default App;