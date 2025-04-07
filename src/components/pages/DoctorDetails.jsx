import React from "react";
import { useParams } from "react-router";
import doctorProImg from "../../assets/img/dctrpro.jpg";
import { FaRegHospital } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";

import doctorList from "../../Data/db2";

const DoctorDetails = () => {
  const { id } = useParams();
  console.log(id);
  const doctor = doctorList.find((doc) => doc.id === id);
  if (!doctor)
    return <p className="text-center text-red-600 mt-10">Doctor not found</p>;

  return (
    <div className="bg-[rgb(248_248_250)] py-10 px-4 sm:px-6 md:px-10 lg:px-[100px] xl:px-[150px]">
      <div className="bg-white shadow-[5px_5px_10px_0px_rgba(0,_0,_0,_0.1)] rounded-lg p-4 sm:p-6 md:p-8">
        {/* Doctor Basic Info */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <img
            className="w-[100px] h-[100px] object-cover rounded"
            src={doctorProImg}
            alt={doctor.name}
          />

          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600">
              {doctor.name}
            </h3>
            <h4 className="text-sm text-gray-600">
              {doctor.degrees.join(", ")}
            </h4>
            <h4 className="text-sm text-gray-600">{doctor.specialization}</h4>
            <h4 className="text-sm text-gray-600">
              {`${doctor.experience_years} Years of Experience Overall`}
            </h4>
            <h4 className="text-sm text-gray-600">
              BMDC Reg: <span>{doctor.bmdc_registration}</span>
            </h4>

            <div className="flex  mt-10">
              <div className=" flex">
                <FaRegHospital className="text-xl" />

                <div className="ml-2">
                  <p>{doctor.chamber.name}</p>
                  <p> {doctor.chamber.address}</p>
                  <p> {doctor.chamber.contact}</p>
                </div>
              </div>
              <div className="flex ml-10">
                <FaRegClock />
                <div>
                  <p>Availability</p>
                  <p>{doctor.availability}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mt-8">
          <p className="mb-2 font-medium text-gray-700">Services For:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
            {doctor.services.map((service, index) => (
              <span
                key={index}
                className="bg-[rgb(248_248_250)] py-1 px-3 text-sm text-gray-700 rounded"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Work Experience */}
      <div className="mt-8 bg-white rounded-lg p-4 sm:p-6 md:p-8 shadow-sm">
        <h2 className="font-semibold text-gray-800 mb-2">Work Experience:</h2>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
          {doctor.work_experience.map((exp, index) => (
            <li key={index}>
              <span className="font-medium">{exp.title}</span> -{" "}
              {exp.institution}
            </li>
          ))}
        </ul>
      </div>

      {/* Education */}
      <div className="mt-8 bg-white rounded-lg p-4 sm:p-6 md:p-8 shadow-sm">
        <h2 className="font-semibold text-gray-800 mb-2">Education:</h2>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
          {doctor.education.map((edu, index) => (
            <li key={index}>
              <span className="font-medium">{edu}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DoctorDetails;
