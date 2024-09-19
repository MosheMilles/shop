import { Link, Outlet, useNavigate } from "react-router-dom";
import './ItemConfig.css';
import { useState } from "react";
import SearchInput from "../SearchInput/SearchInput";
import CustomRadioGroup from "../CustomRadioGroup";
import Buttons from "../Buttons/Buttons";

function ItemConfig() {

    const [value, setValue] = useState('');
    const navigate = useNavigate();


    const options = [
        { label: 'הוסף מסמך חדש', value: 'new' },
        { label: 'עדכן מסמך קיים', value: 'old' },
    ];


    const handleRadioChange = (value) => {
        console.log(value);
        if (value === 'new') {
            navigate('new'); // החלף בנתיב הרצוי
        }
        setValue(value);
    };

    return (
        <div className="item_config" >
            {/* <div className="fixed"> */}
            <div className="header">
                <h1>עריכת מסמך</h1>
                <Link className="back" to="..">חזרה</Link>
            </div>
            <div className="container_1">
                <div>
                    <CustomRadioGroup options={options} name="customGroup" onChange={handleRadioChange} />
                </div>
                <div className="input_container_edit"> {value === "old" && <SearchInput edit />}</div>
                <div className="buttons_container">
                    <Buttons />
                </div>
            </div>
            {/* </div> */}
            <div className="edit">
                <Outlet />
            </div>
        </div >
    )
}

export default ItemConfig;