import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Modules/Home/Home";
// import Account from "./Modules/Account/Account";
import Experience from "./Modules/Experience/Experience";
import Skills from "./Modules/Skills/Skills";
import Academics from "./Modules/Academics/Academics";
import About from "./Modules/About/About";
import Certifications from "./Modules/Certifications/Certifications";
import Dropdown from "./Components/Dropdown"; // Import Dropdown
import Loader from "./Components/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons"; // Import Font Awesome User Icon
import LoginSignup from "./Modules/Login/LoginSignup";

const App = () => {
  // Define the menu items for the dropdown
  const profileMenuItems = [
    {
      label: "Account",
      navigate: "/account", // This will trigger navigation to the Account page
    },
    {
      label: "Logout",
      onClick: () => {
        console.log("Logout clicked");
      },
    },
  ];

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Loader />
        {/* Navigation Bar */}
        <nav className="bg-blue-600 text-white p-4 fixed top-0 left-0 right-0 z-50">
          <div className="flex justify-between items-center">
            {/* Navigation Links */}
            <ul className="flex space-x-8">
              <li className="cursor-pointer hover:text-gray-200">
                <Link to="/">Home</Link>
              </li>
              <li className="cursor-pointer hover:text-gray-200">
                <Link to="/experience">Experience</Link>{" "}
              </li>
              <li className="cursor-pointer hover:text-gray-200">
                <Link to="/certifications">Certifications</Link>{" "}
              </li>
              <li className="cursor-pointer hover:text-gray-200">
                <Link to="/academics">Academics</Link>
              </li>
              <li className="cursor-pointer hover:text-gray-200">
                <Link to="/skills">Skills</Link>
              </li>
              {/* <li className="cursor-pointer hover:text-gray-200">
                <Link to="/loginsignup">login/signup</Link>
              </li> */}
              {/* <li className="cursor-pointer hover:text-gray-200">
                <Link to="/about">About</Link>
              </li> */}
            </ul>

            {/* Profile Icon with Dropdown */}
            {/* <div className="relative group">
              <FontAwesomeIcon
                icon={faUser}
                className="text-white h-8 w-8 cursor-pointer"
              />
              <Dropdown menuItems={profileMenuItems} />
            </div> */}
          </div>
        </nav>

        {/* Routes to different pages */}
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/experience" element={<Experience />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/certifications" element={<Certifications />} />
            {/* <Route path="/account" element={<Account />} /> */}
            <Route path="/loginsignup" element={<LoginSignup />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
