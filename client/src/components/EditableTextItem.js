import React, { useRef, useEffect } from 'react';

const EditableTextItem = ({ text, onTextChange, large }) => {
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      console.log(divRef.current.innerHTML)
      console.log(text)
      divRef.current.innerHTML = text;
    }
  }, [text]);

  const handleBlur = () => {
    console.log(divRef.current)
    console.log(divRef.current.innerHTML)
    const newHtml = divRef.current.innerHTML.replace(/\n/g, "<br>");
    onTextChange(newHtml);
  };

  return (
    <div
      ref={divRef}
      contentEditable
      suppressContentEditableWarning
      onBlur={handleBlur}
      style={{
        border: '1px solid #ccc',
        padding: '10px',
        minHeight: '50px',
        fontSize: large ? '2em' : '1em',
      }}
    />
  );
};

export default EditableTextItem;