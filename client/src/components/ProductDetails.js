import { Dialog,DialogTitle,Button } from "@mui/material";

function ProductDetails({product,cart}) {
    return (
        <Dialog dir="rtl" open={product.isOpen} onClose={product.closeDialog} >
            <DialogTitle>{product.name}</DialogTitle>
            <img src={product.image} alt={product.name} />
            {product.price} ₪
            {<span> {product.spanText}</span>}
            <div>
                <Button onClick={() => { cart.add(product) }}>+</Button>
                <span>{product.quantity}</span>
                <Button onClick={() => { cart.remove(product) }}>-</Button>
            </div>
            <Button onClick={product.closeDialog}>חזור</Button>
        </Dialog>
    )
}
export default ProductDetails;