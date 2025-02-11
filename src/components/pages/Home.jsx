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

const Home = () => {
  return (
    <div className=" ">
      <div className=" min-h-screen flex flex-col">
        <Navbar></Navbar>
        <div className="flex-1">
          <Hero></Hero>
        </div>
      </div>

      {/* Find by Speciality  section */}

      <section className="px-[100px] mb-[100px]">
        <h1 className="text-center text-[40px]">What we do best.</h1>
        <p className="text-center">
          Simply browse through our extensive list of trusted doctors, schedule{" "}
          <br />
          your appointment hassle-free.
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
    </div>
  );
};

export default Home;
