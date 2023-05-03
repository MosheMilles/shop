import './Header.css';
import Logo from "../../common/Logo/Logo";
import React from 'react';
import SearchInput from '../../common/SearchInput/SearchInput';

function SearchHeader({ allProducts, changeCategory }) {
    const change = () => changeCategory();
        return (
        <div className="search_bar">
            <div onClick={change}><Logo /></div>
            <SearchInput className="general_search" allProducts={allProducts} />
        </div>
    )
};
export default SearchHeader;