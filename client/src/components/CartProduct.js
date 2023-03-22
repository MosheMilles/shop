import { useContext, useState } from 'react';
import CartContext from "../contexts/CartContext";
import './styles/CartProduct.css';
import ProductDetails from './ProductDetails';
import { height } from '@mui/system';

function CartProduct({ product, salesToRender, index }) {
    // salesToRender.forEach(sale =>{console.log (sale.row===index)})
    // const saleName=product.discount.sale
    const cart = useContext(CartContext);
    const [open, setOpen] = useState(false);
    // const sale = salesToRender.find(sale => sale.row === index)
    product.isOpen = open;
    product.openDialog = () => setOpen(true);
    product.closeDialog = () => setOpen(false);

    // const renderSale=salesToRender.forEach(sale =>if(sale.row===index)return )
    return (
        <div>
            <div className="product_and_sale">
                <div className="product_row">
                <div className="quantity">
                        <div className="button" onClick={() => { cart.add(product) }}>+</div>
                        <div>{product.quantity} {product.isWeighable ? "ק\"ג" : "יחידות"}</div>
                        <div className="button" onClick={() => { cart.remove(product) }}>-</div>
                    </div>
                    <div className="image_container" onClick={product.openDialog}>
                        <img className="cart_product_image" src={product.image} alt={product.name} />
                    </div>
                    <div className="product_title" onClick={product.openDialog}><span>{product.name}</span></div>
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
            <ProductDetails product={product} cart={cart} />
        </div>
    )
}
export default CartProduct;