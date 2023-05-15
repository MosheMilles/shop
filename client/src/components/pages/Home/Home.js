import './Home.css';
import SearchHeader from '../../layout/Header/Header';
import CategoriesBar from '../../layout/CategoriesBar/CategoriesBar';
import Cart from '../../layout/Cart/Cart.js';
import SearchInput from '../../common/SearchInput/SearchInput';
import Footer from '../../layout/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { useContext, useState } from 'react';
import Intro from '../../layout/Intro/Intro';
import ProductsContext from '../../../contexts/ProductsContext';

function Layout() {
    const {currCategory}=useContext(ProductsContext);
    const [isCartShown, setIsCartShown] = useState(false);
    const toggleCart = () => setIsCartShown(!isCartShown);
    return (
        <div dir="rtl">
            <div className="fixed_header" />
            <SearchHeader />
            <CategoriesBar />
            <Cart className="cart" isCartShown={isCartShown} toggleCart={toggleCart} />
            {currCategory &&
                <div className="headline_container">
                    <div className="icon_container"><img className="icon" src={`/${currCategory}.png`} alt={currCategory}></img></div>
                    <h1 className="category_headline">{currCategory}</h1>
                    <div><SearchInput category={currCategory} /></div>
                </div>} 
            <div className={`products_container${isCartShown ? "_70" : "_full"}`} >
            {!currCategory && <Intro />}
                <Outlet />
                <Footer />
            </div>
        </div>
    )
};
export default Layout;