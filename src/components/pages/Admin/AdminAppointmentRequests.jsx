import { FaCheck, FaTimes } from "react-icons/fa";

const AdminAppointmentRequests = () => {
  const appointmentRequests = [
    {
      name: "Rahim Uddin",
      phone: "01700000000",
      doctor: "Dr. Kamal Uddin",
      chamber: "Skin & Laser Clinic",
      consultationType: "Face to Face",
      appointmentType: "New Patient",
      date: "2025-05-01",
      status: "Pending",
    },
    {
      name: "Jannat Ara",
      phone: "01812345678",
      doctor: "Dr. Joya Nasreen",
      chamber: "City Skin Care",
      consultationType: "Video/Audio call",
      appointmentType: "Follow Up",
      date: "2025-05-02",
      status: "Pending",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8">Appointment Requests</h1>

      <div className="overflow-x-auto rounded-xl shadow-lg bg-white">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase">
            <tr>
              <th className="px-4 py-4 text-left text-base font-bold">SI No</th>
              <th className="px-4 py-4 text-left text-base font-bold">Name</th>
              <th className="px-4 py-4 text-left text-base font-bold">Phone</th>
              <th className="px-4 py-4 text-left text-base font-bold">
                Doctor
              </th>

              <th className="px-4 py-4 text-left text-base font-bold">
                Consultation
              </th>
              <th className="px-4 py-4 text-left text-base font-bold">
                Appointment
              </th>
              <th className="px-4 py-4 text-left text-base font-bold">Date</th>
              <th className="px-4 py-4 text-left text-base font-bold">
                Status
              </th>
              <th className="px-4 py-4 text-center text-base font-bold w-32">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {appointmentRequests.map((req, idx) => (
              <tr
                key={idx}
                className="bg-gray-50 hover:bg-blue-50 transition-all duration-300"
              >
                <td className="px-4 py-4 text-sm font-medium text-gray-700">
                  {idx + 1}
                </td>
                <td className="px-4 py-4 text-sm font-medium text-gray-700">
                  {req.name}
                </td>
                <td className="px-4 py-4 text-sm font-medium text-gray-700">
                  {req.phone}
                </td>
                <td className="px-4 py-4 text-sm font-medium text-gray-700">
                  {req.doctor}
                </td>

                <td className="px-4 py-4 text-sm font-medium text-gray-700">
                  {req.consultationType}
                </td>
                <td className="px-4 py-4 text-sm font-medium text-gray-700">
                  {req.appointmentType}
                </td>
                <td className="px-4 py-4 text-sm font-medium text-gray-700">
                  {req.date}
                </td>
                <td className="px-4 py-4 text-sm font-medium text-gray-700">
                  {req.status}
                </td>
                <td className="px-4 py-4">
                  <div className="flex justify-center items-center gap-3">
                    <button className="text-green-600 hover:text-green-800 p-2 rounded-full hover:bg-green-100 transition-all">
                      <FaCheck size={18} />
                    </button>
                    <button className="text-red-600 hover:text-red-800 p-2 rounded-full hover:bg-red-100 transition-all">
                      <FaTimes size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminAppointmentRequests;
