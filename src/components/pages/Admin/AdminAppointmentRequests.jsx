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
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase">
            <tr>
              <th className="py-3 px-4">SI No</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Phone</th>
              <th className="py-3 px-4">Doctor</th>
              <th className="py-3 px-4">Chamber</th>
              <th className="py-3 px-4">Consultation</th>
              <th className="py-3 px-4">Appointment</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointmentRequests.map((req, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="py-4 px-4">{idx + 1}</td>
                <td className="py-4 px-4">{req.name}</td>
                <td className="py-4 px-4">{req.phone}</td>
                <td className="py-4 px-4">{req.doctor}</td>
                <td className="py-4 px-4">{req.chamber}</td>
                <td className="py-4 px-4">{req.consultationType}</td>
                <td className="py-4 px-4">{req.appointmentType}</td>
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

export default AdminAppointmentRequests;
