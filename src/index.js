import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ToggleSounds from "./ToggleSounds";
import { SoundProvider } from "./contexts/SoundContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <SoundProvider>
      <App>
        <ToggleSounds />
      </App>
    </SoundProvider>
  </React.StrictMode>
);
