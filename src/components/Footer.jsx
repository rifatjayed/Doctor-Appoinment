import React from "react";

import FooterIcon from "../assets/img/footerimg-removebg-preview.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-[rgb(2,49,84)] sm:footer-horizontal mt-10 text-white p-10">
        <aside className="w-70">
          <Link to="/" className="flex items-center space-x-2">
            <img src={FooterIcon} alt="" className="w-[150px]" />
            {/* <p className="text-2xl font-bold text-blue-400">Medica</p> */}
          </Link>
          <p>
            We are on a mission to make quality healthcare affordable and
            accessible for the people of Bangladesh.
          </p>
        </aside>
        <nav>
          <h6 className=" text-white text-lg font-bold">Sasthya Daktar Ltd</h6>
          <a className="link link-hover hover:text-[#078ff7]">About Us</a>
          <a className="link link-hover hover:text-[#078ff7] text-[15px] font-normal leading-8">
            Contact
          </a>
          <a className="link link-hover hover:text-[#078ff7] text-[15px] font-normal leading-8">
            Blog
          </a>
          <a className="link link-hover hover:text-[#078ff7] text-[15px] font-normal leading-8">
            Privacy Policy
          </a>
        </nav>
        <nav>
          <h6 className="text-white text-lg font-bold">For Patients</h6>
          <a className="link link-hover hover:text-[#078ff7] text-[15px] font-normal leading-8">
            FAQ's
          </a>
          <a className="link link-hover hover:text-[#078ff7] text-[15px] font-normal leading-8">
            Find Doctors
          </a>
          <a className="link link-hover hover:text-[#078ff7] text-[15px] font-normal leading-8">
            Find Ambulances
          </a>
          <a className="link link-hover hover:text-[#078ff7] text-[15px] font-normal leading-8">
            Terms & Conditions
          </a>
        </nav>
        <nav>
          <h6 className="text-white text-lg font-bold">
            For Doctors/Organisations
          </h6>
          <a className="link link-hover hover:text-[#078ff7] text-[15px] font-normal leading-8">
            Login as Doctor
          </a>
          <a className="link link-hover hover:text-[#078ff7] text-[15px] font-normal leading-8">
            {" "}
            Work with Us
          </a>

          <a className="link link-hover hover:text-[#078ff7] text-[15px] font-normal leading-8">
            Privacy policy
          </a>
          <a className="link link-hover hover:text-[#078ff7] text-[15px] font-normal leading-8">
            Patient No-Show Policy
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
