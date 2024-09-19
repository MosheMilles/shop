import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import DocService from '../../DocService';
import './EditDoc.css';
import DocsContext from "../../contexts/DocsContext";
import Buttons from "../Buttons/Buttons";

function EditDoc() {
  const { docs } = useContext(DocsContext);

  let params = useParams();
  console.log(params)
  console.log(params.itemId)
  let id = params.itemId

  console.log(docs)
  let item = docs ? docs.find(item => item.id === +id) : null;
  const [itemArray, setItemArray] = useState(item ? item.itemArray : []);
  console.log(item)
  console.log(itemArray)

  if (!docs || docs.length === 0) {
    return <div>Loading...</div>;
  }

  console.log(id)

  const addParagraph = () => {
    const newParagraph = {
      id: itemArray.length + 1, // or use a unique id generator
      type: "txt",
      txt: "New paragraph"
    };
    setItemArray([...itemArray, newParagraph]);
  };

  /////


  /////
  console.log(item)
  console.log(item.itemArray)

  // const updateDoc = () => {
  //     axios.put(`/api/documents/${id}`, { document })
  //       .then(() => {
  //         alert('Document saved successfully!');
  //         navigate(`/doc/${id}`);
  //       })
  //       .catch((error) => {
  //         console.error('There was an error saving the document!', error);
  //       });
  //   };

  return (
    <div className="item" key={item.id} >
      <h2 contentEditable suppressContentEditableWarning className="title">{item.title}</h2>
      {item.itemArray.map(subItem => (
        <div className="sub_item" key={subItem.id}>
          {subItem.type === "txt" && <p contentEditable
            suppressContentEditableWarning
          >{subItem.txt}</p>}
          {subItem.type === "image" && <img  src={subItem.src} alt={subItem.alt} width={subItem.width ? subItem.width : "80%"} />}
          <div className="small_buttons_cont">
            <Buttons small addParagraph />
          </div>
        </div>

      ))
      }
    </div >
  )
}

export default EditDoc;