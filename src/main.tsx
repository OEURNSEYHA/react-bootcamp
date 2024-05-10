import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ThemContextProvider from "./utils/ThemProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemContextProvider>
      <App />
    </ThemContextProvider>
  </React.StrictMode>
);
