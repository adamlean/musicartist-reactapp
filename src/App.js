import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import NavBar from './components/NavBar';

// Pages
import Home from "./pages/Home";
import Beats from './pages/Beats';
import Discography from './pages/Discography';
import Albums from './pages/Albums';
import About from './pages/About';

// Layouts
import DefaultLayout from "./layouts/DefaultLayout";
import HomeLayout from "./layouts/HomeLayout";

import './App.css';

function App() {
  useEffect(() => {
      document.title = 'Music Artist | Musician. Producer. Beatmaker';
  }, []);
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout><Home /></HomeLayout>} />
        <Route path="/about" element={<DefaultLayout><About /></DefaultLayout>} />
        <Route path="/beats" element={<DefaultLayout><Beats /></DefaultLayout>} />
        <Route path="/discography" element={<DefaultLayout><Discography /></DefaultLayout>} />
        <Route path="/albums" element={<DefaultLayout><Albums /></DefaultLayout>} />     
      </Routes>
    </Router>
  );
}

export default App;
