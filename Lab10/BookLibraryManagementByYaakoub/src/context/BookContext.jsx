import React, { createContext, useContext, useState, useEffect } from 'react';

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = 'https://67d17ef590e0670699ba5929.mockapi.io/books';

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setBooks(data);
    } catch (err) {
      setError('Oops! Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  const addBook = async (book) => {
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book),
      });
      const newBook = await res.json();
      setBooks((prev) => [...prev, newBook]);
    } catch (err) {
      setError('Oops! Something went wrong while adding the book!');
    }
  };

  const updateBook = async (updatedBook) => {
    try {
      await fetch(`${API_URL}/${updatedBook.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedBook),
      });
      setBooks((prev) =>
        prev.map((book) => (book.id === updatedBook.id ? updatedBook : book))
      );
    } catch (err) {
      setError('Oops! Something went wrong while updating the book!');
    }
  };

  const deleteBook = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      setBooks((prev) => prev.filter((book) => book.id !== id));
    } catch (err) {
      setError('Oops! Something went wrong while deleting the book!');
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <BookContext.Provider
      value={{ books, loading, error, addBook, updateBook, deleteBook }}
    >
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => useContext(BookContext);
