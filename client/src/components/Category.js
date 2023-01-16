import './styles/Category.css'
import SubCatDropdown from "./SubCatDropdown";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Category({ category, currCategory,changeCategory }) {
    const [dropdown, setDropdown] = useState(false);
    const onMouseEnter = () => { setDropdown(true) };
    const onMouseLeave = () => { setDropdown(false) };
    return (
        <li className="category" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {category.subCategories ? (
                <>
                    <div className="categoryTxt"
                        type="button"
                    >
                        <h3 className="category_text">{category.title}</h3>
                    </div>
                    <SubCatDropdown className="sub_cat_dropdown"
                        subCategories={category.subCategories}
                        dropdown={dropdown}
                        currCategory={currCategory}
                        changeCategory={changeCategory}
                    />
                </>
            ) : (
                <NavLink className="categoryTxt"
                    to={`/products/${category.title}`}
                    key={category}
                >
                    <h3 className= "category_text">{category.title}</h3>
                </NavLink>
            )}
        </li>
    )
};
export default Category;