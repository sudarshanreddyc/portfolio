import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"; // Import App which contains the routing logic

// Get the root element from the DOM
const rootElement = document.getElementById("root");

// Create a root and render the app using createRoot
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App /> {/* Render App here which includes the Router */}
  </React.StrictMode>
);
