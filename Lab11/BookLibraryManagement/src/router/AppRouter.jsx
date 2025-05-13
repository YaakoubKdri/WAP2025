import React from 'react';
import './AppRouter.css';
import { Routes, Route, Link } from 'react-router-dom';
import AddBook from '../components/AddBook';
import ListBooks from '../components/ListBooks';
import EditBook from '../components/EditBook';

const AppRouter = () => (
  <>
    <nav>
      <Link to="/add">Add Book</Link>  <Link to="/list">List Books</Link>
    </nav>
    <Routes>
      <Route path="/add" element={<AddBook />} />
      <Route path="/list" element={<ListBooks />} />
      <Route path="/edit/:id" element={<EditBook />} />
    </Routes>
  </>
);

export default AppRouter;
