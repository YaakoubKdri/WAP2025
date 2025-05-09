import React, { useState } from 'react';
import { useBookContext } from '../context/BookContext';
import EditBookForm from './EditBookForm';

const BookList = () => {
  const { books, deleteBook, loading, error } = useBookContext();
  const [editingBookId, setEditingBookId] = useState(null);

  if (loading) return <p>Loading books...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ display: 'grid', gap: '1rem' }}>
      {books.map((book) =>
        editingBookId === book.id ? (
          <EditBookForm key={book.id} book={book} onCancel={() => setEditingBookId(null)} />
        ) : (
          <div key={book.id} style={{ border: '1px solid black', padding: '1rem' }}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <button onClick={() => setEditingBookId(book.id)}>Edit</button>
            <button onClick={() => deleteBook(book.id)}>Delete</button>
          </div>
        )
      )}
    </div>
  );
};

export default BookList;
