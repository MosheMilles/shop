import { useContext } from 'react';
import './SubCatDropdown.css';
import ProductsContext from '../../../../contexts/ProductsContext';
import { Link } from 'react-router-dom';
function SubCatDropdown({ subCategories, dropdown }) {
  const { getProducts } = useContext(ProductsContext);
  const getCaegoryProducts = (e) => {
    getProducts(e.target.textContent, "")
  };
  return (
    <div className="dropdown_container">
      <ul className={`subCatDropdown${dropdown ? "Show" : ""}`}>
        {subCategories.map((subCategory, index) => (
          <Link to= {`/products/${subCategory}`}><li key={index}>
            <h3 className="subCategories" onClick={getCaegoryProducts}>{subCategory}</h3>
          </li></Link>
        ))}
      </ul>
    </div>
  );
};

export default SubCatDropdown;