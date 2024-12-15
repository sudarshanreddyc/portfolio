import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Home from "./Modules/Home/Home";
import Experience from "./Modules/Experience/Experience";
import Skills from "./Modules/Skills/Skills";
import Academics from "./Modules/Academics/Academics";
import Certifications from "./Modules/Certifications/Certifications";
import About from "./Modules/About/About";
import LoginSignup from "./Modules/Login/LoginSignup";
import { FaMoon, FaSun } from "react-icons/fa";

export const ThemeContext = React.createContext();

const NavBar = ({ theme, toggleTheme, isMenuOpen, setIsMenuOpen }) => {
  const location = useLocation(); // To get the current path

  // Function to check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="p-4 fixed top-0 left-0 right-0 z-50 shadow-lg bg-gray-800 text-white">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-extrabold tracking-wide">
          <Link to="/" className="hover:text-gray-300">
            <span className="rounded-full bg-blue-500 px-4 py-1 text-white font-bold">
              SR
            </span>
          </Link>
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded bg-gray-700 text-white flex items-center justify-center transition-all hover:bg-gray-600"
        >
          {theme === "dark" ? (
            <FaSun className="text-yellow-400" />
          ) : (
            <FaMoon className="text-blue-500" />
          )}
        </button>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li>
            <Link
              to="/experience"
              className={`${
                isActive("/experience")
                  ? "text-blue-400 underline"
                  : "hover:text-gray-300"
              }`}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="/certifications"
              className={`${
                isActive("/certifications")
                  ? "text-blue-400 underline"
                  : "hover:text-gray-300"
              }`}
            >
              Certifications
            </Link>
          </li>
          <li>
            <Link
              to="/academics"
              className={`${
                isActive("/academics")
                  ? "text-blue-400 underline"
                  : "hover:text-gray-300"
              }`}
            >
              Academics
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className={`${
                isActive("/skills")
                  ? "text-blue-400 underline"
                  : "hover:text-gray-300"
              }`}
            >
              Skills
            </Link>
          </li>
        </ul>

        {/* Hamburger Menu */}
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
      </div>

      {/* Mobile Navigation Links */}
      {isMenuOpen && (
        <ul className="flex flex-col md:hidden mt-4 space-y-4 rounded-lg shadow-md p-4 bg-gray-800 text-white">
          <li>
            <Link
              to="/experience"
              onClick={() => setIsMenuOpen(false)}
              className={`${
                isActive("/experience") ? "text-blue-400 underline" : ""
              } hover:text-gray-300`}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="/certifications"
              onClick={() => setIsMenuOpen(false)}
              className={`${
                isActive("/certifications") ? "text-blue-400 underline" : ""
              } hover:text-gray-300`}
            >
              Certifications
            </Link>
          </li>
          <li>
            <Link
              to="/academics"
              onClick={() => setIsMenuOpen(false)}
              className={`${
                isActive("/academics") ? "text-blue-400 underline" : ""
              } hover:text-gray-300`}
            >
              Academics
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              onClick={() => setIsMenuOpen(false)}
              className={`${
                isActive("/skills") ? "text-blue-400 underline" : ""
              } hover:text-gray-300`}
            >
              Skills
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <Router>
        <div className="min-h-screen">
          <NavBar
            theme={theme}
            toggleTheme={toggleTheme}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />

          {/* Body Content */}
          <div
            className={`pt-20 transition-colors duration-300 ${
              theme === "dark"
                ? "bg-gray-900 text-white"
                : "bg-gray-100 text-gray-900"
            }`}
          >
            <Routes>
              <Route path="/" element={<Home theme={theme} />} />
              <Route
                path="/experience"
                element={<Experience theme={theme} />}
              />
              <Route path="/academics" element={<Academics theme={theme} />} />
              <Route path="/skills" element={<Skills theme={theme} />} />
              <Route
                path="/certifications"
                element={<Certifications theme={theme} />}
              />
              <Route
                path="/loginsignup"
                element={<LoginSignup theme={theme} />}
              />
              <Route path="/about" element={<About theme={theme} />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
};

export default App;
