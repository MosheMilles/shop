// import './Header.css';
// import { Link, Toolbar } from '@mui/material';

import SearchAppBar from "./SearchAppBar";
import CategoriesBar from "./CategoriesBar";


function Header({categories,filterByCategory}) {
  return (
    <div>
      <SearchAppBar />
      <CategoriesBar categories={categories} filterByCategory={filterByCategory} />
    </div>
  )
}
export default Header;
