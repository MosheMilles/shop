import './SearchInput.css';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useRef, useEffect } from 'react';
import ProductRow from '../../layout/ProductRow/ProductRow';

function SearchInput({ className, allProducts, category }) {
    const ref = useRef(null)
    const placeholder = category ? "חפש בקטגוריית " + category : "חפש מוצר";
    const [searchValue, setSearchValue] = useState("");
    const searchResults = category ? allProducts.filter(product => product.category === category && product.name.includes(searchValue)) :
        allProducts.filter(product => product.name.includes(searchValue))
    const [isOpen, setIsOpen] = useState(false);
    const updateSearch = (e) => {
        setSearchValue( e.target.value);
        if ( e.target.value.length >= 2) setIsOpen(true);
        else setIsOpen(false);
    };
    const closeDropdown = (event) => { if (ref.current && !ref.current.contains(event.target)) setIsOpen(false) };
    useEffect(() => {
        document.addEventListener('mousedown', closeDropdown);
        return () => {
          document.removeEventListener('mousedown', closeDropdown);
        };
      }, [ref]);

    return (
        <div className={className}>
            <input type="search" className="search" placeholder={placeholder} value={searchValue} onChange={updateSearch} />
            <div className="search_icon"><SearchIcon style={{ color: "rgb(11, 112, 53)" }} /></div>
            {isOpen &&
                <ul className="search_dropdown" ref={ref}>
                    {searchResults.map((product) => (
                        <li>
                            <ProductRow product={product} />
                        </li>
                    ))}
                </ul>
            }
        </div>
    )
};
export default SearchInput;