import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { BookProvider } from './context/BookContext';
import AppRouter from './router/AppRouter';

const App = () => (
  <BookProvider>
    <BrowserRouter>
      <h1 className="app-title">
            <span className="main-title">Book Library Management</span>
            <span className="author">By Yaakoub Kadri</span>
        </h1>
      <AppRouter />
    </BrowserRouter>
  </BookProvider>
);

export default App;
