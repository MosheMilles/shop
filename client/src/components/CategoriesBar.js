import './styles/CategoriesBar.css';
import * as React from 'react';
import { categories } from '../categories';
import Category from './Category';

export default function CategoriesBar({ allProducts, currCategory, changeCategory }) {

  return (
    <nav>
      <ul className="categories">
        {categories.map((category, index) =>
           <Category category={category} index={index} currCategory={currCategory} changeCategory={changeCategory} />
        )}
      </ul>
    </nav>
  );
}



