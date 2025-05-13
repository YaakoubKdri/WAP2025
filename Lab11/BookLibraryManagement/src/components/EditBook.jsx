import React, { useState, useEffect } from 'react';
import { useBookContext } from '../context/BookContext';
import { useParams, useNavigate } from 'react-router-dom';

const EditBook = () => {
  const { books, updateBook } = useBookContext();
  const { id } = useParams();
  const navigate = useNavigate();
  const bookToEdit = books.find((b) => b.id === id);
  const [formData, setFormData] = useState({ title: '', author: '' });

  useEffect(() => {
    if (bookToEdit) setFormData({ title: bookToEdit.title, author: bookToEdit.author });
  }, [bookToEdit]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBook({ ...formData, id });
    navigate('/list');
  };

  if (!bookToEdit) return <p>Book not found</p>;

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={formData.title} onChange={handleChange} required />
      <input name="author" value={formData.author} onChange={handleChange} required />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditBook;
