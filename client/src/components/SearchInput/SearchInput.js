import './SearchInput.css';
import SearchIcon from '@mui/icons-material/Search';
import { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import DocsContext from '../../contexts/DocsContext';

function SearchInput( {edit} ) {
    const { docs } = useContext(DocsContext);
    const [searchValue, setSearchValue] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    if (!docs) {
        return <div>Loading...</div>; // או רכיב טעינה אחר
    }
console.log(docs);


    const placeholder = "חפש";
   
    const updateSearch = (e) => {
        setSearchValue(e.target.value);
        if (e.target.value.length >= 3) getSearchResults( e.target.value);
        else setSearchResults([]);
    };

////////////////////////

function getSearchResults(value) {
    console.log(value)
    console.log(docs)

    const results = docs.filter(item =>
        item&&item.title&&item.title.includes(value)
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
        <div className= "general_search">
            <input type="search" className="search" placeholder={placeholder} value={searchValue} onChange={updateSearch} />
            <div className="search_icon"><SearchIcon style={{ color: "rgb(11, 112, 53)" }} /></div>
            <ul className="search_dropdown">
                {searchResults.map((item) => {
                    const destination=edit?`${item.id}`:`items/${item.id}`
                    return(
                    <li key={item.id}>
                        <Link to=
                        {destination} 
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