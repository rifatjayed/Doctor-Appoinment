// import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import video from ".././assets/img/video.webp";
// import home from ".././assets/img/home.webp";
// import chamber from ".././assets/img/chamber.webp";
// import ambulance from ".././assets/img/ambulance.webp";
// import therapi from ".././assets/img/therapi.webp";

// const Hero2 = () => {
//   const [search, setSearch] = useState("");
//   return (
//     <div className="bg-[#e2f2ff] p-4 rounded-lg">
//       <div className="text-center">
//         <h1 className="text-[#023154] font-bold text-4xl w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-2">
//           Book a Doctor's Appointment in Just 10 Minutes with Sasthya Seba.
//         </h1>
//         <h2 className="mt-2 text-lg font-normal text-[rgb(57,67,77)] text-center w-full px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">
//           Say goodbye to endless phone calls and long queues. Book doctors'
//           appointments, video consultations, ambulance service, manage medical
//           records, and more. Take the first step towards better health.
//         </h2>
//       </div>

//       <section className="flex justify-center items-center my-20">
//         <div className="grid grid-row md:grid-cols-5 gap-8 ">
//           <div className="card card-compact bg-base-100 w-48 shadow-xl">
//             <figure>
//               <img src={video} alt="Shoes" />
//             </figure>
//             <div className="text-center my-4 mx-2">
//               <h2 className="card-title text-bold text-xl ">
//                 Video Consultancy
//               </h2>
//               <p>Consult with best doctors through video call.</p>
//             </div>
//           </div>
//           <div className="card card-compact bg-base-100 w-48 shadow-xl">
//             <figure>
//               <img src={chamber} alt="" />
//             </figure>
//             <div className="text-center my-4 mx-2">
//               <h2 className="card-title text-bold text-xl ">
//                 Chamber Appointment
//               </h2>
//               <p>Book your appointment easily with few clicks.</p>
//             </div>
//           </div>
//           <div className="card card-compact bg-base-100 w-48 shadow-xl">
//             <figure>
//               <img src={home} alt="Shoes" />
//             </figure>
//             <div className="text-center my-4 mx-2">
//               <h2 className="card-title text-bold text-xl ">
//                 Doctor At Your Home
//               </h2>
//               <p>Book a doctor to visit you at home.</p>
//             </div>
//           </div>
//           <div className="card card-compact bg-base-100 w-48 shadow-xl">
//             <figure>
//               <img src={ambulance} alt="Shoes" />
//             </figure>
//             <div className="text-center my-4 mx-2">
//               <h2 className="card-title text-bold text-xl ">
//                 Ambulance Service
//               </h2>
//               <p>24/7 Emergency Ambulance Service..</p>
//             </div>
//           </div>
//           <div className="card card-compact bg-base-100 w-48 shadow-xl">
//             <figure>
//               <img src={therapi} alt="Shoes" />
//             </figure>
//             <div className="text-center my-4 mx-2">
//               <h2 className="card-title text-bold text-xl ">
//                 Domiciliary Service
//               </h2>
//               <p>Physiotherapy and Nurse service at home.</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Hero2;

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

// Images
import video from "../assets/img/video.webp";
import home from "../assets/img/home.webp";
import chamber from "../assets/img/chamber.webp";
import ambulance from "../assets/img/ambulance.webp";
import therapi from "../assets/img/therapi.webp";

const Hero2 = () => {
  const [search, setSearch] = useState("");

  // Card Data
  const services = [
    {
      img: video,
      title: "Video Consultancy",
      desc: "Consult with best doctors through video call.",
    },
    {
      img: chamber,
      title: "Chamber Appointment",
      desc: "Book your appointment easily with few clicks.",
    },
    {
      img: home,
      title: "Doctor At Your Home",
      desc: "Book a doctor to visit you at home.",
    },
    {
      img: ambulance,
      title: "Ambulance Service",
      desc: "24/7 Emergency Ambulance Service.",
    },
    {
      img: therapi,
      title: "Domiciliary Service",
      desc: "Physiotherapy and Nurse service at home.",
    },
  ];

  return (
    <div className="bg-[#e2f2ff] p-4 rounded-lg">
      {/* Title */}
      <div className="text-center">
        <h1 className="text-[#023154] font-bold text-4xl w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-2">
          Book a Doctor's Appointment in Just 10 Minutes with Sasthya Daktar.
        </h1>
        <h2 className="mt-2 text-lg font-normal text-[rgb(57,67,77)] text-center w-full px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">
          Say goodbye to endless phone calls and long queues. Book doctors'
          appointments, video consultations, ambulance service, manage medical
          records, and more. Take the first step towards better health.
        </h2>
      </div>

      {/* Services Cards */}
      <section className="flex justify-center items-center m-8 md:m-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="card  bg-white w-full shadow-xl transition-transform hover:scale-105"
            >
              <figure>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-40  "
                />
              </figure>
              <div className="text-center py-4 mx-2">
                <h2 className=" text-center font-bold text-xl mb-2">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero2;
