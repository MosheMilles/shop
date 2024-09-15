
import { useState, useEffect } from 'react';
import DocsContext from '../../contexts/DocsContext';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import NewDoc from '../NewDoc/NewDoc';
import Item from '../Item/Item';
import ItemConfig from '../ItemConfig/ItemConfig';
import DocService from '../../DocService';
import EditDoc from '../EditDoc/EditDoc';



function App() {

  const [docs, setDocs] = useState([]);

  useEffect(() => {
    DocService.getDocs().then(response => {
      setDocs(response.data);
    });
  }, []);

  console.log(docs);

  return (
    <DocsContext.Provider value={{ docs, setDocs }}>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="items/:itemId" element={
          <Item />} />
      </Route>
        <Route path="edit" element={<ItemConfig />} >
          <Route path=":itemId" element={<EditDoc />} />
          <Route path="new" element={<NewDoc />} />
        </Route>

    </Routes>
    </DocsContext.Provider>
  );
};

export default App;