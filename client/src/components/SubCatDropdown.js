import './styles/SubCatDropdown.css';
const SubCatDropdown = ({ subCategories, dropdown,changeCategory}) => {
 
  const change=(e)=>{console.log(e.target.textContent);
    changeCategory(e.target.textContent)};
  return (
    <div className="dropdown_container">
      <ul className={`subCatDropdown${dropdown ? "Show" : ""}`}>
        {subCategories.map((subCategory, index) => (
          <li key={index}>
              <h3 className="subCategories" onClick={change}>{subCategory}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubCatDropdown;