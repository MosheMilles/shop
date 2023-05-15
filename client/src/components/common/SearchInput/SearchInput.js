import './SearchInput.css';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useRef } from 'react';
import ProductRow from '../../layout/ProductRow/ProductRow';

function SearchInput({ category }) {

    const axios = require('axios').default;
    const className=category==="all"?"general_search":"search_in_cat";
    const placeholder = category !== "all" ? "חפש בקטגוריית " + category : "חפש מוצר";
    const [searchValue, setSearchValue] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const updateSearch = (e) => {
        setSearchValue(e.target.value);
        if (e.target.value.length >= 2) getSearchResults(category, e.target.value);
        else setSearchResults([]);
    };

    function getSearchResults(category, searchQuery) {

        if (category === "all") {
            axios.get(`http://${process.env.REACT_APP_ADDRESS}/api/products?search=${searchQuery}`)
                .then((res) => {
                    setSearchResults(res.data);
                })
                .catch(error => {
                    console.error(error);
                });
        }
        else {
            axios.get(`http://${process.env.REACT_APP_ADDRESS}/api/products?category=${category}&&search=${searchQuery}`)
                .then((res) => {
                    setSearchResults(res.data);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    };
    return (
        <div className={className}>
            <input type="search" className="search" placeholder={placeholder} value={searchValue} onChange={updateSearch} />
            <div className="search_icon"><SearchIcon style={{ color: "rgb(11, 112, 53)" }} /></div>
            <ul className="search_dropdown">
                {searchResults.map((product) => (
                    <li>
                        <ProductRow product={product} />
                    </li>
                ))}
            </ul>
        </div>
    )
};
export default SearchInput;