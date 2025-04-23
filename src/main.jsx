import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import DoctorProvider from "./Context/DoctorProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <DoctorProvider>
        <App />
      </DoctorProvider>
    </AuthProvider>
  </StrictMode>
);

// const root = document.getElementById("root");

// ReactDOM.createRoot(root).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );
