const AmbulanceRequests = () => {
  const ambulanceRequests = [
    {
      from: "Dhanmondi 27, Dhaka",
      destination: "Apollo Hospital, Dhaka",
      ambulanceType: "AC Ambulance",
      status: "Pending",
    },
    {
      from: "Banani, Dhaka",
      destination: "Square Hospital, Dhaka",
      ambulanceType: "Non-AC Ambulance",
      status: "Approved",
    },
    {
      from: "Uttara, Dhaka",
      destination: "United Hospital, Dhaka",
      ambulanceType: "ICU Ambulance",
      status: "Rejected",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "text-yellow-700 bg-yellow-100";
      case "Approved":
        return "text-green-700 bg-green-100";
      case "Rejected":
        return "text-red-700 bg-red-100";
      default:
        return "text-gray-700 bg-gray-100";
    }
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow-xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        🚑 My Ambulance Requests
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-separate border-spacing-y-3">
          <thead className="text-gray-700 bg-gray-100 rounded-lg">
            <tr>
              <th className="px-6 py-4 text-left text-base font-bold">#</th>
              <th className="px-6 py-4 text-left text-base font-bold">From</th>
              <th className="px-6 py-4 text-left text-base font-bold">
                Destination
              </th>
              <th className="px-6 py-4 text-left text-base font-bold">
                Ambulance Type
              </th>
              <th className="px-6 py-4 text-left text-base font-bold">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {ambulanceRequests.map((item, idx) => (
              <tr
                key={idx}
                className="bg-gray-50 hover:bg-blue-50 transition-all duration-300 rounded-lg"
              >
                <td className="px-6 py-4 text-sm font-medium text-gray-700">
                  {idx + 1}
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-800">
                  {item.from}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {item.destination}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {item.ambulanceType}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AmbulanceRequests;
