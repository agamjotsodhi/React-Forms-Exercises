import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './NewBoxForm.css';

function NewBoxForm({ addBox }) {
  const [formData, setFormData] = useState({ width: '', height: '', color: '' });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(fData => ({ ...fData, [name]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addBox({ ...formData, id: uuid() });
    setFormData({ width: '', height: '', color: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="width"
        placeholder="Width (pixels)"
        value={formData.width}
        onChange={handleChange}
      />
      <input
        name="height"
        placeholder="Height (pixels)"
        value={formData.height}
        onChange={handleChange}
      />
      <input
        name="color"
        placeholder="Color"
        value={formData.color}
        onChange={handleChange}
      />
      <button type="submit">Add Box</button>
    </form>
  );
}

export default NewBoxForm;