import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import NavBar from './components/NavBar';

// Pages
import Beats from './pages/Beats';
import Discography from './pages/Discography';
import Albums from './pages/Albums';
import About from './pages/About';

import './App.css';

function App() {
  useEffect(() => {
      document.title = 'Music Artist | Musician. Producer. Beatmaker';
  }, []);
  
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/beats" element={<Beats />} />
        <Route path="/discography" element={<Discography />} />
        <Route path="/albums" element={<Albums />} />
      </Routes>
    </Router>
  );
}

export default App;
