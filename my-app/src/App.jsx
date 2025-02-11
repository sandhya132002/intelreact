import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import './App.css'
import Navbar from './component/Nav/Navbar';
import FooterPage from './component/footer/FooterPage';
import Section1 from './pages/landingpage/section1';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' element={<Section1 />} />

        </Routes>
        <FooterPage />
      </Router>
       
    </>
  )
}

export default App
