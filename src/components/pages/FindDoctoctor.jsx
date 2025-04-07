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

      <div className="mx-[150px]">
        <h3>
          Book appointments with minimum wait-time & Video consult with verified
          doctors
        </h3>

        <div className="">
          {doctorList.map((doctor) => {
            return (
              <div>
                <div className="p-10 shadow-[5px_5px_10px_0px_rgba(0,_0,_0,_0.1)]">
                  <div className="flex">
                    <div className="">
                      <img
                        className="w-[100px]"
                        src={doctorProImg}
                        alt=""
                        srcset=""
                      />
                    </div>
                    <div className="ml-4">
                      <h1>{doctor.name}</h1>
                      <h3>{doctor.degrees}</h3>
                      <h3>{doctor.specialization}</h3>
                      <h3>{`${doctor.experience_years} Years of Experience Overall`}</h3>
                    </div>
                  </div>

                  <p className="grid auto-cols-max grid-flow-col mt-10">
                    {doctor.services}
                  </p>
                  <div className="flex justify-end">
                    <p className="mr-4">Book appointment for:</p>
                    {/* Date */}
                    <h6 className="text-sm font-bold lg:text-base block  mb-1 ">
                      Date
                    </h6>
                    <input
                      type="date"
                      {...register("date", { required: "Date is required" })}
                      className="w-[130px] border border-gray-300 rounded"
                    />
                    {errors.date && (
                      <p className="text-red-500">{errors.date.message}</p>
                    )}
                    <button className="text-sky-500 border-2 border-sky-500 ml-4 px-5 py-3">
                      Book Appointment
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FindDoctor;
