import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// const root = document.getElementById("root");

// ReactDOM.createRoot(root).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );
