import { Link, Outlet } from "react-router-dom";
import './ItemConfig.css';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from "@mui/material";
import { useState } from "react";

function ItemConfig({ createDoc, addDocs, item }) {

     const [value,setValue]=useState('new');
    const [tempDoc, setTempDoc] = useState(item ? item : { title: "", itemArray: [] });

    function addText(array, index, text) {
        const idx = index ? index : array.length - 1;
        array.splice(idx, 0, { type: "txt", txt: { text } });
        setTempDoc({...tempDoc,itemArray:array});
    }

    function handleChange(){
        const handleChange = (event) => {
            setValue(event.target.value);
          };
    }

    return (
        <div className="item_config" >
            <div className="header">
                <h1>עריכת מסמך</h1>
                <Link className="back" to="..">חזרה</Link>
            </div>
            <div className="form">
                <div className="add_or_update">
                    <FormControl>
                        <RadioGroup
                        row
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="new"
                            name="radio-buttons-group"
                            onChange={handleChange}
                        >
                            <FormControlLabel value="new" control={<Radio />} label="הוסף מסמך חדש" />
                            <FormControlLabel value="old" control={<Radio />} label="עדכן מסמך קיים" />
                        </RadioGroup>
                    </FormControl>
                </div>
               <div className="edit">
                <Outlet />
                </div>
                <Button className="button" onClick={createDoc} >
                    jkglg
                </Button>
                <Button className="button" onClick={addDocs} >
                    הוסף
                </Button>
            </div>

        </div >
    )
}

export default ItemConfig;