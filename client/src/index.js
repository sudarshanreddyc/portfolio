import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "../src/Redux/store";
import App from "./App"; // Import App which contains the routing logic

// Get the root element from the DOM
const rootElement = document.getElementById("root");

// Create a root and render the app using createRoot
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
