// import { FaUserMd, FaAmbulance, FaClipboardList } from "react-icons/fa";

// const AdminDashboard = () => {
//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-6">Welcome, Admin 👋</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         <div className="bg-white shadow rounded-2xl p-6 flex items-center space-x-4">
//           <FaUserMd className="text-blue-500 text-3xl" />
//           <div>
//             <p className="text-xl font-semibold">124</p>
//             <p className="text-gray-500">Total Doctors</p>
//           </div>
//         </div>

//         <div className="bg-white shadow rounded-2xl p-6 flex items-center space-x-4">
//           <FaClipboardList className="text-green-500 text-3xl" />
//           <div>
//             <p className="text-xl font-semibold">87</p>
//             <p className="text-gray-500">Appointment Requests</p>
//           </div>
//         </div>

//         <div className="bg-white shadow rounded-2xl p-6 flex items-center space-x-4">
//           <FaAmbulance className="text-red-500 text-3xl" />
//           <div>
//             <p className="text-xl font-semibold">14</p>
//             <p className="text-gray-500">Ambulance Requests</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

import { FaUserMd, FaAmbulance, FaClipboardList } from "react-icons/fa";

const AdminDashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Welcome, Admin 👋</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-2xl p-6 flex items-center space-x-4">
          <FaUserMd className="text-blue-500 text-3xl" />
          <div>
            <p className="text-xl font-semibold">124</p>
            <p className="text-gray-500">Total Doctors</p>
          </div>
        </div>

        <div className="bg-white shadow rounded-2xl p-6 flex items-center space-x-4">
          <FaClipboardList className="text-green-500 text-3xl" />
          <div>
            <p className="text-xl font-semibold">87</p>
            <p className="text-gray-500">Appointment Requests</p>
          </div>
        </div>

        <div className="bg-white shadow rounded-2xl p-6 flex items-center space-x-4">
          <FaAmbulance className="text-red-500 text-3xl" />
          <div>
            <p className="text-xl font-semibold">14</p>
            <p className="text-gray-500">Ambulance Requests</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
