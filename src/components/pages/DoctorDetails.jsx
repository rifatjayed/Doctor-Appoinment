// import React, { useState } from "react";
// import { useParams } from "react-router";
// import doctorProImg from "../../assets/img/dctrpro.jpg";
// import { FaRegHospital, FaMapMarkerAlt, FaRegClock } from "react-icons/fa";

// import doctorList from "../../Data/db2";

// const DoctorDetails = () => {
//   const [selected, setSelected] = useState("");

//   const { id } = useParams();
//   console.log(id);
//   const doctor = doctorList.find((doc) => doc.id === id);
//   if (!doctor)
//     return <p className="text-center text-red-600 mt-10">Doctor not found</p>;

//   return (
//     <div className="bg-[rgb(248_248_250)] py-10 px-4 sm:px-6 md:px-10 lg:px-[100px] xl:px-[100px]">
//       <div className="flex ">
//         <div className="bg-white w-2/3 shadow-[5px_5px_10px_0px_rgba(0,_0,_0,_0.1)] rounded-lg p-4 sm:p-6 md:p-8">
//           {/* Doctor Basic Info */}
//           <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
//             <img
//               className="w-[100px] h-[100px] object-cover rounded"
//               src={doctorProImg}
//               alt={doctor.name}
//             />

//             <div className="text-center sm:text-left">
//               <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600">
//                 {doctor.name}
//               </h3>
//               <h4 className="text-sm text-gray-600">
//                 {doctor.degrees.join(", ")}
//               </h4>
//               <h4 className="text-sm text-gray-600">{doctor.specialization}</h4>
//               <h4 className="text-sm text-gray-600">
//                 {`${doctor.experience_years} Years of Experience Overall`}
//               </h4>
//               <h4 className="text-sm text-gray-600">
//                 BMDC Reg: <span>{doctor.bmdc_registration}</span>
//               </h4>

//               <div className="flex  mt-10">
//                 <div className=" flex">
//                   <FaRegHospital className="text-xl" />

//                   <div className="ml-2">
//                     <p>{doctor.chamber[0]?.name}</p>
//                     <p>{doctor.chamber[0]?.address}</p>
//                     <p>{doctor.chamber[0]?.contact}</p>
//                   </div>
//                 </div>
//                 <div className="flex ml-10">
//                   <FaRegClock />
//                   <div>
//                     <p>Availability</p>
//                     <p>{doctor.availability}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Services */}
//           <div className="mt-8">
//             <p className="mb-2 font-medium text-gray-700">Services For:</p>
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
//               {doctor.services.map((service, index) => (
//                 <span
//                   key={index}
//                   className="bg-[rgb(248_248_250)] py-1 px-3 text-sm text-gray-700 rounded text-center  items-center"
//                 >
//                   {service}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* bosailam */}

//           <div className="mt-8 bg-white rounded-lg p-4 sm:p-6 md:p-8 shadow-sm">
//             <h3>Locations</h3>
//             <div>
//               {/* <div className="flex  mt-5 mb-10 ">
//             <div className=" flex">
//               <FaRegHospital className="text-xl" />

//               <div className="ml-2">
//                 {doctor.chamber.map((cham) => (
//                   <div className="border border-gray-200 py-10 px-5 flex">
//                     <div>
//                       <p>{cham.name}</p>
//                       <p> {cham.address}</p>
//                       <p> {cham.contact}</p>
//                     </div>
//                     <div>
//                       <FaRegClock />
//                       <p>Availability</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div> */}
//               <div className="flex flex-col mt-5 mb-10 space-y-5">
//                 {doctor.chamber.map((cham, index) => (
//                   <div
//                     key={index}
//                     className="border border-gray-200 rounded-xl p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 "
//                   >
//                     <div className="flex items-start gap-3">
//                       <FaRegHospital className="text-2xl text-blue-600 mt-1" />
//                       <div>
//                         <p className="font-semibold text-lg">{cham.name}</p>
//                         <p className="flex items-center text-gray-700">
//                           <FaMapMarkerAlt className="mr-2 text-sm text-blue-600" />
//                           {cham.address}
//                         </p>
//                         <p className="text-gray-600">📞 {cham.contact}</p>
//                       </div>
//                     </div>

//                     <div className="flex items-center gap-2 text-sm text-gray-600">
//                       <FaRegClock className="text-lg text-green-600" />
//                       <p>
//                         {doctor.availability ||
//                           "Availability info not available"}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <h2 className="font-semibold text-gray-800 mb-2">
//               Work Experience:
//             </h2>
//             <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
//               {doctor.work_experience.map((exp, index) => (
//                 <li key={index}>
//                   <span className="font-medium">{exp.title}</span> -{" "}
//                   {exp.institution}
//                 </li>
//               ))}
//             </ul>
//             <hr className="border border-gray-200 my-4" />
//             <div>
//               <h2 className="font-semibold text-gray-800 mb-2">Education:</h2>
//               <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
//                 {doctor.education.map((edu, index) => (
//                   <li key={index}>
//                     <span className="font-medium">{edu}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="w-1/3 bg-white rounded-lg ml-8 px-6 py-3">
//           <h1 className="text-sm leading-5 text-gray-900 font-medium text-center">
//             Select Location, Time Slot Consultation Method
//           </h1>
//           <hr className="border w-full border-gray-200 my-4" />
//           <div>
//             <p>Select a Location</p>
//             {doctor.chamber.map((cham, index) => (
//               <div
//                 key={index}
//                 className=" bg-[#f8f8fa] rounded-xl my-2 p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
//               >
//                 <div className="flex items-center gap-3">
//                   {/* Radio Button */}
//                   <input
//                     type="radio"
//                     name="chamber"
//                     id={`chamber-${index}`}
//                     className="text-blue-600"
//                     // You can manage the selection state by adding a handler like onChange to track which chamber is selected
//                   />

//                   <div>
//                     <p className="font-semibold text-lg">{cham.name}</p>
//                     <p className="flex items-center text-gray-700">
//                       <FaMapMarkerAlt className="mr-2 text-sm text-blue-600" />
//                       {cham.address}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <hr className="border w-full border-gray-200 my-4" />
//           <div>
//             <p>Select Consultation Type</p>
//             {/* <div className="mt-2">
//               <button className="p-2 rounded-full border border-gray-200 mr-2">
//                 {" "}
//                 Face to Face
//               </button>
//               <button className="p-2 rounded-full border border-gray-200">
//                 Video/Audio call
//               </button>
//             </div> */}
//             <div className="mt-2">
//               <button
//                 onClick={() => setSelected("face")}
//                 className={`p-2 rounded-full border mr-2 ${
//                   selected === "face"
//                     ? "bg-[rgb(212_237_255)] !text-[rgb(7_143_247)] border-[rgb(212_237_255)]"
//                     : "bg-white text-gray-800 border-gray-200"
//                 }`}
//               >
//                 Face to Face
//               </button>

//               <button
//                 onClick={() => setSelected("video")}
//                 className={`p-2 rounded-full border ${
//                   selected === "video"
//                     ? "bg-[rgb(212_237_255)] !text-[rgb(7_143_247)] border-[rgb(212_237_255)]"
//                     : "bg-white text-gray-800 border-gray-200"
//                 }`}
//               >
//                 Video/Audio call
//               </button>
//             </div>
//           </div>

//           <button className=" mt-5 w-full px-4 py-3 text-base font-medium text-white duration-300 bg-blue-600">
//             Confirm
//           </button>
//         </div>
//       </div>

//       {/* Info */}

//       {/* Education */}
//       {/* <div className="mt-8 bg-white rounded-lg p-4 sm:p-6 md:p-8 shadow-sm">
//         <h2 className="font-semibold text-gray-800 mb-2">Education:</h2>
//         <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
//           {doctor.education.map((edu, index) => (
//             <li key={index}>
//               <span className="font-medium">{edu}</span>
//             </li>
//           ))}
//         </ul>
//       </div> */}
//     </div>
//   );
// };

// export default DoctorDetails;
import React, { useState } from "react";
import { useParams } from "react-router";
import doctorProImg from "../../assets/img/dctrpro.jpg";
import { FaRegHospital, FaMapMarkerAlt, FaRegClock } from "react-icons/fa";

import doctorList from "../../Data/db2";

const DoctorDetails = () => {
  const [selected, setSelected] = useState("");

  const { id } = useParams();
  console.log(id);
  const doctor = doctorList.find((doc) => doc.id === id);
  if (!doctor)
    return <p className="text-center text-red-600 mt-10">Doctor not found</p>;

  return (
    <div className="bg-[rgb(248_248_250)] py-10 px-4 sm:px-6 md:px-10 lg:px-[100px] xl:px-[100px]">
      <div className="flex flex-col sm:flex-row">
        <div className="bg-white w-full sm:w-2/3 shadow-[5px_5px_10px_0px_rgba(0,_0,_0,_0.1)] rounded-lg p-4 sm:p-6 md:p-8">
          {/* Doctor Basic Info */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <img
              className="w-[100px] h-[100px] object-cover rounded"
              src={doctorProImg}
              alt={doctor.name}
            />
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600">
                {doctor.name}
              </h3>
              <h4 className="text-sm text-gray-600">
                {doctor.degrees.join(", ")}
              </h4>
              <h4 className="text-sm text-gray-600">{doctor.specialization}</h4>
              <h4 className="text-sm text-gray-600">
                {`${doctor.experience_years} Years of Experience Overall`}
              </h4>
              <h4 className="text-sm text-gray-600">
                BMDC Reg: <span>{doctor.bmdc_registration}</span>
              </h4>

              <div className="flex flex-col sm:flex-row sm:space-x-10 mt-10">
                <div className="flex">
                  <FaRegHospital className="text-xl" />
                  <div className="ml-2">
                    <p>{doctor.chamber[0]?.name}</p>
                    <p>{doctor.chamber[0]?.address}</p>
                    <p>{doctor.chamber[0]?.contact}</p>
                  </div>
                </div>
                <div className="flex items-center mt-4 sm:mt-0">
                  <FaRegClock />
                  <div className="ml-2">
                    <p>Availability</p>
                    <p>{doctor.availability}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="mt-8">
            <p className="mb-2 font-medium text-gray-700">Services For:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
              {doctor.services.map((service, index) => (
                <span
                  key={index}
                  className="bg-[rgb(248_248_250)] py-1 px-3 text-sm text-gray-700 rounded text-center items-center"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Locations */}
          <div className="mt-8 bg-white rounded-lg p-4 sm:p-6 md:p-8 shadow-sm">
            <h3>Locations</h3>
            <div className="flex flex-col mt-5 mb-10 space-y-5">
              {doctor.chamber.map((cham, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                >
                  <div className="flex items-start gap-3">
                    <FaRegHospital className="text-2xl text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold text-lg">{cham.name}</p>
                      <p className="flex items-center text-gray-700">
                        <FaMapMarkerAlt className="mr-2 text-sm text-blue-600" />
                        {cham.address}
                      </p>
                      <p className="text-gray-600">📞 {cham.contact}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaRegClock className="text-lg text-green-600" />
                    <p>
                      {doctor.availability || "Availability info not available"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <h2 className="font-semibold text-gray-800 mb-2">
              Work Experience:
            </h2>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              {doctor.work_experience.map((exp, index) => (
                <li key={index}>
                  <span className="font-medium">{exp.title}</span> -{" "}
                  {exp.institution}
                </li>
              ))}
            </ul>
            <hr className="border border-gray-200 my-4" />
            <div>
              <h2 className="font-semibold text-gray-800 mb-2">Education:</h2>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                {doctor.education.map((edu, index) => (
                  <li key={index}>
                    <span className="font-medium">{edu}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Panel for Location & Consultation Type */}
        <div className="w-full sm:w-1/3 bg-white rounded-lg ml-0 md:ml-8 sm:ml-4 mt-8 sm:mt-0 px-6 py-3">
          <h1 className="text-sm leading-5 text-gray-900 font-medium text-center">
            Select Location, Time Slot Consultation Method
          </h1>
          <hr className="border w-full border-gray-200 my-4" />
          <div>
            <p>Select a Location</p>
            {doctor.chamber.map((cham, index) => (
              <div
                key={index}
                className=" bg-[#f8f8fa] rounded-xl my-2 p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
              >
                <div className="flex items-center gap-3">
                  {/* Radio Button */}
                  <input
                    type="radio"
                    name="chamber"
                    id={`chamber-${index}`}
                    className="text-blue-600"
                  />
                  <div>
                    <p className="font-semibold text-lg">{cham.name}</p>
                    <p className="flex items-center text-gray-700">
                      <FaMapMarkerAlt className="mr-2 text-sm text-blue-600" />
                      {cham.address}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <hr className="border w-full border-gray-200 my-4" />
          <div>
            <p>Select Consultation Type</p>
            <div className="mt-2">
              <button
                onClick={() => setSelected("face")}
                className={`p-2 rounded-full border mr-2 ${
                  selected === "face"
                    ? "bg-[rgb(212_237_255)] !text-[rgb(7_143_247)] border-[rgb(212_237_255)]"
                    : "bg-white text-gray-800 border-gray-200"
                }`}
              >
                Face to Face
              </button>

              <button
                onClick={() => setSelected("video")}
                className={`p-2 rounded-full border ${
                  selected === "video"
                    ? "bg-[rgb(212_237_255)] !text-[rgb(7_143_247)] border-[rgb(212_237_255)]"
                    : "bg-white text-gray-800 border-gray-200"
                }`}
              >
                Video/Audio call
              </button>
            </div>
          </div>

          <button className=" mt-5 w-full px-4 py-3 text-base font-medium text-white duration-300 bg-blue-600">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
