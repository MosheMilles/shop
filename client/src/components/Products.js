import './styles/Products.css';
import { useParams } from 'react-router-dom';
import Product from './Product.js';
import { allProducts } from '../data.js';
function Products() {

  let params = useParams();
  let category = params.category

  console.log(allProducts)

  let products = allProducts.filter(product => product.category === category)
  console.log(products)

  return (
    <div className="products">
      {products.map((product) => 
        <Product key={product.id} className="card" product={product} />
      )};
    </div>
  );
};

export default Products;

