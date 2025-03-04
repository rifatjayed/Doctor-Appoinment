import React from "react";
import bgImg from "../../assets/img/ambulancebg.webp";
import { HiMiniChevronRight } from "react-icons/hi2";

const FindAmbulance = () => {
  return (
    <div>
      <div
        className="h-96 w-full bg-cover bg-center"
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
      </div>
    </div>
  );
};

export default FindAmbulance;
