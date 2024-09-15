import './Home.css';
import SearchInput from '../SearchInput/SearchInput';
import { Link, Outlet } from 'react-router-dom';

function Layout() {

    return (
        <div dir="rtl">
            <div className="fixed_header" >
                <h1>  מערכת שיתוף ידע   <span>  מחלקת גביה  </span></h1>
                <Link to="edit"><div className="plus" >+</div></Link>
                <div className='input_container'>
                    <SearchInput />
                </div>
            </div>
            <div className='items_container' >

                <Outlet />

            </div>
        </div>
    )
};
export default Layout;