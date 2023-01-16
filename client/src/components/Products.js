import './styles/Products.css';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Product from './Product.js';
import Footer from './Footer';
function Products({allProducts,setCurrCategory}) {

  let params = useParams();
  let category = params.category
  setCurrCategory(category);
  let products = allProducts.filter(product => product.category === category)
  console.log(products)
  const [searchDropdown, setSearchDropdown] = useState([]);
  const updateSearch = (e) => {
      const searchArray = products.filter(product => product.name.includes(e.target.value));
      if (e.target.value.length >= 2) setSearchDropdown(searchArray);
      else setSearchDropdown([]);
  }
  return (
    <div className="products">
      {/* <div className="headline_container">
        <div className="icon_container"><img className="icon" src={`/${category}.png`} alt={category}></img></div>
        <h1 className="category_headline">{category}</h1>
        <input type="search" className="search_in_category" onChange={updateSearch} />
      </div> */}
      <div className="cards">
      {products.map((product) => 
        <Product key={product.id} className="card" product={product} />
      )}
      </div>
    </div>
  );
};

export default Products;

