// pages/AdminAmbulanceRequests.jsx
import { FaCheck, FaTimes } from "react-icons/fa";

const AdminAmbulanceRequests = () => {
  const ambulanceRequests = [
    {
      id: 1,
      fromLocation: "Zindabazar",
      destination: "Sylhet Medical",
      ambulanceType: "ICU",
      date: "2025-05-05",
      name: "Rahim Uddin",
      phone: "01700000000",
      status: "Pending",
    },
    {
      id: 2,
      fromLocation: "Ambarkhana",
      destination: "Osmani Hospital",
      ambulanceType: "Basic",
      date: "2025-05-06",
      name: "Jannat Ara",
      phone: "01812345678",
      status: "Pending",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8">Ambulance Requests</h1>

      <div className="overflow-x-auto rounded-xl shadow-lg bg-white">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase">
            <tr>
              <th className="py-3 px-4">#</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Phone</th>
              <th className="py-3 px-4">From</th>
              <th className="py-3 px-4">Destination</th>
              <th className="py-3 px-4">Type</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {ambulanceRequests.map((req, idx) => (
              <tr key={req.id} className="border-b hover:bg-gray-50">
                <td className="py-4 px-4">{idx + 1}</td>
                <td className="py-4 px-4">{req.name}</td>
                <td className="py-4 px-4">{req.phone}</td>
                <td className="py-4 px-4">{req.fromLocation}</td>
                <td className="py-4 px-4">{req.destination}</td>
                <td className="py-4 px-4">{req.ambulanceType}</td>
                <td className="py-4 px-4">{req.date}</td>
                <td className="py-4 px-4 font-semibold">{req.status}</td>
                <td className="py-4 px-4 flex justify-center gap-3">
                  <button className="text-green-600 hover:text-green-800 p-2 rounded-full hover:bg-green-100">
                    <FaCheck size={18} />
                  </button>
                  <button className="text-red-600 hover:text-red-800 p-2 rounded-full hover:bg-red-100">
                    <FaTimes size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminAmbulanceRequests;
