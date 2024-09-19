import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import './ItemConfig.css';
import Buttons from "../Buttons/Buttons";
import { useState, useEffect, useContext } from "react";
import DocService from '../../DocService';
import DocsContext from "../../contexts/DocsContext";

function ItemConfig() {

    const { docs } = useContext(DocsContext);

    let params = useParams();
    console.log(params)
    console.log(params.itemId)
    let id = params.itemId

    console.log(docs)
    const [item, setItem] = useState(null);
    useEffect(() => {
        if (docs) {
            let founditem = docs.find(item => item.id === +id);
            setItem(founditem);
        }
    }, [docs, id]); 
  
    if (!docs || docs.length === 0) {
        return <div>Loading...</div>;
    }
    const addParagraph = (index,type) => {
        console.log(index);
        const newParagraph={
            id: item.itemArray.length + 1,
            type: type,
            txt: ""
          }
          const newArray = [
            ...item.itemArray.slice(0, index),
            newParagraph, // האיבר החדש
            ...item.itemArray.slice(index) 
          ];
    
        setItem((prevItem) => ({
            ...prevItem,
            itemArray: newArray
        }));
      };

    return (
        <div className="item_config" >
            <div className="header">
                <h1>עריכת מסמך</h1>
                <Link className="back" to="..">חזרה</Link>
            </div>
            <div className="container_1">
                <div className="buttons_container">
                    <Buttons addParagraph={addParagraph} index={item.itemArray.length}  />
                </div>
            </div>
{item&&
            <div className="edit">
                <div className="item" key={item.id} >
                    <h2 contentEditable suppressContentEditableWarning className="title">{item.title}</h2>
                    {item.itemArray.map((subItem,index) => (
                        <div className="sub_item" key={subItem.id}>
                            {subItem.type === "txt" && <p contentEditable
                                suppressContentEditableWarning
                            >{subItem.txt}</p>}
                            {subItem.type === "image" && <img src={subItem.src} alt={subItem.alt} width={subItem.width ? subItem.width : "80%"} />}
                            <div className="small_buttons_cont">
                                <Buttons small addParagraph={addParagraph} index={index}  />
                            </div>
                        </div>

                    ))
                    }
                </div >
            </div>
}
        </div >
    )
}

export default ItemConfig;