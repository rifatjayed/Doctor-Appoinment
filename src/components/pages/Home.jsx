import React from "react";
import Navbar from "../Navbar";
import gynologist from "../../assets/img/gynecologist-obstetrician.webp";
import medicine from "../../assets/img/medicine-specialist.webp";
import cardologist from "../../assets/img/cardiologist.webp";
import Pediatrician from "../../assets/img/pediatrician.webp";
import genarel from "../../assets/img/general-surgeon.webp";
import Otolaryngologist from "../../assets/img/otolaryngologists-ent.webp";

import doctorList from "../../Data/db";
import Navbar2 from "../Navbar2";
import Hero2 from "../Hero2";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className=" ">
      <div className=" min-h-screen flex flex-col">
        {/* <Navbar2></Navbar2> */}
        <Navbar></Navbar>
        {/* <div className="h-[calc(100vh-80px)]">
          <Hero></Hero>
        </div> */}

        <div className="">
          <Hero2></Hero2>
        </div>
      </div>

      {/* Find by Speciality  section */}

      <section className="px-[100px] mb-[100px]">
        <h1 className="text-md text-xl sm:text-2xl font-bold lg:text-4xl mb-2 block text-black mt-10">
          Consult our top specialized doctors
        </h1>
        <p className="font-medium text-black-tint-400">
          Our doctors are ready to serve you 24/7
        </p>
        <div className="grid grid-cols-6 gap-4 mt-14">
          <div className="text-center">
            <img className="mx-auto" src={gynologist} alt="" />
            <h3 className="mb-2 text-lg font-bold text-primaryColor-shade-200">
              Gynecologist & Obstetrician
            </h3>
            <Link>
              <p className="inline-block rounded px-6 py-2 text-[#078ff7] hover:bg-[#DBEFFE]">
                Consult Now
              </p>
            </Link>
          </div>

          <div className="text-center">
            <img className="mx-auto" src={medicine} alt="" />
            <h3 className="mb-2 text-lg font-bold text-primaryColor-shade-200">
              Medicine Specialist
            </h3>
            <Link>
              <p className="inline-block rounded px-6 py-2 text-[#078ff7] hover:bg-[#DBEFFE]">
                Consult Now
              </p>
            </Link>
          </div>
          <div className="text-center">
            <img className="mx-auto" src={cardologist} alt="" />
            <h3 className="mb-2 text-lg font-bold text-primaryColor-shade-200">
              Cardiologist
            </h3>
            <Link>
              <p className="inline-block rounded px-6 py-2 text-[#078ff7] hover:bg-[#DBEFFE]">
                Consult Now
              </p>
            </Link>
          </div>
          <div className="text-center">
            <img className="mx-auto" src={Pediatrician} alt="" />
            <h3 className="mb-2 text-lg font-bold text-primaryColor-shade-200">
              Pediatrician
            </h3>
            <Link>
              <p className="inline-block rounded px-6 py-2 text-[#078ff7] hover:bg-[#DBEFFE]">
                Consult Now
              </p>
            </Link>
          </div>
          <div className="text-center">
            <img className="mx-auto" src={genarel} alt="" />
            <h3 className="mb-2 text-lg font-bold text-primaryColor-shade-200">
              General Surgeon
            </h3>
            <Link>
              <p className="inline-block rounded px-6 py-2 text-[#078ff7] hover:bg-[#DBEFFE]">
                Consult Now
              </p>
            </Link>
          </div>
          <div className="text-center">
            <img className="mx-auto" src={Otolaryngologist} alt="" />
            <h3 className="mb-2 text-lg font-bold text-primaryColor-shade-200">
              Otolaryngologists (ENT)
            </h3>
            <Link>
              <p className="inline-block rounded px-6 py-2 text-[#078ff7] hover:bg-[#DBEFFE]">
                Consult Now
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#023154] mx-15">
        <div className="flex items-center mx-15 py-15">
          <div className="w-3/5  items-center">
            <h1 className=" font-bold text-[#62E2EA] text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl 3xl:text-7xl 4xl:text-7xl block mb-2 5xl:text-6xl">
              Need some advice from our experts?
            </h1>
            <p className=" text-base font-normal lg:text-lg block text-black-tint-800 mb-6 md:mb-10 text-black-tint-1000 text-white">
              Request a call back now!
            </p>
          </div>
          <div className="w-2/5">
            <p className=" text-xs font-medium leading-5 lg:text-sm  block text-white mb-3">
              Please fill out this quick form and we'll get back to you within
              few hours!
            </p>
            <form className="flex flex-col">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="inputFocus placeholder-slate-700 mt-1 mb-3  block w-full rounded-sm border-transparent border-black-tint-700 bg-white py-3 px-4 shadow-sm focus:outline-none  sm:text-sm"
              />
              <input
                type="text"
                placeholder="Enter Your Phone Number"
                className="inputFocus placeholder-slate-700 mt-1 mb-3  block w-full rounded-sm border-transparent border-black-tint-700 bg-white py-3 px-4 shadow-sm focus:outline-none  sm:text-sm"
              />{" "}
              <input
                type="button"
                value="Call Me back"
                className="block w-full rounded-sm  bg- py-3 px-4 bg-[#62E2EA]  p-4 text-base font-bold capitalize duration-300  text-white  "
              />
            </form>
          </div>
        </div>
      </section>

      <section className="mx-15 mt-20 mb-[100px]">
        <h1 className=" text-md mb-10 block text-xl font-bold text-black sm:text-2xl lg:text-4xl">
          Frequently asked questions
        </h1>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-bold accordion-header text mb-0 text-gray-800 py-4 px-5 relative flex w-full items-center rounded-none border-0 bg-white text-left text-base transition focus:outline-none">
            What Services do Sasthya Seba Provide?{" "}
          </div>
          <div className="collapse-content text-sm">
            Sasthya Seba helps by offering a wide range of convenient healthcare
            services, like:
            <ul>
              <li>Doctors Appointment</li>
              <li>Telemedicine (Doctor consultation over video/voice call)</li>
              <li>Hospital Information</li>
              <li>Diagnostic Information</li>
              <li>Ambulance Service</li>
              <li>Diagnostic Home Service</li>
              <li>Domiciliary & Physiotherapy Services</li>
              <li>Medical Instruments Rental</li>
              <li>Sample Collection for Diagnostics</li>
              <li>Medical Tourism Services</li>
            </ul>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-bold accordion-header text mb-0 text-gray-800 py-4 px-5 relative flex w-full items-center rounded-none border-0 bg-white text-left text-base transition focus:outline-none">
            How much do doctors' consultations on Sasthya Seba cost?
          </div>
          <div className="collapse-content text-sm">
            The fee for consultations is decided by the doctor. We have no
            control over the price.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-bold accordion-header text mb-0 text-gray-800 py-4 px-5 relative flex w-full items-center rounded-none border-0 bg-white text-left text-base transition focus:outline-none">
            I don't know a lot about technology. What shall I do to get a
            doctor's appointment?{" "}
          </div>
          <div className="collapse-content text-sm">
            It's not just for people who are tech-savvy, though. Usability has
            been our key area of attention. Therefore, using the site shouldn't
            be a problem if you can manage a simple website or email. Now, if
            you want to schedule a doctor's appointment, simply use our search
            option and enter the name of the physician, their area of expertise,
            or the illness you have. When you see the appointment button and the
            doctor's brief bio, click it. Keep calm and follow the appointment
            platform's instructions; soon you will receive an appointment
            confirmation.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-bold accordion-header text mb-0 text-gray-800 py-4 px-5 relative flex w-full items-center rounded-none border-0 bg-white text-left text-base transition focus:outline-none">
            Do you provide Ambulance services outside of Dhaka?
          </div>
          <div className="collapse-content text-sm">
            Yes. We provide nationwide service.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-bold accordion-header text mb-0 text-gray-800 py-4 px-5 relative flex w-full items-center rounded-none border-0 bg-white text-left text-base transition focus:outline-none">
            Is Telemedicine Right for Me?
          </div>
          <div className="collapse-content text-sm">
            We cannot answer this question. It depends on your health / medical
            condition and urgency for doctor consultation. It's not always
            convenient or easy for everyone to get medical care. Telemedicine
            makes it possible to access healthcare more swiftly, practically,
            and locally. Telemedicine is another option for receiving
            professional medical care. Telemedicine has the benefit of reducing
            waiting and travel times as well as time away from work or other
            obligations. Basically Telemedicine gives you instant support at
            your sudden critical moment or a follow-up meeting with a doctor.
            Since telemedicine may not always be acceptable, you might require a
            medical expert's assistance to decide whether it is appropriate.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
