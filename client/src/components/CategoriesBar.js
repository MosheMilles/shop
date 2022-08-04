import './styles/categoriesBar.css';
import * as React from 'react';
// import {allProducts} from '../data.js';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Outlet,NavLink} from 'react-router-dom';




export default function CategoriesBar({filterByCategory, allProducts}) {
  console.log('categoriesBar')
  console.log(allProducts)
  let categories = allProducts.map(p => p.category).filter((value, index, array) => array.indexOf(value) === index);
console.log(categories)

  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='secondary'>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display:'flex' }}
          >
            {categories.map(category => 
             <NavLink
             style={({ isActive }) => {
               return {
                 display: "block",
                 margin: "1rem 0",
                 color: isActive ? "red" : "",
               };
             }}
             to={`/products/${category}`}
             key={category}
           >
             {category}
           </NavLink>
                //  <Link to="/products"> <Box className='category' key={category} sx={{ display: 'flex', flexDirection: 'row', borderLeft:1, p:2 }}
                //  onClick={e=>{filterByCategory(e.target.textContent)}}>{category}</Box></Link>
            )}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    <Outlet />
    </div>
  );
}



