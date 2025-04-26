import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Home from "./components/pages/Users/Home";
import Login from "./components/pages/Users/Login";
import Register from "./components/pages/Users/Register";

import FindDoctor from "./components/pages/Users/FindDoctoctor";
import FindAmbulance from "./components/pages/Users/FindAmbulance";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import DoctorDetails from "./components/pages/Users/DoctorDetails";
import FindHospital from "./components/pages/Users/FindHospital";
import Profile from "./components/pages/Users/Profile";
import AdminDashboard from "./components/pages/Admin/Dashboard";
import Dashboard from "./components/pages/Users/Dashboard";

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
    path: "/dashboard",
    element: (
      <>
        <Navbar></Navbar>
        <Dashboard></Dashboard>
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
  {
    path: "/admin",
    element: (
      <>
        <AdminDashboard></AdminDashboard>
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
