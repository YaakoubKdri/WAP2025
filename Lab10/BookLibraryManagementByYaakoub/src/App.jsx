import React from 'react';
import './App.css';
import { BookProvider } from './context/BookContext';
import AddBookForm from './components/AddBookForm';
import BookList from './components/BookList';

function App() {
  return (
    <BookProvider>
      <div>
        <h1 className="app-title">
          <span className="main-title">Book Library Management</span>
          <span className="author">By Yaakoub Kadri</span>
        </h1>
        <AddBookForm />
        <BookList />
      </div>
    </BookProvider>
  );
}

export default App;
