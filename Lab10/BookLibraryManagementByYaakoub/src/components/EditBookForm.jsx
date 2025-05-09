import React, { useState } from 'react';
import { useBookContext } from '../context/BookContext';

const EditBookForm = ({ book, onCancel }) => {
  const { updateBook } = useBookContext();
  const [formData, setFormData] = useState({ ...book });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBook(formData);
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={formData.title} onChange={handleChange} required />
      <input name="author" value={formData.author} onChange={handleChange} required />
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default EditBookForm;
