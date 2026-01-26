import './App.css';
import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Header from './layout/header/header.jsx';
import {About , Home} from './pages/index.js'

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
