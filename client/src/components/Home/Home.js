import './Home.css';
import SearchInput from '../SearchInput/SearchInput';
import { Link, Outlet } from 'react-router-dom';
import { Button } from '@mui/material';

function Layout({docs}) {
    return (
        <div dir="rtl">
            <div className="fixed_header" >
                <h1>  מערכת מידע   <span>  מחלקת גביה  </span></h1>
                <Link to="insert"><div className="plus" >+</div></Link>
                <div className='input_container'>
                    <SearchInput items={docs} />
                </div>
            </div>

            <div className='items_container' >

                <Outlet />

            </div>
        </div>
    )
};
export default Layout;