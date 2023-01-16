import './styles/Layout.css';
import SearchHeader from './SearchHeader';
import CategoriesBar from './CategoriesBar';
import Cart from './Cart.js';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Intro from './Intro';

function Layout({ allProducts, currCategory, changeCategory, submitOrder }) {

    const [cartShown, setCartShown] = useState(false);
    const toggleCart = () => setCartShown(!cartShown);
    console.log(currCategory)
    console.log(!currCategory)
    console.log(currCategory !== undefined)
    return (
        <div dir="rtl">
            <div className="fixed_header" />
            <SearchHeader allProducts={allProducts} changeCategory={changeCategory} />
            <CategoriesBar allProducts={allProducts} currCategory={currCategory} changeCategory={changeCategory} />
            <Cart className="cart" submitOrder={submitOrder} cartShown={cartShown} setCartShown={setCartShown} toggleCart={toggleCart} />
            {currCategory !== undefined &&
                <div className="headline_container">
                    <div className="icon_container"><img className="icon" src={`/${currCategory}.png`} alt={currCategory}></img></div>
                    <h1 className="category_headline">{currCategory}</h1>
                    <input type="search" className="search_in_category" />
                </div>} 
                {/* // :
                // <Intro />} */}
            <div className={`products_container${cartShown ? "_70" : "_full"}`} >
            {!currCategory && <Intro allProducts={allProducts} />}
                <Outlet />
                <Footer />
            </div>
        </div>
    )
};
export default Layout;