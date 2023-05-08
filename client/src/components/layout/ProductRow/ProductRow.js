import { useContext, useState } from 'react';
import CartContext from "../../../contexts/CartContext";
import './ProductRow.css';
import ProductDetails from '../ProductDetails/ProductDetails';
import ImageViewer from '../../common/ImageViewer';

function ProductRow({ product }) {
    console.log(product)
    const cart = useContext(CartContext);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div className="search_product_row">
                <div className="image_container" onClick={()=>setIsOpen(true)}>
                <ImageViewer image={product.image} height="40" width="40" quality="auto" alt={product.name} className="cart_product_image" />
                </div>
                <div className="product_title" onClick={()=>setIsOpen(true)}><span>{product.name}</span></div>
                <div className="product_price">{product.price}<span> {product.isWeighable?"₪ לק\"ג":"₪ ליחידה"}</span></div>
                <div className="quantity">
                    <span className="button" onClick={() => { cart.add(product) }}>+</span>
                    <span>{product.quantity} {product.isWeighable?"ק\"ג":"יחידות"}</span>
                    <span className="button" onClick={() => { cart.remove(product) }}>-</span>
                </div>
                
            </div>
            <ProductDetails product={product} cart={cart} isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    )
}
export default ProductRow;