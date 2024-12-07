import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Modules/Home/Home";
import Experience from "./Modules/Experience/Experience";
import Skills from "./Modules/Skills/Skills";
import Academics from "./Modules/Academics/Academics";
import Certifications from "./Modules/Certifications/Certifications";
import About from "./Modules/About/About";
import LoginSignup from "./Modules/Login/LoginSignup";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle menu visibility

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Navigation Bar */}
        <nav className="bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 text-white p-4 fixed top-0 left-0 right-0 z-50 shadow-lg">
          <div className="flex justify-between items-center">
            {/* Logo or App Name */}
            <div className="text-2xl font-extrabold tracking-wide">
              <Link to="/" className="hover:text-gray-200 transition">
                Sudarshan Reddy C
              </Link>
            </div>

            {/* Hamburger Menu Button */}
            <button
              className="md:hidden focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Desktop Navigation Links */}
            <ul className="hidden md:flex space-x-8 text-lg font-medium">
              <li className="hover:text-gray-200 transition">
                <Link to="/experience">Experience</Link>
              </li>
              <li className="hover:text-gray-200 transition">
                <Link to="/certifications">Certifications</Link>
              </li>
              <li className="hover:text-gray-200 transition">
                <Link to="/academics">Academics</Link>
              </li>
              <li className="hover:text-gray-200 transition">
                <Link to="/skills">Skills</Link>
              </li>
            </ul>
          </div>

          {/* Mobile Navigation Links */}
          {isMenuOpen && (
            <ul className="flex flex-col md:hidden mt-4 space-y-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-lg shadow-md p-4">
              {/* <li className="hover:text-gray-200 transition">
                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
              </li> */}
              <li className="hover:text-gray-200 transition">
                <Link to="/experience" onClick={() => setIsMenuOpen(false)}>
                  Experience
                </Link>
              </li>
              <li className="hover:text-gray-200 transition">
                <Link to="/certifications" onClick={() => setIsMenuOpen(false)}>
                  Certifications
                </Link>
              </li>
              <li className="hover:text-gray-200 transition">
                <Link to="/academics" onClick={() => setIsMenuOpen(false)}>
                  Academics
                </Link>
              </li>
              <li className="hover:text-gray-200 transition">
                <Link to="/skills" onClick={() => setIsMenuOpen(false)}>
                  Skills
                </Link>
              </li>
            </ul>
          )}
        </nav>

        {/* Routes to different pages */}
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/loginsignup" element={<LoginSignup />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
