import { useContext, useState } from 'react';
import CartContext from "../../../contexts/CartContext";
import './CartProduct.css';
import ProductDetails from '../ProductDetails/ProductDetails';
import ImageViewer from '../../common/ImageViewer';

function CartProduct({ product }) {
    const cart = useContext(CartContext);
    const [isOpen, setIsOpen] = useState(false);
   
    return (
        <div>
            <div className="product_and_sale">
                <div className="product_row">
                <div className="quantity">
                        <div className="button" onClick={() => { cart.add(product) }}>+</div>
                        <div>{product.quantity} {product.isWeighable ? "ק\"ג" : "יחידות"}</div>
                        <div className="button" onClick={() => { cart.remove(product) }}>-</div>
                    </div>
                    <div className="image_container" onClick={()=>setIsOpen(true)}>
                        <ImageViewer image={product.image} height="40" width="40" quality="auto" alt={product.name} className="cart_product_image" />
                    </div>
                    <div className="product_title" onClick={()=>setIsOpen(true)}><span>{product.name}</span></div>
                    <div className="product_total_price">₪{(product.quantity * product.price).toFixed(2)}</div>
                </div>
                {product.discount.sum > 0 &&
                    <div className="sale_row">
                        <img style={{height:"20px"}} src="/gift.png" alt="מתנה" />
                         <div>{product.discount.sale}</div>
                        <div>₪{product.discount.sum}-</div>
                    </div>
                }
            </div>
            <ProductDetails product={product} cart={cart} isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    )
}
export default CartProduct;