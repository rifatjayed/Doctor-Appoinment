// import { createBrowserRouter, RouterProvider } from "react-router";
// // import "../../App.css";
// import Home from "../pages/Home";
// import Login from "../pages/Users/Login";
// import Register from "../pages/Register";

// import FindDoctor from "../pages/FindDoctoctor";
// import FindAmbulance from "../pages/FindAmbulance";
// import Footer from "../Footer";
// import Navbar from "../Navbar";
// import DoctorDetails from "../pages/Users/DoctorDetails";
// import FindHospital from "../pages/FindHospital";
// import Profile from "../pages/Profile";
// import AdminDashboard from "../pages/Admin/Dashboard";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <>
//         <Home></Home>
//         <Footer></Footer>
//       </>
//     ),
//   },
//   {
//     path: "/findhospital",
//     element: (
//       <>
//         <Navbar></Navbar>
//         <FindHospital></FindHospital>
//       </>
//     ),
//   },

//   {
//     path: "/finddoctor",
//     element: (
//       <>
//         <Navbar></Navbar>
//         <FindDoctor></FindDoctor>
//         <Footer></Footer>
//       </>
//     ),
//   },
//   {
//     path: "/doctor/:id",
//     element: (
//       <>
//         <Navbar></Navbar>
//         <DoctorDetails></DoctorDetails>,<Footer></Footer>
//       </>
//     ),
//   },
//   {
//     path: "/findambulance",
//     element: (
//       <>
//         <Navbar></Navbar>
//         <FindAmbulance></FindAmbulance>
//         <Footer></Footer>
//       </>
//     ),
//   },
//   {
//     path: "/login",
//     element: (
//       <>
//         <Navbar></Navbar>
//         <Login></Login>
//         <Footer></Footer>
//       </>
//     ),
//   },
//   {
//     path: "/profile",
//     element: (
//       <>
//         <Navbar></Navbar>
//         <Profile></Profile>
//         <Footer></Footer>
//       </>
//     ),
//   },

//   ,
//   {
//     path: "/register",
//     element: (
//       <>
//         <Navbar></Navbar>
//         <Register></Register>
//         <Footer></Footer>
//       </>
//     ),
//   },
//   {
//     path: "/admin",
//     element: (
//       <>
//         <AdminDashboard></AdminDashboard>
//       </>
//     ),
//   },
// ]);

// function UserLayout() {
//   return (
//     <div>
//       <main className="overflow-x-hidden">
//         <RouterProvider router={router} />
//       </main>
//     </div>
//   );
// }

// export default UserLayout;
