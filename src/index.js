import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ToggleSounds from "./ToggleSounds";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App>
      <ToggleSounds />
    </App>
  </React.StrictMode>
);
