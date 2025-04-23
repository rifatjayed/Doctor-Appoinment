import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { Navigate } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
      </div>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoutes;

// <div className="bg-[rgb(248_248_250)]">
//   <div className="flex gap-40">
//     <div className="w-1/5 bg-white pt-5">
//       <div className="flex items-center justify-center">
//         <AiOutlineUser className="text-[35px]" />
//         <div>
//           <h2 className="text-[rgb(4_81_140)] text-base font-bold">
//             My Dashboard
//           </h2>
//           <h4 className="text-xs text-[rgb(97_114_131)]">Rifat Jayed</h4>
//         </div>
//       </div>
//       <div className="flex flex-col px-12 py-6">
//         <Link
//           to="/appoinments"
//           className=" rounded-lg  p-3 text-sm  font-bold"
//         >
//           Appoinments
//         </Link>
//         <Link
//           to="/order_request"
//           className=" rounded-lg  p-3 text-sm  font-bold"
//         >
//           Order request
//         </Link>
//         <Link
//           to="/medical_reports"
//           className=" rounded-lg  p-3 text-sm  font-bold"
//         >
//           Medical Report
//         </Link>
//       </div>
//     </div>
//     <div className="w-4/5 bg-white"> Working</div>
//   </div>
// </div>
