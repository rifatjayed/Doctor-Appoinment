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
    console.log(doctorList);
    setDoctors(doctorList);
    setFilteredDoctors(doctorList);
    setLoading(false);
    return;
    fetch("../Data/db2.js")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch doctors");
        // console.log(response.json());
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setDoctors(data.doctors || []);
        setFilteredDoctors(data.doctors || []);
        setLoading(false);
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

    if (filters.consultationType) {
      result = result.filter((doc) =>
        doc.consultation_type?.includes(filters.consultationType)
      );
    }

    setFilteredDoctors(result);
    console.log(result);
  }, [filters, doctors]);

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
  };

  return (
    <DoctorContext.Provider value={contextValue}>
      {children}
    </DoctorContext.Provider>
  );
};

export default DoctorProvider;
