import './CategoriesBar.css';
import * as React from 'react';
import { categories } from '../../../categories';
import Category from '../Category/Category';

export default function CategoriesBar({ currCategory, changeCategory }) {

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



