import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './Component/componentStling/Form';
import Navbar from './Component/componentStling/navbar';
import Categories from './Component/categories';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="Categories" element={<Categories />} />
      <Route exact path="/" element={<Form />} />
    </Routes>
  </Router>

);

export default App;
