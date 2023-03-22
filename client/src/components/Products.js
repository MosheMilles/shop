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
  // console.log(currCategory)
  
  return (
    <div className="products">
      <div className="cards">
      {products.map((product) => 
        <Product key={product.id} className="card" product={product} />
      )}
      </div>
    </div>
  );
};

export default Products;

