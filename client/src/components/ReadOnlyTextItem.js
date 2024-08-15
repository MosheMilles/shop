import React from 'react';

const ReadOnlyTextItem = ({ text, large }) => {
  const parseText = (text) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');
    const elements = Array.from(doc.body.childNodes);
    
    return elements.map((element, index) => {
      if (element.nodeName === 'P' || element.nodeName === 'DIV') {
        return <p key={index}>{element.textContent}</p>;
      } else if (element.nodeName === 'H1') {
        return <h1 key={index}>{element.textContent}</h1>;
      } else if (element.nodeName === 'BR') {
        return <br key={index} />;
      }
      return null;
    });
  };

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '10px',
        minHeight: '50px',
        fontSize: large ? '2em' : '1em',
      }}
    >
      {parseText(text)}
    </div>
  );
};

export default ReadOnlyTextItem;