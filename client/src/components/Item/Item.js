import { useParams } from "react-router-dom";
import './Item.css';

function Item({ items }) {

    console.log(items)

    let params = useParams();
    console.log(params)
    console.log(params.itemId)
    let id = params.itemId

    console.log(id)


    let item = items.find(item => item.id ===+id);
    console.log(item)
    console.log(item.itemArray)

    return (
        <div className="item" key={item.id} >


            <h2 className="title">{item.title}</h2>
            {item.itemArray.map(subItem => (
                <div key={subItem.id}>
                    {subItem.type === "txt" && <p>{subItem.txt}</p>}
                    {subItem.type === "image" && <img src={subItem.src} alt={subItem.alt} width={subItem.width?subItem.width:"80%"} />}
                </div>
            
            ))
            }
        </div >
    )
}

export default Item;