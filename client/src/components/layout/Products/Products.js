import './Products.css';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product.js';
import { useContext } from 'react';
import ProductsContext from '../../../contexts/ProductsContext';

function Products({setCurrCategory}) {
const allProducts=useContext(ProductsContext);
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

