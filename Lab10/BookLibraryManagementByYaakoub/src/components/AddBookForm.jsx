import React, { useState } from 'react';
import { useBookContext } from '../context/BookContext';
import './AddBookForm.css'; 
const AddBookForm = () => {
  const { addBook } = useBookContext();
  const [formData, setFormData] = useState({ title: '', author: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.author) return;
    addBook(formData);
    setFormData({ title: '', author: '' });
  };

  return (
    <form className="add-book-form" onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
      <input name="author" placeholder="Author" value={formData.author} onChange={handleChange} required />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBookForm;