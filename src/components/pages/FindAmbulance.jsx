import React from "react";
import bgImg from "../../assets/img/ambulancebg.webp";
import { HiMiniChevronRight } from "react-icons/hi2";
import ambulance1 from "../../assets/img/ac-ambulance.webp";
import acls1 from "../../assets/img/acls-ambulance-service (1).webp";
import acls2 from "../../assets/img/acls-ambulance-service.webp";
import airAmbulance1 from "../../assets/img/air-ambulance (1).webp";
import airAmbulance from "../../assets/img/air-ambulance.webp";
import freezingAmbulance from "../../assets/img/freezing-ambulance (1).webp";
import freezingAmbulance1 from "../../assets/img/freezing-ambulance.webp";
import { RiCheckDoubleLine } from "react-icons/ri";

const FindAmbulance = () => {
  return (
    <div className=" mx-[40px] md:mx-[80px]">
      {/* <div
        className="  px-[50px] bg-cover bg-center "
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <h1 className="mb-2 text-1xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-4xl lg:4xl font-bold text-white sm:w-3/4 md:w-3/5">
          Ambulance Service
        </h1>
        <h3 className="mb-2 text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-6xl lg:6xl font-bold text-white sm:w-3/4 md:w-3/5">
          Rent a<span className="text-[#71BFFB]"> Prompt</span>{" "}
          <span className="text-[#62E2EA]"> High quality </span>{" "}
          <span className="text-[#FFC845]"> Emergency </span>ambulance at your
          need
        </h3>
        <h6 className="text-sm font-bold lg:text-base block text-white">
          *(Customizable Attendant Doctor & Nurse)
        </h6>

        <div className="flex mt-4">
          <HiMiniChevronRight />
          <h6 className="mb-6 text-xs font-medium leading-5 lg:text-sm  block text-white">
            Best Price, Quality Service, On-Time Gurantee
          </h6>
        </div>
        <div className="flex">
          <HiMiniChevronRight />
          <h6 className="mb-6 text-xs font-medium leading-5 lg:text-sm  block text-white">
            Trusted, Certified & Skilled Driver
          </h6>
        </div>
        <div className="flex">
          <HiMiniChevronRight />
          <h6 className="mb-6 text-xs font-medium leading-5 lg:text-sm  block text-white">
            Hotline: 01405 600 700
          </h6>
        </div>
      </div> */}

      <div
        className="px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 py-10 bg-cover bg-center text-white"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        {/* Title */}
        <h1 className="mb-2 text-lg sm:text-2xl md:text-3xl xl:text-4xl font-bold sm:w-3/4 md:w-3/5">
          Ambulance Service
        </h1>

        {/* Main Headline */}
        <h3 className="mb-2 text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold sm:w-3/4 md:w-3/5">
          Rent a<span className="text-[#71BFFB]"> Prompt</span>{" "}
          <span className="text-[#62E2EA]"> High quality </span>{" "}
          <span className="text-[#FFC845]"> Emergency </span>ambulance at your
          need
        </h3>

        {/* Subtitle */}
        <h6 className="text-sm font-bold lg:text-base block">
          *(Customizable Attendant Doctor & Nurse)
        </h6>

        {/* Feature List */}
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2">
            <HiMiniChevronRight className="text-xl" />
            <h6 className="text-xs sm:text-sm font-medium">
              Best Price, Quality Service, On-Time Guarantee
            </h6>
          </div>

          <div className="flex items-center gap-2">
            <HiMiniChevronRight className="text-xl" />
            <h6 className="text-xs sm:text-sm font-medium">
              Trusted, Certified & Skilled Driver
            </h6>
          </div>

          <div className="flex items-center gap-2">
            <HiMiniChevronRight className="text-xl" />
            <h6 className="text-xs sm:text-sm font-medium">
              Hotline:{" "}
              <span className="font-bold text-[#FFC845]">01405 600 700</span>
            </h6>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row ">
        <div className="w-full md:w-2/3">
          <div className="mt-10 px-4 md:px-6 lg:px-8">
            <h1 className="text-base lg:text-lg font-bold text-[rgb(2,49,84)] bg-[rgb(219,239,254)] block py-3 px-4 mb-4 text-center">
              AC Ambulance Service
            </h1>

            {/* Image Section */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src={ambulance1}
                alt="Ambulance"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
              <img
                src={ambulance1}
                alt="Ambulance"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>

            {/* Description */}
            <p className="text-[rgb(57,67,77)] mt-4 text-justify leading-relaxed text-sm md:text-base">
              AC ambulances are also called Basic Life Support Ambulance, which
              are primarily used for transporting patients who are medically
              stable and do not require constant monitoring. AC Ambulances are
              equipped with general equipment like oxygen, stethoscope, and
              equipment to check the blood pressure, etc. This ambulance is best
              for transfer of patients in nearby areas. Basic Ambulance is very
              much used for transferring patients especially to outstation, like
              from one district to another in Bangladesh. We are one of the most
              reputed and committed AC Ambulance providers in Dhaka. We take
              this opportunity to introduce ourselves as one of the quickest AC
              Ambulance providers.
            </p>

            {/* Features List */}
            <div className="mt-5 space-y-3">
              <p className="text-black flex items-center text-sm md:text-base">
                <span className="mr-2 text-[rgba(59,130,246,0.8)] text-2xl">
                  <RiCheckDoubleLine />
                </span>
                Get ambulance within 30 minutes*
              </p>
              <p className="text-black flex items-center text-sm md:text-base">
                <span className="mr-2 text-[rgba(59,130,246,0.8)] text-2xl">
                  <RiCheckDoubleLine />
                </span>
                24/7 affordable quality service
              </p>
              <p className="text-black flex items-center text-sm md:text-base">
                <span className="mr-2 text-[rgba(59,130,246,0.8)] text-2xl">
                  <RiCheckDoubleLine />
                </span>
                We are just a call away:{" "}
                <span className="font-semibold text-blue-600 ml-1">
                  01405600700
                </span>
              </p>
            </div>
          </div>

          <div className="mt-10 px-4 md:px-6 lg:px-8">
            <h1 className="text-base lg:text-lg font-bold text-[rgb(2,49,84)] bg-[rgb(219,239,254)] block py-3 px-4 mb-4 text-center">
              ACLS Ambulance Service Service
            </h1>

            {/* Image Section */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src={acls1}
                alt="Ambulance"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
              <img
                src={acls2}
                alt="Ambulance"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>

            {/* Description */}
            <p className="text-[rgb(57,67,77)] mt-4 text-justify leading-relaxed text-sm md:text-base">
              AC ambulances are also called Basic Life Support Ambulance, which
              are primarily used for transporting patients who are medically
              stable and do not require constant monitoring. AC Ambulances are
              equipped with general equipment like oxygen, stethoscope, and
              equipment to check the blood pressure, etc. This ambulance is best
              for transfer of patients in nearby areas. Basic Ambulance is very
              much used for transferring patients especially to outstation, like
              from one district to another in Bangladesh. We are one of the most
              reputed and committed AC Ambulance providers in Dhaka. We take
              this opportunity to introduce ourselves as one of the quickest AC
              Ambulance providers.
            </p>

            {/* Features List */}
            <div className="mt-5 space-y-3">
              <p className="text-black flex items-center text-sm md:text-base">
                <span className="mr-2 text-[rgba(59,130,246,0.8)] text-2xl">
                  <RiCheckDoubleLine />
                </span>
                Get ambulance within 30 minutes*
              </p>
              <p className="text-black flex items-center text-sm md:text-base">
                <span className="mr-2 text-[rgba(59,130,246,0.8)] text-2xl">
                  <RiCheckDoubleLine />
                </span>
                24/7 affordable quality service
              </p>
              <p className="text-black flex items-center text-sm md:text-base">
                <span className="mr-2 text-[rgba(59,130,246,0.8)] text-2xl">
                  <RiCheckDoubleLine />
                </span>
                We are just a call away:{" "}
                <span className="font-semibold text-blue-600 ml-1">
                  01405600700
                </span>
              </p>
            </div>
          </div>
          <div className="mt-10 px-4 md:px-6 lg:px-8">
            <h1 className="text-base lg:text-lg font-bold text-[rgb(2,49,84)] bg-[rgb(219,239,254)] block py-3 px-4 mb-4 text-center">
              AIR Ambulance Service
            </h1>

            {/* Image Section */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src={airAmbulance}
                alt="Ambulance"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
              <img
                src={airAmbulance1}
                alt="Ambulance"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>

            {/* Description */}
            <p className="text-[rgb(57,67,77)] mt-4 text-justify leading-relaxed text-sm md:text-base">
              AC ambulances are also called Basic Life Support Ambulance, which
              are primarily used for transporting patients who are medically
              stable and do not require constant monitoring. AC Ambulances are
              equipped with general equipment like oxygen, stethoscope, and
              equipment to check the blood pressure, etc. This ambulance is best
              for transfer of patients in nearby areas. Basic Ambulance is very
              much used for transferring patients especially to outstation, like
              from one district to another in Bangladesh. We are one of the most
              reputed and committed AC Ambulance providers in Dhaka. We take
              this opportunity to introduce ourselves as one of the quickest AC
              Ambulance providers.
            </p>

            {/* Features List */}
            <div className="mt-5 space-y-3">
              <p className="text-black flex items-center text-sm md:text-base">
                <span className="mr-2 text-[rgba(59,130,246,0.8)] text-2xl">
                  <RiCheckDoubleLine />
                </span>
                Get ambulance within 30 minutes*
              </p>
              <p className="text-black flex items-center text-sm md:text-base">
                <span className="mr-2 text-[rgba(59,130,246,0.8)] text-2xl">
                  <RiCheckDoubleLine />
                </span>
                24/7 affordable quality service
              </p>
              <p className="text-black flex items-center text-sm md:text-base">
                <span className="mr-2 text-[rgba(59,130,246,0.8)] text-2xl">
                  <RiCheckDoubleLine />
                </span>
                We are just a call away:{" "}
                <span className="font-semibold text-blue-600 ml-1">
                  01405600700
                </span>
              </p>
            </div>
          </div>
          <div className="mt-10 px-4 md:px-6 lg:px-8">
            <h1 className="text-base lg:text-lg font-bold text-[rgb(2,49,84)] bg-[rgb(219,239,254)] block py-3 px-4 mb-4 text-center">
              Freezing Ambulance Service
            </h1>

            {/* Image Section */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src={freezingAmbulance}
                alt="Ambulance"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
              <img
                src={freezingAmbulance1}
                alt="Ambulance"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>

            {/* Description */}
            <p className="text-[rgb(57,67,77)] mt-4 text-justify leading-relaxed text-sm md:text-base">
              AC ambulances are also called Basic Life Support Ambulance, which
              are primarily used for transporting patients who are medically
              stable and do not require constant monitoring. AC Ambulances are
              equipped with general equipment like oxygen, stethoscope, and
              equipment to check the blood pressure, etc. This ambulance is best
              for transfer of patients in nearby areas. Basic Ambulance is very
              much used for transferring patients especially to outstation, like
              from one district to another in Bangladesh. We are one of the most
              reputed and committed AC Ambulance providers in Dhaka. We take
              this opportunity to introduce ourselves as one of the quickest AC
              Ambulance providers.
            </p>

            {/* Features List */}
            <div className="mt-5 space-y-3">
              <p className="text-black flex items-center text-sm md:text-base">
                <span className="mr-2 text-[rgba(59,130,246,0.8)] text-2xl">
                  <RiCheckDoubleLine />
                </span>
                Get ambulance within 30 minutes*
              </p>
              <p className="text-black flex items-center text-sm md:text-base">
                <span className="mr-2 text-[rgba(59,130,246,0.8)] text-2xl">
                  <RiCheckDoubleLine />
                </span>
                24/7 affordable quality service
              </p>
              <p className="text-black flex items-center text-sm md:text-base">
                <span className="mr-2 text-[rgba(59,130,246,0.8)] text-2xl">
                  <RiCheckDoubleLine />
                </span>
                We are just a call away:{" "}
                <span className="font-semibold text-blue-600 ml-1">
                  01405600700
                </span>
              </p>
            </div>
          </div>
          {/* <div className="mt-10">
            <h1 className=" text-base text-[rgb(2,49,84)] bg-[rgb(219,239,254)] font-bold lg:text-lg block   py-3 px-4 mb-4">
              ACLS Ambulance Service Service
            </h1>
            <div className="flex justify-between">
              <img src={acls1} alt="" srcset="" className="" />
              <img src={acls2} alt="" />
            </div>
            <p className="text-[rgb(57,67,77)] mt-2">
              AC ambulances are also called Basic Life Support Ambulance, which
              are primarily used for transporting patients who are medically
              stable and do not require constant monitoring. AC Ambulances
              equipped with general equipment like oxygen, stethoscope, and
              equipment to check the blood pressure, etc. This ambulance is best
              for transfer of patients in nearby areas. Basic Ambulance is very
              much used for transferring patients especially to outstation, like
              from one district to another in Bangladesh. We are one of the most
              reputed and committed AC Ambulance providers in Dhaka. We take
              this opportunity to introduce ourselves as one of the quickest AC
              Ambulance providers.
            </p>
            <div className="mt-5">
              <p className=" text-black-tint-200 flex items-center">
                <span className="mr-2 text-[rgba(59,130,246,0.5)] text-2xl">
                  <RiCheckDoubleLine />
                </span>
                Get ambulance within 30 minutes*
              </p>
              <p className=" text-black-tint-200 flex items-center">
                <span className="mr-2 text-[rgba(59,130,246,0.5)] text-2xl">
                  <RiCheckDoubleLine />
                </span>
                24/7 affordable quality service
              </p>
              <p className=" text-black-tint-200 flex items-center">
                <span className="mr-2 text-[rgba(59,130,246,0.5)] text-2xl">
                  <RiCheckDoubleLine />
                </span>
                We are just a call away: 01405600700
              </p>
            </div>
          </div>
          <div className="mt-10">
            <h1 className=" text-base text-[rgb(2,49,84)] bg-[rgb(219,239,254)] font-bold lg:text-lg block   py-3 px-4 mb-4">
              AIR Ambulance Service
            </h1>
            <div className="flex justify-between">
              <img src={airAmbulance} alt="" srcset="" className="" />
              <img src={airAmbulance1} alt="" />
            </div>
            <p className="text-[rgb(57,67,77)] mt-2">
              AC ambulances are also called Basic Life Support Ambulance, which
              are primarily used for transporting patients who are medically
              stable and do not require constant monitoring. AC Ambulances
              equipped with general equipment like oxygen, stethoscope, and
              equipment to check the blood pressure, etc. This ambulance is best
              for transfer of patients in nearby areas. Basic Ambulance is very
              much used for transferring patients especially to outstation, like
              from one district to another in Bangladesh. We are one of the most
              reputed and committed AC Ambulance providers in Dhaka. We take
              this opportunity to introduce ourselves as one of the quickest AC
              Ambulance providers.
            </p>
            <div className="mt-5">
              <p className=" text-black-tint-200 flex items-center">
                <span className="mr-2 text-[rgba(59,130,246,0.5)] text-2xl">
                  <RiCheckDoubleLine />
                </span>
                Get ambulance within 30 minutes*
              </p>
              <p className=" text-black-tint-200 flex items-center">
                <span className="mr-2 text-[rgba(59,130,246,0.5)] text-2xl">
                  <RiCheckDoubleLine />
                </span>
                24/7 affordable quality service
              </p>
              <p className=" text-black-tint-200 flex items-center">
                <span className="mr-2 text-[rgba(59,130,246,0.5)] text-2xl">
                  <RiCheckDoubleLine />
                </span>
                We are just a call away: 01405600700
              </p>
            </div>
          </div>
          <div className="mt-10">
            <h1 className=" text-base text-[rgb(2,49,84)] bg-[rgb(219,239,254)] font-bold lg:text-lg block   py-3 px-4 mb-4">
              Freezing Ambulance Service
            </h1>
            <div className="flex justify-between">
              <img src={freezingAmbulance} alt="" srcset="" className="" />
              <img src={freezingAmbulance1} alt="" />
            </div>
            <p className="text-[rgb(57,67,77)] mt-2">
              AC ambulances are also called Basic Life Support Ambulance, which
              are primarily used for transporting patients who are medically
              stable and do not require constant monitoring. AC Ambulances
              equipped with general equipment like oxygen, stethoscope, and
              equipment to check the blood pressure, etc. This ambulance is best
              for transfer of patients in nearby areas. Basic Ambulance is very
              much used for transferring patients especially to outstation, like
              from one district to another in Bangladesh. We are one of the most
              reputed and committed AC Ambulance providers in Dhaka. We take
              this opportunity to introduce ourselves as one of the quickest AC
              Ambulance providers.
            </p>
            <div className="mt-5">
              <p className=" text-black-tint-200 flex items-center">
                <span className="mr-2 text-[rgba(59,130,246,0.5)] text-2xl">
                  <RiCheckDoubleLine />
                </span>
                Get ambulance within 30 minutes*
              </p>
              <p className=" text-black-tint-200 flex items-center">
                <span className="mr-2 text-[rgba(59,130,246,0.5)] text-2xl">
                  <RiCheckDoubleLine />
                </span>
                24/7 affordable quality service
              </p>
              <p className=" text-black-tint-200 flex items-center">
                <span className="mr-2 text-[rgba(59,130,246,0.5)] text-2xl">
                  <RiCheckDoubleLine />
                </span>
                We are just a call away: 01405600700
              </p>
            </div>
          </div> */}
        </div>
        <div className="w-1/3"></div>
      </div>
    </div>
  );
};

export default FindAmbulance;
