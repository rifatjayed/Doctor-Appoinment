import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import FindDoctor from "./components/pages/FindDoctoctor";
import FindAmbulance from "./components/pages/FindAmbulance";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home></Home>
        <Footer></Footer>
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar></Navbar>
        <About></About>
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Navbar></Navbar>
        <Contact></Contact>
      </>
    ),
  },
  {
    path: "/finddoctor",
    element: (
      <>
        <Navbar></Navbar>
        <FindDoctor></FindDoctor>
        <Footer></Footer>
      </>
    ),
  },
  {
    path: "/findambulance",
    element: (
      <>
        <Navbar></Navbar>
        <FindAmbulance></FindAmbulance>
        <Footer></Footer>
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Navbar></Navbar>
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
