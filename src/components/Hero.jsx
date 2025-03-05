import React from "react";
import HeroImg from "../assets/img/doctor2.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="bg-[#0B8FAC] h-[100%]">
      <div className="hero h-[100%]">
        <div className="hero-content flex-col lg:flex-row-reverse h-[100%] p-0">
          <div className="w-1/2 flex items-end h-[100%]">
            <img src={HeroImg} class="w-full " />
          </div>

          <div className="w-1/2  text-white ">
            <h1 className="text-5xl font-semibold">
              Book Appointment With Trusted Doctors
            </h1>
            <p
              className="py-6 text-lg font-normal
    "
            >
              Simply browse through our extensive list of trusted doctors,
              schedule your appointment hassle-free.
            </p>
            <button className="btn w-[240px] h-[60px] top-[590px] left-[286px] rounded-[47px] text-lg font-normal ">
              Book Appoinmnet
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
