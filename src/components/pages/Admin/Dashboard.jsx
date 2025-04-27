import { useState } from "react";
import {
  FaUserMd,
  FaAmbulance,
  FaClipboardList,
  FaUserCog,
  FaChartPie,
} from "react-icons/fa";
import CountUp from "react-countup";
import { Bar } from "react-chartjs-2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import DoctorForm from "./DoctorForm";
import AdminAppointmentRequests from "./AdminAppointmentRequests";
import AdminAmbulanceRequests from "./AdminAmbulanceRequests";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AdminDashboard = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const notify = (msg) => {
    toast.success(msg, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Appointments",
        backgroundColor: "rgba(59,130,246,0.5)",
        borderColor: "rgba(59,130,246,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(59,130,246,0.7)",
        data: [45, 60, 40, 70, 50, 80],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  const renderContent = () => {
    switch (activeMenu) {
      case "dashboard":
        return (
          <div>
            <h1 className="text-3xl font-bold mb-6">Welcome, Admin 👋</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Total Doctors */}
              <div
                onClick={() => notify("Total Doctors Clicked!")}
                className="cursor-pointer bg-white shadow-md hover:shadow-lg transition rounded-2xl p-6 flex items-center space-x-4"
              >
                <FaUserMd className="text-blue-500 text-4xl" />
                <div>
                  <p className="text-2xl font-bold">
                    <CountUp end={124} duration={2} />
                  </p>
                  <p className="text-gray-500">Total Doctors</p>
                </div>
              </div>

              {/* Appointments */}
              <div
                onClick={() => notify("Appointment Requests Clicked!")}
                className="cursor-pointer bg-white shadow-md hover:shadow-lg transition rounded-2xl p-6 flex items-center space-x-4"
              >
                <FaClipboardList className="text-green-500 text-4xl" />
                <div>
                  <p className="text-2xl font-bold">
                    <CountUp end={87} duration={2} />
                  </p>
                  <p className="text-gray-500">Appointment Requests</p>
                </div>
              </div>

              {/* Ambulance */}
              <div
                onClick={() => notify("Ambulance Requests Clicked!")}
                className="cursor-pointer bg-white shadow-md hover:shadow-lg transition rounded-2xl p-6 flex items-center space-x-4"
              >
                <FaAmbulance className="text-red-500 text-4xl" />
                <div>
                  <p className="text-2xl font-bold">
                    <CountUp end={14} duration={2} />
                  </p>
                  <p className="text-gray-500">Ambulance Requests</p>
                </div>
              </div>
            </div>

            {/* Chart */}
            <div className="mt-10">
              <h2 className="text-2xl font-semibold mb-4">
                Appointments Overview
              </h2>
              <div className="bg-white rounded-2xl shadow p-6">
                <Bar data={chartData} options={chartOptions} />
              </div>
            </div>

            {/* Latest Activities */}
            <div className="mt-10">
              <h2 className="text-2xl font-semibold mb-4">Latest Activities</h2>
              <ul className="bg-white rounded-2xl shadow p-6 space-y-4 max-h-60 overflow-y-auto">
                <li>
                  📋 New appointment request from <b>Ahmed</b>
                </li>
                <li>
                  🚑 Ambulance requested by <b>Sarah</b> (ICU)
                </li>
                <li>
                  👨‍⚕️ New doctor <b>Dr. Nabila</b> awaiting approval
                </li>
                <li>
                  📋 New appointment request from <b>Rahim</b>
                </li>
              </ul>
            </div>
          </div>
        );

      case "doctors":
        return (
          <div>
            <h1 className="text-2xl font-bold mb-4">Manage Doctors</h1>
            <DoctorForm />
          </div>
        );

      case "appointments":
        return (
          <div>
            <h1 className="text-2xl font-bold mb-4">Manage Appointments</h1>
            <AdminAppointmentRequests />
          </div>
        );

      case "ambulances":
        return (
          <div>
            <h1 className="text-2xl font-bold mb-4">
              Manage Ambulance Requests
            </h1>
            <AdminAmbulanceRequests />
          </div>
        );

      default:
        return <div>Select a menu item</div>;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-52 bg-blue-600 text-white p-6 space-y-6">
        <h2 className="text-3xl font-bold mb-8">Admin Panel</h2>
        <nav className="space-y-3">
          {[
            { name: "Dashboard", icon: <FaChartPie />, value: "dashboard" },
            { name: "Doctors", icon: <FaUserMd />, value: "doctors" },
            {
              name: "Appointments",
              icon: <FaClipboardList />,
              value: "appointments",
            },
            { name: "Ambulances", icon: <FaAmbulance />, value: "ambulances" },
          ].map((item) => (
            <button
              key={item.value}
              onClick={() => setActiveMenu(item.value)}
              className={`flex items-center space-x-3 p-2 rounded hover:bg-blue-500 w-full ${
                activeMenu === item.value ? "bg-blue-500" : ""
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="pt-10 border-t border-blue-400">
          <button className="flex items-center space-x-3 p-2 rounded hover:bg-blue-500 w-full">
            <FaUserCog />
            <span>Settings</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 min-w-0 p-4">{renderContent()}</div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default AdminDashboard;
