import './Product.css';
import { useState, useContext } from 'react';
import CartContext from '../../../contexts/CartContext';
import ProductDetails from '../ProductDetails/ProductDetails';
import { Card, CardMedia, CardContent, Button, Typography, Dialog, DialogTitle } from '@mui/material';

function Product({ product }) {

    const cart = useContext(CartContext);
    const [open, setOpen] = useState(false);
    product.isOpen=open;
    product.openDialog = () => setOpen(true);
    product.closeDialog = () => setOpen(false);
    const [isRaised, setIsRaised] = useState(false);

    return (
        <div className="Product-card">
            <Card sx={{ maxWidth: 280 }} align="center" raised={isRaised}
                onMouseEnter={() => { setIsRaised(true) }} onMouseOut={() => { setIsRaised(false) }}>
                <div className="dialog_openning" onClick={product.openDialog}>
                <CardMedia
                    component="img"
                    height="140"
                    image={product.image}
                    alt={product.name}
                />
                <CardContent>
                    <Typography className='product_name' gutterBottom variant="h5" component="div">
                        {product.name}
                    </Typography>
                    <Typography variant="p" color="text.secondary">
                        {product.price} 
                        <span> {product.isWeighable?"₪ לק\"ג":"₪ ליחידה"}</span>

                    </Typography>
                </CardContent>
                </div>
                <div>
                    <Button onClick={() => { cart.add(product) }}>+</Button>
                    <span>{product.quantity}</span>
                    <Button onClick={() => { cart.remove(product) }}>-</Button>
                </div>
            </Card>
            <ProductDetails product={product} cart={cart} />
        </div>
    )
}
export default Product;