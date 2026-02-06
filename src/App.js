import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { About, Home } from './pages';
import Layout from './layout/Layout.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
