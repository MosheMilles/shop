import './Intro.css';
import Product from '../Product/Product';
import ImageSlider from './ImageSlider/ImageSlider';
import { useContext } from 'react';
import ProductsContext from '../../../contexts/ProductsContext';
function Intro() {
const allProducts=useContext(ProductsContext);
    return (
        <div className="intro">
            <ImageSlider />
            <div className="sales_headline" >
                <div id="sales_icon_container"><img id="sales_icon" src="/gift.png" alt="מתנה" /></div>
                <h1 id="sales_headline_txt">מבצעי השבוע</h1>
            </div>
            <div className="cards">
                {allProducts.map((product) =>
                    <Product key={product.id} className="card" product={product} />
                )}
            </div>
        </div>
    )
};
export default Intro;