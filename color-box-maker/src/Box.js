import React from 'react';
import './Box.css';

function Box({ id, width, height, color, removeBox }) {
  const handleRemove = () => removeBox(id);

  return (
    <div style={{ width: `${width}px`, height: `${height}px`, backgroundColor: color }}>
      <button onClick={handleRemove}>X</button>
    </div>
  );
}

export default Box;
