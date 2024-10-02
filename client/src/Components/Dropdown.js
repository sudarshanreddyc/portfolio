import React from "react";
import { useNavigate } from "react-router-dom";

const Dropdown = ({ menuItems }) => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleItemClick = (item) => {
    if (item.onClick) {
      item.onClick();
    }
    if (item.navigate) {
      navigate(item.navigate); // Navigate to the provided route
    }
  };

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Menu */}
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 hidden group-hover:block">
        <div className="py-1">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => handleItemClick(item)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
