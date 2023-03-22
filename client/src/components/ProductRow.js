import { useContext, useState } from 'react';
import CartContext from "../contexts/CartContext";
import './styles/ProductRow.css';
import ProductDetails from './ProductDetails';

function ProductRow({ product }) {
    console.log(product)
    const cart = useContext(CartContext);
    const [open, setOpen] = useState(false);
    product.isOpen = open;
    product.openDialog = () => setOpen(true);
    product.closeDialog = () => setOpen(false);
    return (
        <div>
            <div className="search_product_row">
                <div className="image_container" onClick={product.openDialog}>
                    <img className="cart_product_image" src={product.image} alt={product.name} />
                </div>
                <div className="product_title" onClick={product.openDialog}><span>{product.name}</span></div>
                <div className="product_price">{product.price}<span> {product.isWeighable?"₪ לק\"ג":"₪ ליחידה"}</span></div>
                <div className="quantity">
                    <span className="button" onClick={() => { cart.add(product) }}>+</span>
                    <span>{product.quantity} {product.isWeighable?"ק\"ג":"יחידות"}</span>
                    <span className="button" onClick={() => { cart.remove(product) }}>-</span>
                </div>
                
            </div>
            <ProductDetails product={product} cart={cart} />
        </div>
    )
}
export default ProductRow;