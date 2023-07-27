import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import DI from "./lib/DI.ts";
import "./App.css";

const repos = new DI();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
