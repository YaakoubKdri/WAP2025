import React, { useState } from 'react';
import './AddBookForm.css'; 
import { useBookContext } from '../context/BookContext';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const { addBook } = useBookContext();
  const [formData, setFormData] = useState({ title: '', author: '' });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.author) return;
    addBook(formData);
    navigate('/list');
  };

  return (
    <form className="add-book-form" onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
      <input name="author" placeholder="Author" value={formData.author} onChange={handleChange} required />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
