import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";

// Force light mode pada document - SIMPLIFIED
if (typeof document !== "undefined") {
  document.documentElement.style.colorScheme = "light only";
  document.documentElement.style.setProperty("-webkit-color-scheme", "light only");
  document.body.style.colorScheme = "light only";
  document.body.style.setProperty("-webkit-color-scheme", "light only");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
