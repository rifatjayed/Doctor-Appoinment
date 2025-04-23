import React, { createContext, useState, useEffect } from "react";
import doctorList from "../Data/db2";

export const DoctorContext = createContext();

const DoctorProvider = ({ children }) => {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filter states
  const [filters, setFilters] = useState({
    gender: "",
    specialization: "",
    city: "",
    consultationType: "",
  });

  useEffect(() => {
    // console.log(doctorList);
    // setDoctors(doctorList);
    // setFilteredDoctors(doctorList);
    // setLoading(false);
    // return;
    // console.log("helllo");
    fetch("https://appointment-backend-steel.vercel.app/doctors/")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch doctors");
        // console.log("from context", response.json());
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        setDoctors(data.data || []);
        setFilteredDoctors(data.data || []);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Filter logic
  useEffect(() => {
    let result = doctors;

    if (filters.gender) {
      result = result.filter((doc) => doc.gender === filters.gender);
    }

    if (filters.specialization) {
      result = result.filter((doc) =>
        doc.specialization
          .toLowerCase()
          .includes(filters.specialization.toLowerCase())
      );
    }

    if (filters.city) {
      result = result.filter((doc) =>
        doc.location.toLowerCase().includes(filters.city.toLowerCase())
      );
    }

    // if (filters.consultationType) {
    //   result = result.filter((doc) =>
    //     doc.consultation_type?.includes(filters.consultationType)
    //   );
    // }

    if (filters.consultationType) {
      result = result.filter((doc) =>
        doc.consultation_type?.includes(filters.consultationType)
      );
    }

    setFilteredDoctors(result);
    console.log(result);
  }, [filters, doctors]);

  //   // ✅ Extract unique consultation types
  // const uniqueConsultationTypes = Array.from(
  //   new Set(doctors.flatMap((doc) => doc.consultation_type || []))
  // );

  // // ✅ Extract unique cities
  // const uniqueCities = Array.from(new Set(doctors.map((doc) => doc.location)));

  const uniqueCities = [...new Set(doctors.map((doc) => doc.location))];
  const uniqueConsultationTypes = [
    ...new Set(doctors.flatMap((doc) => doc.consultation_type)),
  ];
  const uniqueSpecializations = [
    ...new Set(doctors.map((doc) => doc.specialization)),
  ];
  const updateFilter = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) return <div>Error: {error}</div>;

  const contextValue = {
    doctors: filteredDoctors,
    allDoctors: doctors,
    filters,
    updateFilter,
    setFilters,
    uniqueConsultationTypes, // 🎯 Pass it into context
    uniqueCities,
    uniqueSpecializations,
  };

  return (
    <DoctorContext.Provider value={contextValue}>
      {children}
    </DoctorContext.Provider>
  );
};

export default DoctorProvider;

// import React, { createContext, useState, useEffect } from "react";
// import doctorList from "../Data/db2";

// export const DoctorContext = createContext();

// const DoctorProvider = ({ children }) => {
//   const [doctors, setDoctors] = useState([]);
//   const [filteredDoctors, setFilteredDoctors] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const [filters, setFilters] = useState({
//     gender: "",
//     specialization: "",
//     city: "",
//     consultationType: "",
//   });

//   useEffect(() => {
//     setDoctors(doctorList);
//     setFilteredDoctors(doctorList);
//     setLoading(false);
//   }, []);

//   // 🔍 Filter logic
//   useEffect(() => {
//     let result = doctors;

//     if (filters.gender) {
//       result = result.filter((doc) => doc.gender === filters.gender);
//     }

//     if (filters.specialization) {
//       result = result.filter((doc) =>
//         doc.specialization
//           .toLowerCase()
//           .includes(filters.specialization.toLowerCase())
//       );
//     }

//     if (filters.city) {
//       result = result.filter((doc) =>
//         doc.location.toLowerCase().includes(filters.city.toLowerCase())
//       );
//     }

//     if (filters.consultationType) {
//       result = result.filter((doc) =>
//         doc.consultation_type?.includes(filters.consultationType)
//       );
//     }

//     setFilteredDoctors(result);
//   }, [filters, doctors]);

//   // // ✅ Extract unique consultation types
//   // const uniqueConsultationTypes = Array.from(
//   //   new Set(doctors.flatMap((doc) => doc.consultation_type || []))
//   // );

//   // // ✅ Extract unique cities
//   // const uniqueCities = Array.from(new Set(doctors.map((doc) => doc.location)));

//   const uniqueCities = [...new Set(doctors.map((doc) => doc.location))];
//   const uniqueConsultationTypes = [
//     ...new Set(doctors.flatMap((doc) => doc.consultation_type)),
//   ];
//   const uniqueSpecializations = [
//     ...new Set(doctors.map((doc) => doc.specialization)),
//   ];

//   const updateFilter = (name, value) => {
//     setFilters((prev) => ({ ...prev, [name]: value }));
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="w-16 h-16 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
//       </div>
//     );
//   }

//   if (error) return <div>Error: {error}</div>;

//   const contextValue = {
//     doctors: filteredDoctors,
//     allDoctors: doctors,
//     filters,
//     updateFilter,
//     uniqueConsultationTypes, // 🎯 Pass it into context
//     uniqueCities,
//     uniqueSpecializations,
//   };

//   return (
//     <DoctorContext.Provider value={contextValue}>
//       {children}
//     </DoctorContext.Provider>
//   );
// };

// export default DoctorProvider;
