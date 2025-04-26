// const AppointmentList = () => {
//   const appointments = [
//     {
//       doctorName: "Dr. Kamal Uddin",
//       hospitalName: "Skin & Laser Clinic",
//       appointmentDate: "2025-05-01",
//       status: "Pending",
//     },
//     {
//       doctorName: "Dr. Joya Nasreen",
//       hospitalName: "City Skin Care",
//       appointmentDate: "2025-05-02",
//       status: "Approved",
//     },
//     {
//       doctorName: "Dr. Abid Hasan",
//       hospitalName: "New Hope Hospital",
//       appointmentDate: "2025-05-04",
//       status: "Rejected",
//     },
//   ];

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Pending":
//         return "text-yellow-600 bg-yellow-100";
//       case "Approved":
//         return "text-green-600 bg-green-100";
//       case "Rejected":
//         return "text-red-600 bg-red-100";
//       default:
//         return "text-gray-600 bg-gray-100";
//     }
//   };

//   return (
//     <div className="p-6 bg-white rounded-xl shadow-md">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//         My Appointment Requests
//       </h2>

//       <div className="overflow-x-auto">
//         <table className="min-w-full table-fixed border border-gray-300">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">
//                 #
//               </th>
//               <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">
//                 Doctor Name
//               </th>
//               <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">
//                 Hospital Name
//               </th>
//               <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">
//                 Appointment Date
//               </th>
//               <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">
//                 Status
//               </th>
//             </tr>
//           </thead>

//           <tbody>
//             {appointments.map((item, idx) => (
//               <tr key={idx} className="hover:bg-gray-50">
//                 <td className="px-4 py-4 text-sm border-b">{idx + 1}</td>
//                 <td className="px-4 py-4 text-sm text-gray-800 border-b">
//                   {item.doctorName}
//                 </td>
//                 <td className="px-4 py-4 text-sm text-gray-800 border-b">
//                   {item.hospitalName}
//                 </td>
//                 <td className="px-4 py-4 text-sm text-gray-700 border-b">
//                   {item.appointmentDate}
//                 </td>
//                 <td className="px-4 py-4 text-sm border-b">
//                   <span
//                     className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
//                       item.status
//                     )}`}
//                   >
//                     {item.status}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AppointmentList;

const AppointmentList = () => {
  const appointments = [
    {
      doctorName: "Dr. Kamal Uddin",
      hospitalName: "Skin & Laser Clinic",
      appointmentDate: "2025-05-01",
      status: "Pending",
    },
    {
      doctorName: "Dr. Joya Nasreen",
      hospitalName: "City Skin Care",
      appointmentDate: "2025-05-02",
      status: "Approved",
    },
    {
      doctorName: "Dr. Abid Hasan",
      hospitalName: "New Hope Hospital",
      appointmentDate: "2025-05-04",
      status: "Rejected",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "text-yellow-700 bg-yellow-100";
      case "Approved":
        return "text-green-700 bg-green-100";
      case "Rejected":
        return "text-red-700 bg-red-100";
      default:
        return "text-gray-700 bg-gray-100";
    }
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow-xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        🗓️ My Appointment Requests
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-separate border-spacing-y-3">
          <thead className="text-gray-700 bg-gray-100 rounded-lg">
            <tr>
              <th className="px-6 py-4 text-left text-base font-bold">#</th>
              <th className="px-6 py-4 text-left text-base font-bold">
                Doctor
              </th>
              <th className="px-6 py-4 text-left text-base font-bold">
                Hospital
              </th>
              <th className="px-6 py-4 text-left text-base font-bold">Date</th>
              <th className="px-6 py-4 text-left text-base font-bold">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {appointments.map((item, idx) => (
              <tr
                key={idx}
                className="bg-gray-50 hover:bg-blue-50 transition-all duration-300 rounded-lg"
              >
                <td className="px-6 py-4 text-sm font-medium text-gray-700">
                  {idx + 1}
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-800">
                  {item.doctorName}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {item.hospitalName}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {item.appointmentDate}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentList;
