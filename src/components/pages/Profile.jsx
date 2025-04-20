import React from "react";

import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router";

const Profile = () => {
  return (
    <div className="bg-[rgb(248_248_250)]">
      <div className="flex gap-40">
        <div className="w-1/5 bg-white pt-5">
          <div className="flex items-center justify-center">
            <AiOutlineUser className="text-[35px]" />
            <div>
              <h2 className="text-[rgb(4_81_140)] text-base font-bold">
                My Dashboard
              </h2>
              <h4 className="text-xs text-[rgb(97_114_131)]">Rifat Jayed</h4>
            </div>
          </div>
          <div className="flex flex-col px-12 py-6">
            <Link
              to="/appoinments"
              className=" rounded-lg  p-3 text-sm  font-bold"
            >
              Appoinments
            </Link>
            <Link
              to="/order_request"
              className=" rounded-lg  p-3 text-sm  font-bold"
            >
              Order request
            </Link>
            <Link
              to="/medical_reports"
              className=" rounded-lg  p-3 text-sm  font-bold"
            >
              Medical Report
            </Link>
          </div>
        </div>
        <div className="w-4/5 bg-blue-400"> i am comming</div>
      </div>
    </div>
  );
};

export default Profile;
