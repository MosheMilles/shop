import CategoriesBar from './CategoriesBar';
import Products from './Products';
import Cart from './Cart.js';
import { Outlet } from 'react-router-dom';

function Layout({totalPrice,submitOrder}) {
    console.log(totalPrice)
    return (
        <div dir="rtl">
            <CategoriesBar />
            <Cart totalPrice={totalPrice} submitOrder={submitOrder} />
            <Outlet />
        </div>
    )
};
export default Layout;