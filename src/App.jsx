import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';

import About from './pages/About';
import Electrical from './pages/Electrical';
import CCTV from './pages/CCTV';
import BMS from './pages/BMS';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Careers from './pages/Careers';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/electrical" element={<Electrical />} />
        <Route path="/cctv" element={<CCTV />} />
        <Route path="/bms" element={<BMS />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
      <Footer/>
    </Router>
  );
  
};

export default App;
