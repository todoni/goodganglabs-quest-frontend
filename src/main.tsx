import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { AudioProvider } from "./application/AudioStateProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AudioProvider>
      <App />
    </AudioProvider>
  </React.StrictMode>
);
