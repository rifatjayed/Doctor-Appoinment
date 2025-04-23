import React, { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";

// import doctors from "../../../Data/db2";
// import doctorProImg from "../../assets/img/dctrpro.jpg";

import doctorProImg from "../../../assets/img/dctrpro.jpg";

import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { DoctorContext } from "../../../Context/DoctorProvider";

const FindDoctor = () => {
  const {
    doctors,
    updateFilter,
    filters,
    setFilters,
    uniqueConsultationTypes,
    uniqueCities,
    uniqueSpecializations,
  } = useContext(DoctorContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // const onSubmit = (data) => console.log(data);

  // console.log(watch("example"));

  const [searchTerm, setSearchTerm] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [specializationFilter, setSpecializationFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [consultationType, setConsultationType] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const doctorsPerPage = 6;

  // const specializations = [
  //   ...new Set(
  //     doctors
  //       .map((doc) => doc.specialization)
  //       .filter((spec) => spec && spec.trim() !== "")
  //   ),
  // ];

  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = doctors.slice(indexOfFirstDoctor, indexOfLastDoctor);
  const totalPages = Math.ceil(doctors.length / doctorsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Optional: Auto scroll to top
  };

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
              className="flex-1 min-w-[140px] px-4 py-2 rounded border border-gray-300  text-white"
              onChange={(e) => updateFilter("gender", e.target.value)}
            >
              <option value="" className="">
                All Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            {/* <select
              className="flex-1 min-w-[140px] px-4 py-2 rounded border border-gray-300 text-white"
              value={filters.specialization}
              onChange={(e) => updateFilter("specialization", e.target.value)}
            >
              <option value="">All Specializations</option>
              {specializations.map((spec) => (
                <option key={spec} value={spec}>
                  {spec}
                </option>
              ))}
            </select> */}
            <select
              value={filters.specialization}
              onChange={(e) =>
                setFilters({ ...filters, specialization: e.target.value })
              }
              className="p-2 border rounded"
            >
              <option value="">All Specializations</option>
              {uniqueSpecializations.map((specialization) => (
                <option key={specialization} value={specialization}>
                  {specialization}
                </option>
              ))}
            </select>

            <select
              name="city"
              value={filters.city}
              onChange={(e) => updateFilter("city", e.target.value)}
              className="border rounded px-2 py-1 text-white"
            >
              <option value="">All Cities</option>
              {uniqueCities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>

            <select
              className="flex-1 min-w-[140px] px-4 py-2 rounded border border-gray-300 text-white"
              value={filters.consultationType}
              onChange={(e) => updateFilter("consultationType", e.target.value)}
            >
              <option value="">All Consultation Types</option>
              {uniqueConsultationTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          {/* <div>
            <div className="filters">
              <select onChange={(e) => updateFilter("gender", e.target.value)}>
                <option value="">All Genders</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

              <input
                type="text"
                placeholder="Specialization"
                onChange={(e) => updateFilter("specialization", e.target.value)}
              />

              <input
                type="text"
                placeholder="City"
                onChange={(e) => updateFilter("city", e.target.value)}
              />

              <select
                onChange={(e) =>
                  updateFilter("consultationType", e.target.value)
                }
              >
                <option value="">All Types</option>
                <option value="face to face">Face to Face</option>
                <option value="video call">Video Call</option>
              </select>
            </div>

            <div className="doctor-list">
              {doctors.map((doc) => (
                <div key={doc.id}>
                  <h2>{doc.name}</h2>
                  <p>
                    {doc.specialization} - {doc.gender}
                  </p>
                  <p>City: {doc.location}</p>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>

      <div className="px-4 sm:px-6 md:px-10 lg:px-[100px] xl:px-[150px] bg-[rgb(248_248_250)]">
        <h3 className="py-5  font-medium text-gray-800">
          Book appointments with minimum wait-time & Video consult with verified
          doctors
        </h3>

        {/* <div className="space-y-6">
          {doctors.map((doctor) => (
            <div key={doctor.id}>
              <div className="p-4 sm:p-6 md:p-8 lg:p-10 bg-white shadow-[5px_5px_10px_0px_rgba(0,_0,_0,_0.1)] rounded-lg">
                <div className="flex flex-col sm:flex-row">

                  <div className="flex-shrink-0 flex justify-center sm:block mb-4 sm:mb-0">
                    <img
                      className="w-[80px] sm:w-[100px] h-auto object-cover rounded"
                      src={doctorProImg}
                      alt={doctor.name}
                    />
                  </div>

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

                  <Link to={`/doctor/${doctor.id}`}>
                    <button className="text-sm font-medium text-sky-500 border-2 border-sky-500 px-4 py-2 hover:bg-sky-500 hover:text-white transition-colors duration-200 rounded">
                      Book Appointment
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div> */}

        {/*
 new vhabeee */}
        <div className="space-y-6">
          {doctors.map((doctor) => (
            <div key={doctor.id}>
              <div className="p-4 sm:p-6 md:p-8 lg:p-10 bg-white shadow-[5px_5px_10px_0px_rgba(0,_0,_0,_0.1)] rounded-lg">
                <div className="flex flex-col sm:flex-row">
                  <div className="flex-shrink-0 flex justify-center sm:block mb-4 sm:mb-0">
                    <img
                      className="w-[80px] sm:w-[100px] h-auto object-cover rounded"
                      src={doctorProImg}
                      alt={doctor.name}
                    />
                  </div>
                  <div className="sm:ml-6 text-center sm:text-left">
                    <Link
                      to={`/doctor/${doctor._id}`}
                      className=" text-lg font-semibold text-gray-800 hover:text-blue-600"
                    >
                      {doctor.name}
                    </Link>
                    <h3 className="text-sm text-gray-600">
                      {doctor.degree.join(", ")}
                    </h3>
                    <h3 className="text-sm text-gray-600">
                      {doctor.specialization}
                    </h3>
                    <h3 className="text-sm text-gray-600">
                      {`${doctor.experience_years} Years of Experience Overall`}
                    </h3>
                  </div>
                </div>

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

                <div className="flex flex-col sm:flex-row sm:items-center justify-end mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
                  <p className="text-[rgb(120_138_155)] text-sm text-center sm:text-right">
                    Book appointment for:
                  </p>

                  <input
                    type="date"
                    className="text-[rgb(120_138_155)] px-4 py-2 border border-gray-300 rounded text-sm"
                  />

                  <Link to={`/doctor/${doctor.id}`}>
                    <button className="text-sm font-medium text-sky-500 border-2 border-sky-500 px-4 py-2 hover:bg-sky-500 hover:text-white transition-colors duration-200 rounded">
                      Book Appointment
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* Pagination */}
          {/* <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 rounded border ${
                  currentPage === index + 1
                    ? "bg-sky-500 text-white border-sky-500"
                    : "text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div> */}

          <div className="flex justify-center items-center my-8 space-x-2">
            {/* Previous Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded border ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              Previous
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 rounded border ${
                  currentPage === index + 1
                    ? "bg-sky-500 text-white border-sky-500"
                    : "text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {index + 1}
              </button>
            ))}

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded border ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindDoctor;
