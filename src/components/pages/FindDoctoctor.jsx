import React from "react";
import { FaSearch } from "react-icons/fa";

import doctorList from "../../Data/db2";
import doctorProImg from "../../assets/img/dctrpro.jpg";

import { useForm } from "react-hook-form";

const FindDoctor = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));
  return (
    <div>
      {/* <div className="bg-[rgb(2,49,84)] py-10 flex  justify-center">
        <div className=" mt-6 flex items-center bg-white  overflow-hidden w-[90%] md:w-[50%]">
          <FaSearch />
          <input
            type="text"
            placeholder="Search doctors"
            className="w-full px-4 py-3 text-black border-none outline-none"
          />
        </div>

        <button className="rounded  text-base font-bold capitalize duration-300 bg-[rgb(7,143,247)] text-white hover:bg-secondaryColor-tint-100 active:bg-secondaryColor-shade-200 px-4  ">
          Search
        </button>
      </div> */}
      {/* <div className="bg-[rgb(2,49,84)] py-10 flex justify-center">
        <div className="mt-6 flex items-center bg-white overflow-hidden w-[90%] md:w-[50%] rounded-md">
          <FaSearch className="text-gray-500 ml-3" />
          <input
            type="text"
            placeholder="Search doctors"
            className="w-full px-4 py-3 text-black border-none outline-none"
          />
        </div>

        <button className="ml-2 px-10 py-0  rounded-md text-base font-bold capitalize duration-300 bg-[rgb(7,143,247)] text-white hover:bg-blue-600 active:bg-blue-800">
          Search
        </button>
      </div> */}
      {/* <div className="bg-[rgb(2,49,84)] py-10 flex justify-center items-center">
        <div className="mt-6 flex items-center bg-white overflow-hidden w-[90%] md:w-[50%] rounded-md">
          <FaSearch className="text-gray-500 ml-3" />
          <input
            type="text"
            placeholder="Search doctors"
            className="w-full px-4 py-3 text-black border-none outline-none"
          />
          <button className="ml-2 px-6 h-[48px] flex items-center justify-center rounded-md text-base font-bold capitalize duration-300 bg-[rgb(7,143,247)] text-white hover:bg-blue-600 active:bg-blue-800">
            Search
          </button>
        </div>
      </div> */}
      <div className="bg-[rgb(2,49,84)] py-10 flex justify-center items-center ">
        <div className="mt-6 flex items-center bg-white overflow-hidden w-[90%] md:w-[50%] rounded-md flex-row">
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
                    <h1 className="text-lg font-semibold text-gray-800">
                      {doctor.name}
                    </h1>
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
                <p className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mt-10">
                  {doctor.services.map((service, index) => (
                    <span
                      className="bg-[rgb(248_248_250)] py-1 px-3 text-sm text-gray-700 rounded"
                      key={index}
                    >
                      {service}
                    </span>
                  ))}
                </p>

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
