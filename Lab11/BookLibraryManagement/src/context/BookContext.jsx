import React, { createContext, useContext, useState, useEffect } from 'react';

const BookContext = createContext(null);

const API_URL = 'https://67d17ef590e0670699ba5929.mockapi.io/books';

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Oops! Something went wrong!');
      const data = await response.json();
      setBooks(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const addBook = async (book) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book),
      });
      if (!response.ok) throw new Error('Oops! Something went wrong while adding the book!');
      const newBook = await response.json();
      setBooks((prevBooks) => [...prevBooks, newBook]);
    } catch (err) {
      setError(err.message);
    }
  };

  const updateBook = async (updatedBook) => {
    try {
      const response = await fetch(`${API_URL}/${updatedBook.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedBook),
      });
      if (!response.ok) throw new Error('Oops! Something went wrong while updating the book!');
      const data = await response.json();
      setBooks((prevBooks) =>
        prevBooks.map((book) => (book.id === data.id ? data : book))
      );
    } catch (err) {
      setError(err.message);
    }
  };

  const deleteBook = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Oops! Something went wrong while deleting the book!');
      setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <BookContext.Provider
      value={{
        books,
        loading,
        error,
        addBook,
        updateBook,
        deleteBook,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => useContext(BookContext);
