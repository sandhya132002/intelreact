//import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import './App.css'
import Navbar from './component/Nav/Navbar';
import FooterPage from './component/footer/FooterPage';
import Section1 from './pages/landingpage/section1';
import Aboutsection from './pages/aboutpage/Aboutsection';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' element={<Section1 />} />
        <Route path='/about' element={<Aboutsection />} /> {/* Added About Page Route */}
        </Routes>
        <FooterPage />
      </Router>
       
    </>
  )
}

export default App
