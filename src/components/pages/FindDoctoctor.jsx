import React from "react";
import { FaSearch } from "react-icons/fa";

const FindDoctor = () => {
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
    </div>
  );
};

export default FindDoctor;
