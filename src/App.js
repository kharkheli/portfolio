import React, { useEffect, useState } from 'react'
import Mouse from './Mouse'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './home'
import Navbar from './navbar'
import AboutMe from './about-me'
import Projects from './projects'
import Contact from './contact'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Mouse />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Home /> */}

          <Route exact path="/about-me" element={<AboutMe />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="160px"
        height="160px"
      >
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stopColor="#e91e63" />
            <stop offset="100%" stopColor="#000" />
          </linearGradient>
        </defs>
        <circle cx="80" cy="80" r="70" strokeLinecap="round" />
      </svg> */}
    </div>
  )
}

export default App
