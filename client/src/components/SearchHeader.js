import './styles/SearchHeader.css';
import { useState } from 'react';
import Logo from "./Logo";
import SearchIcon from '@mui/icons-material/Search';
import CartProduct from './CartProduct';
import React from 'react';
import { Link } from 'react-router-dom';
import ProductRow from './ProductRow';

function SearchHeader({ allProducts, changeCategory }) {
    console.log(allProducts)
    const change=()=>changeCategory();
    const [searchDropdown, setSearchDropdown] = useState([]);
    const updateSearch = (e) => {
        const searchArray = allProducts.filter(product => product.name.includes(e.target.value));
        if (e.target.value.length >= 2) setSearchDropdown(searchArray);
        else setSearchDropdown([]);
    }
    return (
        <div className="search_bar">
            <div onClick={change}><Logo /></div>
            <div className="search_div">
                <input type="search" className="search" onChange={updateSearch} />
                <div className="search_button"><SearchIcon style={{ color: "rgb(11, 112, 53)" }} /></div>
                <ul className="search_dropdown">
                    {searchDropdown.map((product) => (
                        <li>
                            <ProductRow product={product} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
};
export default SearchHeader;