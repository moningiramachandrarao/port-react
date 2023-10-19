import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Education from './components/Education';
import Contact from './components/Contact';
import Home1 from './components/Home1';

function App() {
  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh' }}>
      <div className="container">
        <HashRouter>
          <Home/>
          <Routes>
            <Route path="/" element={<Home1 />} /> 
            <Route path="home1" element={<Home1 />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
