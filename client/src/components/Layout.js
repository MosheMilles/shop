import './styles/Layout.css';
import SearchHeader from './SearchHeader';
import CategoriesBar from './CategoriesBar';
import Cart from './Cart.js';
import SearchInput from './SearchInput';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Intro from './Intro';

function Layout({ allProducts, currCategory, changeCategory, submitOrder,salesToRender }) {
    console.log(salesToRender)
    const [isCartShown, setIsCartShown] = useState(false);
    const toggleCart = () => setIsCartShown(!isCartShown);
    return (
        <div dir="rtl">
            <div className="fixed_header" />
            <SearchHeader allProducts={allProducts} changeCategory={changeCategory} />
            <CategoriesBar allProducts={allProducts} currCategory={currCategory} changeCategory={changeCategory} />
            <Cart className="cart" isCartShown={isCartShown} toggleCart={toggleCart} />
            {currCategory !== undefined &&
                <div className="headline_container">
                    <div className="icon_container"><img className="icon" src={`/${currCategory}.png`} alt={currCategory}></img></div>
                    <h1 className="category_headline">{currCategory}</h1>
                    <div><SearchInput className="search_in_cat" allProducts={allProducts} category={currCategory} /></div>
                </div>} 
            <div className={`products_container${isCartShown ? "_70" : "_full"}`} >
            {!currCategory && <Intro allProducts={allProducts} />}
                <Outlet />
                {/* </div> */}
                <Footer />
            </div>
        </div>
    )
};
export default Layout;