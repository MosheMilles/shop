import './styles/Intro.css';
import Product from './Product';
function Intro({allProducts}) {

    return (
        <div className="intro">
            <img className='intro_img' src="/סופר זמני.jpg" alt="סופר" />
            <div className="sales_headline" >
                <div id="sales_icon_container"><img id="sales_icon" src="/gift.png" alt="מתנה" /></div>
                <h1 id="sales_headline_txt">מבצעי השבוע</h1>
            </div>
            <div className="cards">
                {allProducts.map((product)=>
            <Product key={product.id} className="card" product={product} />
                )}
            </div>
        </div>
    )
};
export default Intro;