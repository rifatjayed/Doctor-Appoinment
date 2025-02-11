import React from "react";
import HeroImg from "../assets/img/doctor.png";
import Hero1 from "../assets/img/hero2-removebg-preview.png";

const Hero = () => {
  return (
    <div className="bg-[#5F6FFF]">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-1/2">
            <img src={HeroImg} class="w-full " />
          </div>

          <div className="w-1/2">
            <h1 className="text-5xl font-bold">
              Book Appointment With Trusted Doctors
            </h1>
            <p className="py-6">
              Simply browse through our extensive list of trusted doctors,
              schedule your appointment hassle-free.
            </p>
            <button className="btn btn-primary">Book Appoinmnet</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
