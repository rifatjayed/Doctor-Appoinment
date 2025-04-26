import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router";
import React, { useState } from "react";
import Profile from "./Profile";
import AppointmentList from "./Appointment";
import AmbulanceRequests from "./AmbulanceRequest";

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState("Appointments");

  const menuItems = [
    "Appointments",
    "Medical Records",
    "Lab Tests",
    "Profile Settings",
    "My Service Cart",
    "My Requests",
  ];

  const renderContent = () => {
    const containerStyle =
      "bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-4";
    const titleStyle = "text-2xl font-bold text-gray-700";
    const descStyle = "text-gray-500 text-base";

    switch (activeMenu) {
      case "Appointments":
        return (
          <>
            <AppointmentList></AppointmentList>
          </>
        );
      case "Medical Records":
        return <div>All your medical records in one place.</div>;
      case "Lab Tests":
        return <div>Here are your recent lab test results.</div>;
      case "Profile Settings":
        return (
          <>
            <Profile></Profile>
          </>
        );
      case "My Service Cart":
        return <div>Items added to your cart for health services.</div>;
      case "My Requests":
        return (
          <>
            <AmbulanceRequests></AmbulanceRequests>
          </>
        );
      default:
        return null;
    }
  };
  return (
    // <div className="min-h-screen flex">
    //   {/* Sidebar */}
    //   <aside className="w-64 bg-[#f3f4f6] p-6 shadow-md">
    //     <h2 className="text-xl font-bold mb-6">My Dashboard</h2>
    //     <ul className="space-y-3">
    //       {menuItems.map((item) => (
    //         <li
    //           key={item}
    //           onClick={() => setActiveMenu(item)}
    //           className={`cursor-pointer px-4 py-2 rounded-lg transition ${
    //             activeMenu === item
    //               ? "bg-blue-500 text-white"
    //               : "hover:bg-gray-200"
    //           }`}
    //         >
    //           {item}
    //         </li>
    //       ))}
    //     </ul>
    //   </aside>

    //   {/* Main Content */}
    //   <main className="flex-1 p-8">
    //     <h3 className="text-2xl font-semibold mb-4">{activeMenu}</h3>
    //     <div className="bg-white p-6 rounded-lg shadow-md">
    //       {renderContent()}
    //     </div>
    //   </main>
    // </div>
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-[#f3f4f6] p-4 md:p-6 shadow-md">
        <div className="flex items-center gap-3 mb-4 md:mb-6">
          <AiOutlineUser className="text-2xl text-blue-600" />
          <div>
            <h2 className="text-lg md:text-xl font-bold text-blue-700">
              My Dashboard
            </h2>
            <p className="text-sm text-gray-600 hidden md:block">Rifat Jayed</p>
          </div>
        </div>
        <ul className="space-y-2 md:space-y-3">
          {menuItems.map((item) => (
            <li
              key={item}
              onClick={() => setActiveMenu(item)}
              className={`cursor-pointer px-4 py-2 rounded-lg transition text-sm md:text-base ${
                activeMenu === item
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8">
        <h3 className="text-xl md:text-2xl font-semibold mb-4">{activeMenu}</h3>
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-sm md:text-base">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
