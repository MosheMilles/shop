import './SearchInput.css';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function SearchInput( {items} ) {
console.log(items);
    // const axios = require('axios').default;
    const className = "general_search";
    const placeholder = "חפש";
    const [searchValue, setSearchValue] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const updateSearch = (e) => {
        setSearchValue(e.target.value);
        if (e.target.value.length >= 3) getSearchResults( e.target.value);
        else setSearchResults([]);
    };

////////////////////////

function getSearchResults(value) {
    console.log(value)
    console.log(items)
    const results = items.filter(item =>
        item.title.includes(value)
      );
      console.log(results)
      setSearchResults(results);
   
}
///////////////////////

function linkToItem(){
    setSearchResults([]);
    searchValue('');
}

    return (
        <div className={className}>
            <input type="search" className="search" placeholder={placeholder} value={searchValue} onChange={updateSearch} />
            <div className="search_icon"><SearchIcon style={{ color: "rgb(11, 112, 53)" }} /></div>
            <ul className="search_dropdown">
                {searchResults.map((item) => {
                    return(
                    <li key={item.id}>
                        <Link to={`items/${item.id}`} 
                         onClick={()=>linkToItem() } 
                            className="link" >
                            <h4 >{item.title}</h4>
                        </Link>
                    </li>
                )})}
            </ul>
        </div>
    )

};
export default SearchInput;