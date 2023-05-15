import ProductsContext from '../../../contexts/ProductsContext';
import './Category.css'
import SubCatDropdown from "./SubCatDropdown/SubCatDropdown";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

function Category({ category, admin }) {
    // const { getProducts } = useContext(ProductsContext);
    const [dropdown, setDropdown] = useState(false);
    const onMouseEnter = () => { setDropdown(true) };
    const onMouseLeave = () => { setDropdown(false) };
    // function getCategoryProducts() {
    //     console.log("vcnfgz")
    //     getProducts(category);
    // }

    return (
        <li className="category" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {category.subCategories ? (
                <>
                    <div className="categoryTxt"
                        type="button"
                    >
                        <h3 className="category_text">
                            {category.name}</h3>
                    </div>
                    <SubCatDropdown className="sub_cat_dropdown"
                        category={category}
                        dropdown={dropdown}
                    />
                </>
            ) : (<>
                {admin && <h3 className="category_text">{category.name}</h3>}
                {!admin &&
                    <NavLink className="categoryTxt" 
                    // onClick={getCategoryProducts}
                        to={`/products/${category.name}`}
                        key={category}
                    >
                        <h3 className="category_text">  {category.name === "מבצעים" && <span><img style={{ height: "17px" }} src="/gift.png" alt="מתנה" /> </span>}{category.name}</h3>
                    </NavLink>
                }</>)}
        </li>
    )
};
export default Category;