import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">My Portfolio</div>
      <ul className={`navList ${menuOpen ? "open" : ""}`}>
        <li className="navItem">Home</li>
        <li className="navItem">About</li>
        <li className="navItem">Projects</li>
        <li className="navItem">Contact</li>
      </ul>
      <div className="menuToggle" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
