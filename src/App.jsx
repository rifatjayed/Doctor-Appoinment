import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import FindDoctor from "./components/pages/FindDoctoctor";
import FindAmbulance from "./components/pages/FindAmbulance";

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
    path: "/finddoctor",
    element: (
      <>
        <FindDoctor></FindDoctor>
      </>
    ),
  },
  {
    path: "/findambulance",
    element: (
      <>
        <FindAmbulance></FindAmbulance>{" "}
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
