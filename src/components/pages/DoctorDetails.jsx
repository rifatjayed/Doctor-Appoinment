import React, { useState } from "react";
import { useParams } from "react-router";
import doctorProImg from "../../assets/img/dctrpro.jpg";
import { FaRegHospital, FaMapMarkerAlt, FaRegClock } from "react-icons/fa";

import doctorList from "../../Data/db2";

const DoctorDetails = () => {
  const [selected, setSelected] = useState("");
  const [appointment, setAppointment] = useState("");
  const [showModal, setShowModal] = useState(false);

  // new
  const [selectedLocationIndex, setSelectedLocationIndex] = useState(null);
  const [locationSelected, setLocationSelected] = useState(false);

  const [consultationSelected, setConsultationSelected] = useState(false);
  const [appointmentSelected, setAppointmentSelected] = useState(false);

  const handleLocationChange = (index) => {
    setSelectedLocationIndex(index);
    setLocationSelected(true);
  };

  const handleConsultationChange = (type) => {
    setConsultationSelected(true);
    setSelected(type);
  };

  const handleAppointmentChange = (type) => {
    setAppointmentSelected(true);
    setAppointment(type);
  };

  const isButtonDisabled =
    !locationSelected || !consultationSelected || !appointmentSelected;

  const handleConfirm = () => {
    if (
      selectedLocationIndex === null ||
      selected === "" ||
      appointment === ""
    ) {
      console.log("Please select all fields");
      return;
    }

    console.log("✅ User Selection:");
    console.log("Chamber:", doctor.chamber[selectedLocationIndex]);
    console.log("Consultation Type:", selected);
    console.log("Appointment Type:", appointment);
    setShowModal(true);
  };

  const { id } = useParams();
  console.log(id);
  const doctor = doctorList.find((doc) => doc.id === id);
  if (!doctor)
    return <p className="text-center text-red-600 mt-10">Doctor not found</p>;

  return (
    <div className="bg-[rgb(248_248_250)] py-10 px-4 sm:px-6 md:px-10 lg:px-[100px] xl:px-[100px]">
      <div className="flex flex-col sm:flex-row">
        <div className="bg-white w-full sm:w-2/3 shadow-[5px_5px_10px_0px_rgba(0,_0,_0,_0.1)] rounded-lg p-4 sm:p-6 md:p-8">
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

              <div className="flex flex-col sm:flex-row sm:space-x-10 mt-10">
                <div className="flex">
                  <FaRegHospital className="text-xl" />
                  <div className="ml-2">
                    <p>{doctor.chamber[0]?.name}</p>
                    <p>{doctor.chamber[0]?.address}</p>
                    <p>{doctor.chamber[0]?.contact}</p>
                  </div>
                </div>
                <div className="flex items-center mt-4 sm:mt-0">
                  <FaRegClock />
                  <div className="ml-2">
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
          </div>
          <hr className="border border-gray-200 my-4" />
          <div className="mt-5">
            <h2 className="text-[rgb(4_81_140/0.7)] text-sm font-bold">
              About
            </h2>

            <p className="text-gray-700 text-sm">{doctor.about}</p>
          </div>

          {/* Locations */}
          <div className="mt-8 bg-white rounded-lg p-4 sm:p-6 md:p-8 shadow-sm">
            <h3>Locations</h3>
            <div className="flex flex-col mt-5 mb-10 space-y-5">
              {doctor.chamber.map((cham, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                >
                  <div className="flex items-start gap-3">
                    <FaRegHospital className="text-2xl text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold text-lg">{cham.name}</p>
                      <p className="flex items-center text-gray-700">
                        <FaMapMarkerAlt className="mr-2 text-sm text-blue-600" />
                        {cham.address}
                      </p>
                      <p className="text-gray-600">📞 {cham.contact}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaRegClock className="text-lg text-green-600" />

                    <p>
                      {cham.availability}
                      {/* {doctor.availability || "Availability info not available"} */}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <h2 className="font-semibold text-gray-800 mb-2">
              Work Experience:
            </h2>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              {doctor.work_experience.map((exp, index) => (
                <li key={index}>
                  <span className="font-medium">{exp.title}</span> -{" "}
                  {exp.institution}
                </li>
              ))}
            </ul>
            <hr className="border border-gray-200 my-4" />
            <div>
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
        </div>

        {/* Right Panel for Location & Consultation Type */}

        <div className="w-full sm:w-1/3 bg-white rounded-lg ml-0 md:ml-8 sm:ml-4 mt-8 sm:mt-0 px-6 py-3">
          <h1 className="text-sm leading-5 text-gray-900 font-medium text-center">
            Select Location, Time Slot Consultation Method
          </h1>
          <hr className="border w-full border-gray-200 my-4" />
          <div>
            <p>Select a Location</p>
            {doctor.chamber.map((cham, index) => (
              <div
                key={index}
                className="bg-[#f8f8fa] rounded-xl my-2 p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
              >
                <div className="flex items-center gap-3">
                  {/* Radio Button */}
                  <input
                    type="radio"
                    name="chamber"
                    id={`chamber-${index}`}
                    className="text-blue-600"
                    onChange={() => handleLocationChange(index)}
                  />
                  <div>
                    <p className="font-semibold text-lg">{cham.name}</p>
                    <p className="flex items-center text-gray-700">
                      <FaMapMarkerAlt className="mr-2 text-sm text-blue-600" />
                      {cham.address}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <hr className="border w-full border-gray-200 my-4" />
          <div>
            <p>Select Consultation Type</p>
            <div className="mt-2">
              <button
                onClick={() => handleConsultationChange("   Face to Face")}
                className={`p-2 rounded-full border mr-2 ${
                  selected === "   Face to Face"
                    ? "bg-[rgb(212_237_255)] !text-[rgb(7_143_247)] border-[rgb(212_237_255)]"
                    : "bg-white text-gray-800 border-gray-200"
                }`}
              >
                Face to Face
              </button>

              <button
                onClick={() => handleConsultationChange(" Video/Audio call")}
                className={`p-2 rounded-full border ${
                  selected === " Video/Audio call"
                    ? "bg-[rgb(212_237_255)] !text-[rgb(7_143_247)] border-[rgb(212_237_255)]"
                    : "bg-white text-gray-800 border-gray-200"
                }`}
              >
                Video/Audio call
              </button>
            </div>
          </div>
          <hr className="border w-full border-gray-200 my-4" />
          <div>
            <p>Appointment Type</p>
            <div className="mt-2">
              <button
                onClick={() => handleAppointmentChange("  New Patient")}
                className={`p-2 rounded-full border mr-2 ${
                  appointment === "  New Patient"
                    ? "bg-[rgb(212_237_255)] !text-[rgb(7_143_247)] border-[rgb(212_237_255)]"
                    : "bg-white text-gray-800 border-gray-200"
                }`}
              >
                New Patient
              </button>

              <button
                onClick={() => handleAppointmentChange("Follow Up")}
                className={`p-2 rounded-full border ${
                  appointment === "Follow Up"
                    ? "bg-[rgb(212_237_255)] !text-[rgb(7_143_247)] border-[rgb(212_237_255)]"
                    : "bg-white text-gray-800 border-gray-200"
                }`}
              >
                Follow Up
              </button>
              <button
                onClick={() => handleAppointmentChange(" Report Show")}
                className={`p-2 rounded-full border ml-2 ${
                  appointment === " Report Show"
                    ? "bg-[rgb(212_237_255)] !text-[rgb(7_143_247)] border-[rgb(212_237_255)]"
                    : "bg-white text-gray-800 border-gray-200"
                }`}
              >
                Report Show
              </button>
            </div>
          </div>

          <button
            onClick={handleConfirm}
            className={`mt-5 w-full px-4 py-3 text-base font-medium text-white duration-300 
    ${
      isButtonDisabled
        ? "bg-[rgb(185_185_185)] cursor-not-allowed"
        : "bg-blue-600 hover:bg-blue-700"
    }`}
            disabled={isButtonDisabled}
          >
            Confirm
          </button>
        </div>

        {/* {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-[90%] max-w-md text-center shadow-lg">
              <h2 className="text-xl font-semibold text-green-600 mb-2">
                Your appointment is received.
              </h2>
              <p className="text-gray-700">Please wait for confirmation.</p>
              <button
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                onClick={() => setShowModal(false)}
              >
                OK
              </button>
            </div>
          </div>
        )} */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-[90%] max-w-md text-center shadow-lg">
              <svg
                className="w-12 h-12 text-green-500 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>

              <h2 className="text-xl font-semibold text-green-600 mb-2">
                Appointment Request Sent!
              </h2>
              <p className="text-gray-700 mb-4">
                Please wait for confirmation from the hospital.
              </p>

              <div className="text-sm text-left text-gray-600 mb-4">
                <p>
                  <strong>Doctor:</strong> {doctor.name}
                </p>
                <p>
                  <strong>Consultation:</strong> {selected}
                </p>
                <p>
                  <strong>Patient Type:</strong> {appointment}
                </p>
                {/* Add more details if you track chamber name */}
              </div>

              <p className="text-xs text-gray-500 mb-2">
                Need help? Call 📞 017XXXXXXX
              </p>

              <button
                onClick={() => setShowModal(false)}
                className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorDetails;
