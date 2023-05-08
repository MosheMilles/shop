import './ProductDetails.css';
import { Dialog, Button } from "@mui/material";
import { createRef } from 'react';
import ImageViewer from '../../common/ImageViewer';

function ProductDetails({ product, cart,isOpen, setIsOpen }) {
    console.log("sdjghaksjdgh")
    const productCommentInput = createRef();
    const submitComment = (event) => {
        if (event.key === "Enter") {
            const productComment = productCommentInput.current.value;
            console.log(productComment)
            cart.addProductComment({ product, productComment })
        }
    }

    return (        
        <Dialog dir="rtl" open={isOpen} onClose={()=>setIsOpen(false)} >
            {console.log(isOpen)}
            <div className="product_details">
            {console.log("sdgaggas")}
                <div id="img_container">
                    <ImageViewer image={product.image} height="180" width="180" quality="auto" alt={product.name} className="img" />
                </div>
                <div>
                {console.log("sdgaggas")}
                    <h1 id="product_name">{product.name}</h1>
                    <h3>{product.price}
                        {<span> {product.isWeighable ? "₪ לק\"ג" : "₪ ליחידה"}</span>}</h3>
                    <label>הערות למוצר: <input ref={productCommentInput} onKeyDown={submitComment}></input></label>
                    <div>
                        <Button onClick={() => { cart.add(product) }}>+</Button>
                        <span>{product.quantity}</span>
                        <Button onClick={() => { cart.remove(product) }}>-</Button>
                    </div>
                    <Button onClick={()=>setIsOpen(false)}>חזור</Button>
                </div>
            </div>
        </Dialog>
    )
}
export default ProductDetails;