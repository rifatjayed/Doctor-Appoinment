import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import AllDoctor from "./components/pages/AllDoctor";
import Register from "./components/pages/Register";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home></Home>
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <About></About>
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Contact></Contact>
      </>
    ),
  },
  {
    path: "/allDoctor",
    element: (
      <>
        <AllDoctor></AllDoctor>
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Login></Login>
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <Register></Register>
      </>
    ),
  },
]);

function App() {
  return (
    <div>
      <main className="overflow-x-hidden">
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

export default App;
