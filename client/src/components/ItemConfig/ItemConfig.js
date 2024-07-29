import { Link, useParams } from "react-router-dom";
import './ItemConfig.css';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from "@mui/material";

function ItemConfig({createDoc,addDocs}) {

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
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="new"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="new" control={<Radio />} label="הוסף מסמך חדש" />
                        <FormControlLabel value="old" control={<Radio />} label="עדכן מסמך קיים" />
                    </RadioGroup>
                </FormControl>
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