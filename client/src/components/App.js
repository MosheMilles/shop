import React, { useState } from 'react';
import EditableTextItem from './EditableTextItem';
import ReadOnlyTextItem from './ReadOnlyTextItem';

const App = () => {
  const [itemArray, setItemArray] = useState([
    { id: 1, type: 'txt', txt: '<p>Hello, world!</p>' },
    { id: 2, type: 'largeTxt', txt: '<h1>This is large text!</h1>' },
  ]);

  const [editMode, setEditMode] = useState(true);

  const handleTextChange = (id, newText) => {
    setItemArray(prevItemArray =>
      prevItemArray.map(item =>
        item.id === id ? { ...item, txt: newText } : item
      )
    );
  };

  const addTextItemAt = (index) => {
    const newItem = { id: Date.now(), type: 'txt', txt: '<p>New paragraph</p>' };
    setItemArray(prevItemArray => [
      ...prevItemArray.slice(0, index),
      newItem,
      ...prevItemArray.slice(index),
    ]);
  };

  const addLargeTextItemAt = (index) => {
    const newItem = { id: Date.now(), type: 'largeTxt', txt: '<h1>New heading</h1>' };
    setItemArray(prevItemArray => [
      ...prevItemArray.slice(0, index),
      newItem,
      ...prevItemArray.slice(index),
    ]);
  };

  return (
    <div>
      <button onClick={() => setEditMode(!editMode)}>
        {editMode ? 'Switch to View Mode' : 'Switch to Edit Mode'}
      </button>
      <button onClick={() => addTextItemAt(0)}>Add Paragraph at Start</button>
      <button onClick={() => addLargeTextItemAt(0)}>Add Heading at Start</button>
      {itemArray.map((subItem, index) => (
        <div key={subItem.id}>
          {editMode ? (
            <EditableTextItem
              text={subItem.txt}
              onTextChange={(newText) => handleTextChange(subItem.id, newText)}
              large={subItem.type === 'largeTxt'}
            />
          ) : (
            <ReadOnlyTextItem
              text={subItem.txt}
              large={subItem.type === 'largeTxt'}
            />
          )}
          {editMode && (
            <div>
              <button onClick={() => addTextItemAt(index + 1)}>Add Paragraph After</button>
              <button onClick={() => addLargeTextItemAt(index + 1)}>Add Heading After</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default App;