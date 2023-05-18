import './Products.css';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product.js';
import { useContext, useState } from 'react';
import ProductsContext from '../../../contexts/ProductsContext';

function Products() {

  const axios = require('axios').default;
  const [products, setProducts] = useState([]);
  const { currCategory, setCurrCategory } = useContext(ProductsContext);
  const { category } = useParams();
  if (currCategory !== category) {
    setCurrCategory(category);
    axios.get(`http://${process.env.REACT_APP_ADDRESS}/api/products?category=${category}`)
      .then((res) => {
        console.log(res.data)
        setProducts(res.data);
      })
      .catch(error => {
        console.error(error);
      });
  };
  return (
    <div className="products">
      <div className="cards">
        {products.map((product) =>
          <Product key={product.barcode} className="card" product={product} />
        )}
      </div>
    </div>
  );
};

export default Products;

