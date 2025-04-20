import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";

import FindDoctor from "./components/pages/FindDoctoctor";
import FindAmbulance from "./components/pages/FindAmbulance";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import DoctorDetails from "./components/pages/DoctorDetails";
import FindHospital from "./components/pages/FindHospital";
import Profile from "./components/pages/Profile";

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
    path: "/findhospital",
    element: (
      <>
        <Navbar></Navbar>
        <FindHospital></FindHospital>
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
    path: "/doctor/:id",
    element: (
      <>
        <Navbar></Navbar>
        <DoctorDetails></DoctorDetails>,<Footer></Footer>
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
        <Footer></Footer>
      </>
    ),
  },
  {
    path: "/profile",
    element: (
      <>
        <Navbar></Navbar>
        <Profile></Profile>
        <Footer></Footer>
      </>
    ),
  },

  ,
  {
    path: "/register",
    element: (
      <>
        <Navbar></Navbar>
        <Register></Register>
        <Footer></Footer>
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
