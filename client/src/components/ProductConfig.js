import './styles/ProductConfig.css';
import { useState, useRef } from "react";
import { TextField, Box, MenuItem, Button, FormControlLabel, Checkbox } from "@mui/material";
import { styled } from '@mui/material';
import { categories } from '../categories';
import Category from './Category';

function ProductConfig({ allProducts, createProduct, updateProduct }) {
    const StyledTextField = styled(TextField)({
        '& label': {
            transformOrigin: "right !important",
            left: "inherit !important",
            right: "1.75rem !important",
        },
    });

    const formRef = useRef(null);
    const [isActive, setIsActive] = useState(true);
    const [isWeighable,setIsWeighable]=useState(false);
    const isWeighableChange=(event) => setIsWeighable(event.target.checked);
    const toggleActive = () => setIsActive(!isActive);
    const selectCategory=(e)=>{
        console.log(e.target)
        // if(e.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(formRef.current);
        const product = Object.fromEntries(formData.entries());
        console.log(product);
        if (!allProducts.includes(item => item.barcode === product.barcode)) createProduct(product);
        else updateProduct(product);
    };



    return (
        <Box
            className="product_form"
            component="form"
            sx={{
                width: '100ch',
                maxWidth: '100%',
            }}
            noValidate
            autoComplete="off"
            ref={formRef}
            onSubmit={handleSubmit}
        >
                <div className="activate"><h2>{isActive ? "המוצר פעיל" : "המוצר מושבת"}</h2><Button onClick={toggleActive}>{isActive ? "השבת מוצר" : "הפעל מוצר"}</Button></div>
            <StyledTextField
                fullWidth
                label="ברקוד"
                variant="outlined"
                name="barcode"
            />
        
            <StyledTextField
                fullWidth
                dir="rtl"
                label="שם"
                variant="outlined"
                name="name"
            />
            <StyledTextField
                sx={{ m: 1, width: '25ch' }}
                label="מחיר"
                variant="outlined"
                name="price"
            />
            <StyledTextField
                sx={{ m: 1, width: '25ch' }}
                label="קטגוריה"
                select
                variant="outlined"
                name="category"
            >
                {categories.map((category) => (
                    <MenuItem value={category} onClick={selectCategory}>
                        {category.title} 
                    </MenuItem>
                )
                )}
            </ StyledTextField>
            <FormControlLabel name="isWeighable" control={<Checkbox  onChange={isWeighableChange} checked={isWeighable}  sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />} label="מוצר שקיל" />
           <br />
            <button type="submit" variant="contained">אישור</button>
        </Box>

    )
};
export default ProductConfig;