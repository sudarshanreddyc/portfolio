// App.js
import React, { useState, useEffect } from "react";
import NavBar from "../src/Components/NavBar";
import Home from "./Modules/Home/Home";
import Experience from "./Modules/Experience/Experience";
import Projects from "./Modules/Projects/Projects";
import Skills from "./Modules/Skills/Skills";
import Certifications from "./Modules/Certifications/Certifications";
import Academics from "./Modules/Academics/Academics";

export const ThemeContext = React.createContext();

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={theme}>
      <div className="min-h-screen">
        <NavBar
          theme={theme}
          toggleTheme={toggleTheme}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />

        <div
          className={`pt-20 transition-colors duration-300 ${
            theme === "dark"
              ? "bg-gray-900 text-white"
              : "bg-gray-100 text-gray-900"
          }`}
        >
          <div id="home" className="scroll-mt-24">
            <Home theme={theme} />
          </div>
          <div id="experience">
            <Experience theme={theme} />
          </div>
          <div id="projects">
            <Projects theme={theme} />
          </div>
          <div id="certifications">
            <Certifications theme={theme} />
          </div>
          <div id="academics">
            <Academics theme={theme} />
          </div>
          <div id="skills">
            <Skills theme={theme} />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
