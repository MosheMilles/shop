import './styles/ProductDetails.css';
import { Dialog, Button } from "@mui/material";
import { createRef } from 'react';

function ProductDetails({ product, cart }) {
    const productCommentInput = createRef();
    const submitComment = (event) => {
        if (event.key === "Enter") {
            const productComment = productCommentInput.current.value;
            console.log(productComment)
            cart.addProductComment({ product, productComment })
        }
    }

    // const Input = () => {
    //     const handleKeyDown = (event) => {
    //       if (event.key === 'Enter') {
    //         console.log('do validate')
    //       }
    //     }

    //     return <input type="text" onKeyDown={handleKeyDown} />
    //   }



    return (
        <Dialog dir="rtl" open={product.isOpen} onClose={product.closeDialog} >
            <div className="product_details">
                <div id="img_container"><img id="details_img" src={product.image} alt={product.name} /></div>
                <div>
                    <h1 id="product_name">{product.name}</h1>
                    <h3>{product.price}
                        {<span> {product.isWeighable ? "₪ לק\"ג" : "₪ ליחידה"}</span>}</h3>
                    <label>הערות למוצר: <input ref={productCommentInput} onKeyDown={submitComment}></input></label>
                    <div>
                        <Button onClick={() => { cart.add(product) }}>+</Button>
                        <span>{product.quantity}</span>
                        <Button onClick={() => { cart.remove(product) }}>-</Button>
                    </div>
                    <Button onClick={product.closeDialog}>חזור</Button>
                </div>
            </div>
        </Dialog>
    )
}
export default ProductDetails;