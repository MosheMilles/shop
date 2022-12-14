import './styles/CategoriesBar.css';
import * as React from 'react';
import { categories } from '../categories';
import Category from './Category';

export default function CategoriesBar({ allProducts, filterByCategory }) {

  return (
    <nav>
      <ul className="categories">
        {categories.map((category, index) =>
        <Category category={category} index={index} />        
        )}
      </ul>
    </nav>
  );
}



