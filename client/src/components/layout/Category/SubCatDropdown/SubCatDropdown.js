import { useContext } from 'react';
import './SubCatDropdown.css';
import ProductsContext from '../../../../contexts/ProductsContext';
import { Link } from 'react-router-dom';
function SubCatDropdown({ category, dropdown }) {
  console.log(category)
  // const { getProducts } = useContext(ProductsContext);
  // const getCaegoryProducts = (e) => {
  //   getProducts(category)
  // };
  return (
    <div className="dropdown_container">
      <ul className={`subCatDropdown${dropdown ? "Show" : ""}`}>
        {category.subCategories.map((subCategory, index) => (
          <Link to= {`/products/${subCategory.name}`} key={subCategory.name}>
          <li key={index}>
            <h3 className="subCategories" 
            // onClick={getCaegoryProducts}
            >{subCategory.name}</h3>
          </li>
           </Link>
        ))}
      </ul>
    </div>
  );
};

export default SubCatDropdown;