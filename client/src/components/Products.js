import './styles/Products.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from './Product.js';
// import { allProducts } from '../data.js';
function Products({allProducts}) {

// const [allProducts,setAllProducts]=useState([]);  
// console.log(allProducts)

// useEffect(()=>{
//  fetchProducts()
// },[]);

// function fetchProducts() {
//   fetch("http://localhost:3001/api/products")
//     .then((res) => res.json())
//     .then((data) => setAllProducts(data))
//     .then(console.log(allProducts));
// };
  

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

