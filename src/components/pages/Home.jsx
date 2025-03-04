import React from "react";
import Navbar from "../Navbar";
import Hero from "../Hero";
import img1 from "../../assets/img/heart-rate.png";
import img2 from "../../assets/img/neurology.png";
import img3 from "../../assets/img/pulmonary.png";
import img4 from "../../assets/img/tooth.png";
import img5 from "../../assets/img/visibility.png";
import img6 from "../../assets/img/heart-rate.png";

import doctorList from "../../Data/db";
import Navbar2 from "../Navbar2";
import Hero2 from "../Hero2";

const Home = () => {
  return (
    <div className=" ">
      <div className=" min-h-screen flex flex-col">
        {/* <Navbar2></Navbar2> */}
        <Navbar></Navbar>
        {/* <div className="h-[calc(100vh-80px)]">
          <Hero></Hero>
        </div> */}

        <div className="">
          <Hero2></Hero2>
        </div>
      </div>

      {/* Find by Speciality  section */}

      <section className="px-[100px] mb-[100px]">
        <h1 className="text-md text-xl sm:text-2xl font-bold lg:text-4xl mb-2 block text-black mt-10">
          Consult our top specialized doctors
        </h1>
        <p className="font-medium text-black-tint-400">
          Our doctors are ready to serve you 24/7
        </p>
        <div className="grid grid-cols-3 gap-12 mt-14">
          {/* <div className="card w-96 bg-base-100 card-lg shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Large Card</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="justify-end card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 card-lg shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Large Card</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="justify-end card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 card-lg shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Large Card</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="justify-end card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 card-lg shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Large Card</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="justify-end card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 card-lg shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Large Card</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="justify-end card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 card-lg shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Large Card</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="justify-end card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div> */}

          <div className="max-w-sm mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 text-center relative">
            {/* Icon with Border */}
            <div className="absolute left-1/2 -top-8 transform -translate-x-1/2 bg-white p-4 rounded-full border-4 border-blue-500 shadow-md">
              <img src={img1} alt="" srcset="" className="w-10" />
            </div>

            {/* Card Content */}
            <div className="mt-10">
              <h2 className="text-xl font-semibold text-gray-800">
                Doctor Consultation
              </h2>
              <p className="text-gray-600 mt-2">
                Book an appointment with expert doctors and get professional
                health advice.
              </p>
            </div>
          </div>
          <div className="max-w-sm mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 text-center relative">
            {/* Icon with Border */}
            <div className="absolute left-1/2 -top-8 transform -translate-x-1/2 bg-white p-4 rounded-full border-4 border-blue-500 shadow-md">
              <img src={img2} alt="" srcset="" className="w-10" />{" "}
            </div>

            {/* Card Content */}
            <div className="mt-10">
              <h2 className="text-xl font-semibold text-gray-800">
                Doctor Consultation
              </h2>
              <p className="text-gray-600 mt-2">
                Book an appointment with expert doctors and get professional
                health advice.
              </p>
            </div>
          </div>
          <div className="max-w-sm mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 text-center relative">
            {/* Icon with Border */}
            <div className="absolute left-1/2 -top-8 transform -translate-x-1/2 bg-white p-4 rounded-full border-4 border-blue-500 shadow-md">
              <img src={img3} alt="" srcset="" className="w-10" />
            </div>

            {/* Card Content */}
            <div className="mt-10">
              <h2 className="text-xl font-semibold text-gray-800">
                Doctor Consultation
              </h2>
              <p className="text-gray-600 mt-2">
                Book an appointment with expert doctors and get professional
                health advice.
              </p>
            </div>
          </div>
          <div className="max-w-sm mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 text-center relative">
            {/* Icon with Border */}
            <div className="absolute left-1/2 -top-8 transform -translate-x-1/2 bg-white p-4 rounded-full border-4 border-blue-500 shadow-md">
              <img src={img4} alt="" srcset="" className="w-10" />
            </div>

            {/* Card Content */}
            <div className="mt-10">
              <h2 className="text-xl font-semibold text-gray-800">
                Doctor Consultation
              </h2>
              <p className="text-gray-600 mt-2">
                Book an appointment with expert doctors and get professional
                health advice.
              </p>
            </div>
          </div>
          <div className="max-w-sm mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 text-center relative">
            {/* Icon with Border */}
            <div className="absolute left-1/2 -top-8 transform -translate-x-1/2 bg-white p-4 rounded-full border-4 border-blue-500 shadow-md">
              <img src={img5} alt="" srcset="" className="w-10" />{" "}
            </div>

            {/* Card Content */}
            <div className="mt-10">
              <h2 className="text-xl font-semibold text-gray-800">
                Doctor Consultation
              </h2>
              <p className="text-gray-600 mt-2">
                Book an appointment with expert doctors and get professional
                health advice.
              </p>
            </div>
          </div>
          <div className="max-w-sm mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 text-center relative">
            {/* Icon with Border */}
            <div className="absolute left-1/2 -top-8 transform -translate-x-1/2 bg-white p-4 rounded-full border-4 border-blue-500 shadow-md">
              <img src={img6} alt="" srcset="" className="w-10" />{" "}
            </div>

            {/* Card Content */}
            <div className="mt-10">
              <h2 className="text-xl font-semibold text-gray-800">
                Doctor Consultation
              </h2>
              <p className="text-gray-600 mt-2">
                Book an appointment with expert doctors and get professional
                health advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Find by doctor  section */}
      <section className="px-[100px] mb-[100px]">
        <h1 className="text-center text-[40px]">Top Doctors to Book</h1>
        <p className="text-center">
          Simply browse through our extensive list of trusted doctors, schedule{" "}
          <br />
          your appointment hassle-free.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6">
          {doctorList.slice(0, 10).map((doctor) => (
            <div
              key={doctor.id}
              className="border p-4 shadow-lg rounded-lg text-center bg-white"
            >
              {/* Doctor Image */}
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500"
              />

              {/* Speciality */}
              <h2 className="text-lg font-bold mt-2 text-gray-900">
                {doctor.speciality}
              </h2>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#023154] mx-15">
        <div className="flex items-center mx-15 py-15">
          <div className="w-3/5  items-center">
            <h1 className=" font-bold text-[#62E2EA] text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl 3xl:text-7xl 4xl:text-7xl block mb-2 5xl:text-6xl">
              Need some advice from our experts?
            </h1>
            <p className=" text-base font-normal lg:text-lg block text-black-tint-800 mb-6 md:mb-10 text-black-tint-1000 text-white">
              Request a call back now!
            </p>
          </div>
          <div className="w-2/5">
            <p className=" text-xs font-medium leading-5 lg:text-sm  block text-white mb-3">
              Please fill out this quick form and we'll get back to you within
              few hours!
            </p>
            <form className="flex flex-col">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="inputFocus placeholder-slate-700 mt-1 mb-3  block w-full rounded-sm border-transparent border-black-tint-700 bg-white py-3 px-4 shadow-sm focus:outline-none  sm:text-sm"
              />
              <input
                type="text"
                placeholder="Enter Your Phone Number"
                className="inputFocus placeholder-slate-700 mt-1 mb-3  block w-full rounded-sm border-transparent border-black-tint-700 bg-white py-3 px-4 shadow-sm focus:outline-none  sm:text-sm"
              />{" "}
              <input
                type="button"
                value="Call Me back"
                className="block w-full rounded-sm  bg- py-3 px-4 bg-[#62E2EA]  p-4 text-base font-bold capitalize duration-300  text-white  "
              />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
