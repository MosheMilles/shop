import './styles/SearchHeader.css';
import { useState } from 'react';
import Logo from "./Logo";
import SearchIcon from '@mui/icons-material/Search';
import CartProduct from './CartProduct';
import React from 'react';
import { Link } from 'react-router-dom';
import ProductRow from './ProductRow';

function SearchHeader({ allProducts, changeCategory }) {
    const change = () => changeCategory();
    const [searchDropdown, setSearchDropdown] = useState([]);
    const [searchValue, setSearchValue] = useState("חפש מוצר");
    const updateSearch = (e) => {
        setSearchValue(e.target.value);
        setSearchDropdown( allProducts.filter(product => product.name.includes(e.target.value)));
    };
        return (
        <div className="search_bar">
            <div onClick={change}><Logo /></div>
            <div className="search_div">
                <input type="search" className="search" value={searchValue} onChange={updateSearch} />
                <div className="search_button"><SearchIcon style={{ color: "rgb(11, 112, 53)" }} /></div>
                {searchValue.length >= 2 &&
                    <ul className="search_dropdown">
                        {searchDropdown.map((product) => (
                            <li>
                                <ProductRow product={product} />
                            </li>
                        ))}
                    </ul>
                }
            </div>
        </div>
    )
};
export default SearchHeader;