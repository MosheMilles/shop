import { useParams } from "react-router-dom";
import { useState,useEffect,useContext } from "react";
import DocService from '../../DocService';
import './Item.css';
import ItemHeader from "../ItemHeader/ItemHeader";
import DocsContext, { DocsConsumer } from "../../contexts/DocsContext";

function Item() {
    console.log(DocsContext)
    const { docs,setDocs } = useContext(DocsContext);
    console.log(DocsConsumer)
console.log(docs)
    let params = useParams();
    console.log(params)
    console.log(params.itemId)
    let id = params.itemId

    console.log(id)
    if (!docs || docs.length === 0) {
        return <div>Loading...</div>;
      }

    let item = docs.find(item => item.id ===+id);
    console.log(item)
    console.log(item.itemArray)

    return (
        <div className="item" key={item.id} >
<ItemHeader />

            <h2 className="title">{item.title}</h2>
            {item.itemArray.map(subItem => (
                <div key={subItem.id}>
                    {subItem.type === "txt" && <p className="item_text">{subItem.txt}</p>}
                    {subItem.type === "image" && <img src={subItem.src} alt={subItem.alt} width={subItem.width?subItem.width:"80%"} />}
                </div>
            
            ))
            }
        </div >
    )
}

export default Item;