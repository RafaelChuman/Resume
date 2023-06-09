import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "@/App.styled";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
        <GlobalStyle />
        <App />
    </BrowserRouter>
  </React.StrictMode>
);
