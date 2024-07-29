import React, { useState } from 'react';

const PasteComponent = () => {
  const [content, setContent] = useState('');

  const handlePaste = (event) => {
    const clipboardData = event.clipboardData;
    const pastedData = clipboardData.getData('text/html');

    if (pastedData) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(pastedData, 'text/html');
      setContent(doc.body.innerHTML);
    } else {
      setContent(clipboardData.getData('text/plain'));
    }

    event.preventDefault();
  };

  const handleInput = (event) => {
    setContent(event.target.innerHTML);
  };

  return (
    <div>
      <div
        contentEditable
        onPaste={handlePaste}
        onInput={handleInput}
        style={{
          border: '1px solid black',
          padding: '10px',
          minHeight: '300px',
          width: '80%',
          margin: '0 auto',
          overflowY: 'auto',
        }}
      >
        {/* ניתן להדביק כאן טקסט ותמונות */}
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        style={{
          marginTop: '20px',
          border: '1px solid black',
          padding: '10px',
          width: '80%',
          margin: '0 auto',
          minHeight: '300px',
          overflowY: 'auto',
        }}
      />
    </div>
  );
};

export default PasteComponent;