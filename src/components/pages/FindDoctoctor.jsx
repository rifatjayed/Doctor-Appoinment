import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

import doctorList from "../../Data/db2";
import doctorProImg from "../../assets/img/dctrpro.jpg";

import { useForm } from "react-hook-form";
import { Link } from "react-router";

const FindDoctor = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));

  const [searchTerm, setSearchTerm] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [specializationFilter, setSpecializationFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [consultationType, setConsultationType] = useState("");

  return (
    <div>
      <div className="bg-[rgb(2,49,84)] py-10 flex justify-center items-center">
        <div className="w-[90%] md:w-[80%] lg:w-[70%] flex flex-col gap-6">
          <div className="mt-6 flex items-center bg-white overflow-hidden w-full rounded-md flex-row">
            <FaSearch className="text-gray-500 ml-3" />
            <input
              type="text"
              placeholder="Search doctors"
              className="w-full px-4 py-3 text-black border-none outline-none"
            />
            <button className="px-6 py-3 rounded-md text-base font-bold capitalize duration-300 bg-[rgb(7,143,247)] text-white hover:bg-blue-600 active:bg-blue-800">
              Search
            </button>
          </div>

          {/* Filters Dropdowns */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <select
              className="flex-1 min-w-[140px] px-4 py-2 rounded border border-gray-300"
              value={genderFilter}
              onChange={(e) => setGenderFilter(e.target.value)}
            >
              <option value="">All Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            <select
              className="flex-1 min-w-[140px] px-4 py-2 rounded border border-gray-300"
              value={specializationFilter}
              onChange={(e) => setSpecializationFilter(e.target.value)}
            >
              <option value="">All Specializations</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Dermatology">Dermatology</option>
              <option value="Neurology">Neurology</option>
            </select>

            <select
              className="flex-1 min-w-[140px] px-4 py-2 rounded border border-gray-300"
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
            >
              <option value="">All Cities</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Chattogram">Chattogram</option>
            </select>

            <select
              className="flex-1 min-w-[140px] px-4 py-2 rounded border border-gray-300"
              value={consultationType}
              onChange={(e) => setConsultationType(e.target.value)}
            >
              <option value="">Any Consultation</option>
              <option value="face">Face to Face</option>
              <option value="video">Video/Audio</option>
            </select>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 md:px-10 lg:px-[100px] xl:px-[150px] bg-[rgb(248_248_250)]">
        <h3 className="py-5  font-medium text-gray-800">
          Book appointments with minimum wait-time & Video consult with verified
          doctors
        </h3>

        <div className="space-y-6">
          {doctorList.map((doctor) => (
            <div key={doctor.id}>
              <div className="p-4 sm:p-6 md:p-8 lg:p-10 bg-white shadow-[5px_5px_10px_0px_rgba(0,_0,_0,_0.1)] rounded-lg">
                <div className="flex flex-col sm:flex-row">
                  {/* Image */}
                  <div className="flex-shrink-0 flex justify-center sm:block mb-4 sm:mb-0">
                    <img
                      className="w-[80px] sm:w-[100px] h-auto object-cover rounded"
                      src={doctorProImg}
                      alt={doctor.name}
                    />
                  </div>

                  {/* Doctor Info */}
                  <div className="sm:ml-6 text-center sm:text-left">
                    <Link
                      to={`/doctor/${doctor.id}`}
                      className=" text-lg font-semibold text-gray-800    hover:text-blue-600"
                    >
                      {doctor.name}
                    </Link>
                    <h3 className="text-sm text-gray-600">
                      {doctor.degrees.join(", ")}
                    </h3>
                    <h3 className="text-sm text-gray-600">
                      {doctor.specialization}
                    </h3>
                    <h3 className="text-sm text-gray-600">
                      {`${doctor.experience_years} Years of Experience Overall`}
                    </h3>
                  </div>
                </div>

                {/* Services */}
                {/* <p className="flex justify-around mt-10">
                  {doctor.services.map((service, index) => (
                    <span
                      className="bg-[rgb(248_248_250)] py-1 px-3 text-sm text-gray-700 rounded"
                      key={index}
                    >
                      {service}
                    </span>
                  ))}
                </p> */}

                <div className="flex flex-wrap gap-2 justify-start mt-6">
                  {doctor.services.map((service, index) => (
                    <span
                      key={index}
                      className="bg-[rgb(248_248_250)] py-1 px-3 text-sm text-gray-700 rounded"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <hr className="border border-gray-200 my-6" />
                {/* Booking Area */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-end mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
                  <p className="text-[rgb(120_138_155)] text-sm text-center sm:text-right">
                    Book appointment for:
                  </p>

                  <input
                    type="date"
                    {...register("date", { required: "Date is required" })}
                    className="text-[rgb(120_138_155)] px-4 py-2 border border-gray-300 rounded text-sm"
                  />
                  {errors.date && (
                    <p className="text-red-500 text-sm">
                      {errors.date.message}
                    </p>
                  )}

                  <button className="text-sm font-medium text-sky-500 border-2 border-sky-500 px-4 py-2 hover:bg-sky-500 hover:text-white transition-colors duration-200 rounded">
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindDoctor;
