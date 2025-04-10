import React from "react";

const DoctorList = () => {
  return (
    <div>
      <div className="bg-[rgb(2,49,84)] py-10 flex justify-center items-center  ">
        <div className="">
          <div className="mt-6 w-[90%] md:w-[50%] mx-auto">
            <div className="flex items-center bg-white rounded-md overflow-hidden shadow-md">
              <div className="pl-4 text-gray-500">
                <FaSearch />
              </div>
              <input
                type="text"
                placeholder="Search doctors"
                className="flex-grow px-4 py-3 text-black outline-none border-none"
              />
              <button className="px-6 py-3 bg-[rgb(7,143,247)] text-white font-bold hover:bg-blue-600 active:bg-blue-800 transition duration-300">
                Search
              </button>
            </div>
          </div>
          <div>
            <select
              className="px-4 py-2 border border-gray-300 rounded"
              value={genderFilter}
              onChange={(e) => setGenderFilter(e.target.value)}
            >
              <option value="">All Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            <select
              className="px-4 py-2 border border-gray-300 rounded"
              value={specializationFilter}
              onChange={(e) => setSpecializationFilter(e.target.value)}
            >
              <option value="">All Specializations</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Dermatology">Dermatology</option>
              <option value="Neurology">Neurology</option>
              {/* তোমার JSON থেকে dynamic generate করলেও পারো */}
            </select>

            <select
              className="px-4 py-2 border border-gray-300 rounded"
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
            >
              <option value="">All Cities</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Chattogram">Chattogram</option>
              {/* অন্যান্য শহরের নাম JSON থেকে */}
            </select>

            <select
              className="px-4 py-2 border border-gray-300 rounded"
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
    </div>
  );
};

export default DoctorList;
