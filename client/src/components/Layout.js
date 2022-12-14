import './styles/Layout.css';
// import SearchBar from './SearchBar';
import SearchHeader from './SearchHeader';
import CategoriesBar from './CategoriesBar';
import Cart from './Cart.js';
import { Outlet } from 'react-router-dom';

function Layout({ allProducts, totalPrice, submitOrder }) {
    console.log(totalPrice)
    return (
        <div dir="rtl">
            <SearchHeader allProducts={allProducts} />
            <CategoriesBar allProducts={allProducts} />
            <div className='productsAndCart'>
                <Outlet className="products" />
                <Cart className="cart" totalPrice={totalPrice} submitOrder={submitOrder} />
            </div>
        </div>
    )
};
export default Layout;