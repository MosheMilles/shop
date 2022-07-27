import { useContext } from 'react';
import CartContext from "../contexts/CartContext";
import './styles/CartProduct.css';
import { Button } from '@mui/material';

function CartProduct({ product }) {

    const cart = useContext(CartContext);
    return (

        <div className="product-row">

            <Button onClick={() => { cart.add(product) }}>+</Button>
            <span>{product.quantity}</span>
            <Button onClick={() => { cart.remove(product) }}>-</Button>
            <div className="image">
                <img src={product.image} alt='' />
            </div>
            <div className="product-title">{product.name}</div>
            <div className="product-price">{product.price}</div>
            <div className="product-total-price">{(product.quantity * product.price).toFixed(1)}</div>
        </div>
    )
}
export default CartProduct;