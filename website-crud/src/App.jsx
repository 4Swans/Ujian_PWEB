import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/Create';
import Edit from './pages/Edit';
import './index.css';

export default function App() {
  return (
    <Router>
      <div className="container mx-auto p-4 bg-sky-100 text-blue-900">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-4">DIDIMSEL Book Management</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </div>
    </Router>
  );
}