import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Internet from './internet'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Internet>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Internet>
    
  </React.StrictMode>
);
