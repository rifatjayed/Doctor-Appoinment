import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import video from ".././assets/img/video.webp";
import home from ".././assets/img/home.webp";
import chamber from ".././assets/img/chamber.webp";
import ambulance from ".././assets/img/ambulance.webp";
import therapi from ".././assets/img/therapi.webp";

const Hero2 = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="bg-[#e2f2ff] p-4 rounded-lg">
      <div className="text-center">
        <h1 className="text-[#023154] font-bold text-4xl w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-2">
          Book a Doctor's Appointment in Just 10 Minutes with Sasthya Seba.
        </h1>
        <h2 className="mt-2 text-lg font-normal text-[rgb(57,67,77)] text-center w-full px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">
          Say goodbye to endless phone calls and long queues. Book doctors'
          appointments, video consultations, ambulance service, manage medical
          records, and more. Take the first step towards better health.
        </h2>
      </div>
      {/* <div className="px-4 sm:px-12 md:px-24 lg:px-32 xl:px-64">
        <form action=""></form>
      </div> */}
      <div className="mx-auto mt-6 flex items-center bg-white rounded-full shadow-lg overflow-hidden w-[90%] md:w-[50%]">
        <button className="px-4 py-3 text-black transition">
          <FaSearch />
        </button>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search doctors, hospitals, clinics..."
          className="w-full px-4 py-3 text-black border-none outline-none"
        />
      </div>

      <section className="flex justify-center items-center my-20">
        <div className="grid grid-row md:grid-cols-5 gap-8 ">
          <div className="card card-compact bg-base-100 w-48 shadow-xl">
            <figure>
              <img src={video} alt="Shoes" />
            </figure>
            <div className="text-center my-4 mx-2">
              <h2 className="card-title text-bold text-xl ">
                Video Consultancy
              </h2>
              <p>Consult with best doctors through video call.</p>
            </div>
          </div>
          <div className="card card-compact bg-base-100 w-48 shadow-xl">
            <figure>
              <img src={chamber} alt="Shoes" />
            </figure>
            <div className="text-center my-4 mx-2">
              <h2 className="card-title text-bold text-xl ">
                Video Consultancy
              </h2>
              <p>Consult with best doctors through video call.</p>
            </div>
          </div>
          <div className="card card-compact bg-base-100 w-48 shadow-xl">
            <figure>
              <img src={home} alt="Shoes" />
            </figure>
            <div className="text-center my-4 mx-2">
              <h2 className="card-title text-bold text-xl ">
                Video Consultancy
              </h2>
              <p>Consult with best doctors through video call.</p>
            </div>
          </div>
          <div className="card card-compact bg-base-100 w-48 shadow-xl">
            <figure>
              <img src={ambulance} alt="Shoes" />
            </figure>
            <div className="text-center my-4 mx-2">
              <h2 className="card-title text-bold text-xl ">
                Video Consultancy
              </h2>
              <p>Consult with best doctors through video call.</p>
            </div>
          </div>
          <div className="card card-compact bg-base-100 w-48 shadow-xl">
            <figure>
              <img src={therapi} alt="Shoes" />
            </figure>
            <div className="text-center my-4 mx-2">
              <h2 className="card-title text-bold text-xl ">
                Domiciliary Service
              </h2>
              <p>Physiotherapy and Nurse service at home.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero2;
