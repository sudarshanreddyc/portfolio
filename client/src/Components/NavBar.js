// NavBar.js
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const scrollToSection = (id, setIsMenuOpen) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = -80; // adjust this to shift the scroll a bit up (NavBar height)
    const y = element.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top: y, behavior: "smooth" });
    setIsMenuOpen(false);
  }
};

const NavBar = ({ theme, toggleTheme, isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className="p-4 fixed top-0 left-0 right-0 z-50 shadow-lg bg-gray-800 text-white">
      <div className="flex justify-between items-center">
        <div
          className="text-2xl font-extrabold tracking-wide"
          style={{ marginLeft: "5%" }}
        >
          <a
            href="#home"
            onClick={() => scrollToSection("home", setIsMenuOpen)}
            className="hover:text-gray-300"
          >
            <span className="rounded-full bg-blue-500 px-4 py-1 text-white font-bold">
              SR
            </span>
          </a>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li>
            <button
              onClick={() => scrollToSection("experience", setIsMenuOpen)}
              className="hover:text-gray-300"
            >
              Experience
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("projects", setIsMenuOpen)}
              className="hover:text-gray-300"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("certifications", setIsMenuOpen)}
              className="hover:text-gray-300"
            >
              Certifications
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("academics", setIsMenuOpen)}
              className="hover:text-gray-300"
            >
              Academics
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("skills", setIsMenuOpen)}
              className="hover:text-gray-300"
            >
              Skills
            </button>
          </li>
          <li>
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
          </li>
        </ul>

        {/* Mobile Nav Toggle */}
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

      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-gray-800 rounded shadow-lg px-4 py-3">
          <ul className="flex flex-col space-y-3 text-lg font-medium">
            <li>
              <button
                onClick={() => scrollToSection("experience", setIsMenuOpen)}
                className="hover:text-blue-300"
              >
                Experience
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("projects", setIsMenuOpen)}
                className="hover:text-blue-300"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("certifications", setIsMenuOpen)}
                className="hover:text-blue-300"
              >
                Certifications
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("academics", setIsMenuOpen)}
                className="hover:text-blue-300"
              >
                Academics
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("skills", setIsMenuOpen)}
                className="hover:text-blue-300"
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  toggleTheme();
                  setIsMenuOpen(false);
                }}
                className="p-2 rounded bg-gray-700 text-white flex items-center justify-center transition-all hover:bg-gray-600"
              >
                {theme === "dark" ? (
                  <FaSun className="text-yellow-400" />
                ) : (
                  <FaMoon className="text-blue-500" />
                )}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
