import './Category.css'
import SubCatDropdown from "./SubCatDropdown/SubCatDropdown";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Category({ category, changeCategory, admin }) {
    const [dropdown, setDropdown] = useState(false);
    const onMouseEnter = () => { setDropdown(true) };
    const onMouseLeave = () => { setDropdown(false) };
    console.log(category.title==="מבצעים")
    return (
        <li className="category" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {category.subCategories ? (
                <>
                    <div className="categoryTxt"
                        type="button"
                    >
                        <h3 className="category_text">
                            {category.title}</h3>
                    </div>
                    <SubCatDropdown className="sub_cat_dropdown"
                        subCategories={category.subCategories}
                        dropdown={dropdown}
                        changeCategory={changeCategory}
                    />
                </>
            ) : (<>
                {admin && <h3 className="category_text">{category.title}</h3>}
                {!admin &&
                    <NavLink className="categoryTxt"
                        to={`/products/${category.title}`}
                        key={category}
                    >
                        <h3 className="category_text">  {category.title==="מבצעים"&& <span><img style={{height:"17px"}} src="/gift.png" alt="מתנה" /> </span> }{category.title}</h3>
                    </NavLink>
                }</> )}
        </li>
    )
};
export default Category;