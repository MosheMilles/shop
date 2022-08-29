import './styles/Product.css';
import { useState, useContext } from 'react';
import CartContext from '../contexts/CartContext';
import { Card, CardMedia, CardContent, CardActions, Button, Typography, Dialog, DialogTitle } from '@mui/material';

function Product({ product }) {

    const [open, setOpen] = useState(false);
    const openDialog = () => setOpen(true);
    const closeDialog = () => setOpen(false);
    const spanText = product.isWeighable ? "לק\"ג" : "ליחידה"
    const [isRaised, setIsRaised] = useState(false);
    const cart = useContext(CartContext);

    return (
        <div className="Product-card">
            <Card sx={{ maxWidth: 280 }} align="center" raised={isRaised}
                onMouseEnter={() => { setIsRaised(true) }} onMouseOut={() => { setIsRaised(false) }}>
                <div className="dialog_openning" onClick={openDialog}>
                <CardMedia
                    component="img"
                    height="140"
                    image={product.image}
                    alt={product.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                    </Typography>
                    <Typography variant="p" color="text.secondary">
                        {product.price} ₪
                        {<span> {spanText}</span>}

                    </Typography>
                </CardContent>
                </div>
                <div>
                    <Button onClick={() => { cart.add(product) }}>+</Button>
                    <span>{product.quantity}</span>
                    <Button onClick={() => { cart.remove(product) }}>-</Button>
                </div>
            </Card>
            <Dialog dir="rtl" open={open} onClose={closeDialog} >
                <DialogTitle>{product.name}</DialogTitle>
                <img src={product.image} alt={product.name} />
                {product.price} ₪
                        {<span> {spanText}</span>}
                <div>
                    <Button onClick={() => { cart.add(product) }}>+</Button>
                    <span>{product.quantity}</span>
                    <Button onClick={() => { cart.remove(product) }}>-</Button>
                </div>
                <Button onClick={closeDialog}>חזור</Button>

            </Dialog>

        </div>
    )
}
export default Product;