import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// src/main.jsx ya src/index.js
import './index.css';
  // ✅ YE LINE HONI ZAROORI HAI

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
