import './styles/SubCatDropdown.css';
import { Link } from "react-router-dom";

const SubCatDropdown = ({ subCategories, dropdown }) => {
  return (
    <div className="dropdown_container">
      <ul className={`subCatDropdown${dropdown ? "Show" : ""}`}>
        {subCategories.map((subCategory, index) => (
          <li key={index}>
            <Link to={`/products/${subCategory}`} className="category_link"><h3 className="subCategories">{subCategory}</h3></Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubCatDropdown;