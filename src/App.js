import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Navbar from './Component/navbar';
import Categories from './Component/categories';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="Categories" element={<Categories />} />
      <Route exact path="/" element={<Home />} />
    </Routes>
  </Router>

);

export default App;
