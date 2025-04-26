// // pages/AdminAppointmentRequests.jsx
// import { useState } from "react";
// import { FaCheck, FaTimes } from "react-icons/fa";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const AdminAppointmentRequests = ({
//   appointmentRequests,
//   setAppointmentRequests,
// }) => {
//   const handleApprove = (index) => {
//     const updated = [...appointmentRequests];
//     updated[index].status = "Approved";
//     setAppointmentRequests(updated);
//     toast.success("Appointment Approved!");
//   };

//   const handleReject = (index) => {
//     const updated = [...appointmentRequests];
//     updated[index].status = "Rejected";
//     setAppointmentRequests(updated);
//     toast.error("Appointment Rejected!");
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-8">
//       <ToastContainer />
//       <h1 className="text-3xl font-bold mb-6">Appointment Requests</h1>

//       {appointmentRequests.length === 0 ? (
//         <p className="text-gray-500">No appointment requests available.</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="min-w-full text-sm">
//             <thead>
//               <tr className="bg-gray-100 text-gray-700 text-left">
//                 <th className="py-2 px-4">#</th>
//                 <th className="py-2 px-4">Name</th>
//                 <th className="py-2 px-4">Phone</th>
//                 <th className="py-2 px-4">Doctor</th>
//                 <th className="py-2 px-4">Date</th>
//                 <th className="py-2 px-4">Status</th>
//                 <th className="py-2 px-4">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {appointmentRequests.map((req, idx) => (
//                 <tr key={idx} className="border-b hover:bg-gray-50">
//                   <td className="py-2 px-4">{idx + 1}</td>
//                   <td className="py-2 px-4">{req.name}</td>
//                   <td className="py-2 px-4">{req.phone}</td>
//                   <td className="py-2 px-4">{req.doctor}</td>
//                   <td className="py-2 px-4">{req.date}</td>
//                   <td className="py-2 px-4 font-bold">{req.status}</td>
//                   <td className="py-2 px-4 flex gap-2">
//                     <button
//                       onClick={() => handleApprove(idx)}
//                       className="text-green-600 hover:text-green-800"
//                     >
//                       <FaCheck />
//                     </button>
//                     <button
//                       onClick={() => handleReject(idx)}
//                       className="text-red-600 hover:text-red-800"
//                     >
//                       <FaTimes />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminAppointmentRequests;

// pages/AdminAppointmentRequests.jsx
// import { FaCheck, FaTimes } from "react-icons/fa";

// const AdminAppointmentRequests = () => {
//   // Dummy Appointments for UI Only
//   const appointmentRequests = [
//     {
//       name: "Rahim Uddin",
//       phone: "01700000000",
//       doctor: "Dr. Kamal Uddin",
//       date: "2025-05-01",
//       status: "Pending",
//     },
//     {
//       name: "Jannat Ara",
//       phone: "01812345678",
//       doctor: "Dr. Joya Nasreen",
//       date: "2025-05-02",
//       status: "Pending",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       <h1 className="text-3xl font-bold mb-8">Appointment Requests</h1>

//       <div className="overflow-x-auto rounded-xl shadow-lg bg-white">
//         <table className="min-w-full text-sm text-left">
//           <thead className="bg-gray-100 text-gray-700 uppercase">
//             <tr>
//               <th className="py-3 px-6">#</th>
//               <th className="py-3 px-6">Name</th>
//               <th className="py-3 px-6">Phone</th>
//               <th className="py-3 px-6">Doctor</th>
//               <th className="py-3 px-6">Date</th>
//               <th className="py-3 px-6">Status</th>
//               <th className="py-3 px-6 text-center">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {appointmentRequests.map((req, idx) => (
//               <tr key={idx} className="border-b hover:bg-gray-50">
//                 <td className="py-4 px-6">{idx + 1}</td>
//                 <td className="py-4 px-6">{req.name}</td>
//                 <td className="py-4 px-6">{req.phone}</td>
//                 <td className="py-4 px-6">{req.doctor}</td>
//                 <td className="py-4 px-6">{req.date}</td>
//                 <td className="py-4 px-6 font-semibold">{req.status}</td>
//                 <td className="py-4 px-6 flex justify-center gap-3">
//                   <button className="text-green-600 hover:text-green-800 p-2 rounded-full hover:bg-green-100">
//                     <FaCheck size={18} />
//                   </button>
//                   <button className="text-red-600 hover:text-red-800 p-2 rounded-full hover:bg-red-100">
//                     <FaTimes size={18} />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AdminAppointmentRequests;

// pages/AdminAppointmentRequests.jsx
import { FaCheck, FaTimes } from "react-icons/fa";

const AdminAppointmentRequests = () => {
  const appointmentRequests = [
    {
      name: "Rahim Uddin",
      phone: "01700000000",
      doctor: "Dr. Kamal Uddin",
      chamber: "Skin & Laser Clinic",
      date: "2025-05-01",
      status: "Pending",
    },
    {
      name: "Jannat Ara",
      phone: "01812345678",
      doctor: "Dr. Joya Nasreen",
      chamber: "City Skin Care",
      date: "2025-05-02",
      status: "Pending",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8">Appointment Requests</h1>

      <div className="overflow-x-auto rounded-xl shadow-lg bg-white">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase">
            <tr>
              <th className="py-3 px-4">#</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Phone</th>
              <th className="py-3 px-4">Doctor</th>
              <th className="py-3 px-4">Chamber</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointmentRequests.map((req, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="py-4 px-4">{idx + 1}</td>
                <td className="py-4 px-4">{req.name}</td>
                <td className="py-4 px-4">{req.phone}</td>
                <td className="py-4 px-4">{req.doctor}</td>
                <td className="py-4 px-4">{req.chamber}</td>
                <td className="py-4 px-4">{req.date}</td>
                <td className="py-4 px-4 font-semibold">{req.status}</td>
                <td className="py-4 px-4 flex justify-center gap-3">
                  <button className="text-green-600 hover:text-green-800 p-2 rounded-full hover:bg-green-100">
                    <FaCheck size={18} />
                  </button>
                  <button className="text-red-600 hover:text-red-800 p-2 rounded-full hover:bg-red-100">
                    <FaTimes size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminAppointmentRequests;
