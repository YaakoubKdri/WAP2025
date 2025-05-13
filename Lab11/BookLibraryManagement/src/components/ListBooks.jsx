import React from 'react';
import { useBookContext } from '../context/BookContext';
import { Link } from 'react-router-dom';

const ListBooks = () => {
  const { books, deleteBook, loading, error } = useBookContext();

  if (loading) return <p>Loading books...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {books.map((book) => (
        <div key={book.id} style={{ border: '2px dashed blue', marginBottom: '1rem', padding: '1rem', textAlign: 'center', }}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <Link to={`/edit/${book.id}`}>Edit</Link>
          <button onClick={() => deleteBook(book.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ListBooks;
