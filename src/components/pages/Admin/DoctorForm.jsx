// import { useForm, useFieldArray } from "react-hook-form";
// import { useState } from "react";
// import { FaPlus, FaTrash } from "react-icons/fa";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const DoctorForm = () => {
//   const {
//     register,
//     control,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       name: "",
//       gender: "",
//       degrees: [""],
//       specialization: "",
//       experience_years: "",
//       consultation_type: [],
//       bmdc_registration: "",
//       about: "",
//       location: "",
//       availability: "",
//       chamber: [{ name: "", address: "", contact: "", availability: "" }],
//       services: [""],
//       work_experience: [{ title: "", institution: "" }],
//       education: [""],
//     },
//   });

//   const [recentDoctors, setRecentDoctors] = useState([]);

//   // Dynamic Fields
//   const {
//     fields: degreeFields,
//     append: appendDegree,
//     remove: removeDegree,
//   } = useFieldArray({ control, name: "degrees" });
//   const {
//     fields: chamberFields,
//     append: appendChamber,
//     remove: removeChamber,
//   } = useFieldArray({ control, name: "chamber" });
//   const {
//     fields: serviceFields,
//     append: appendService,
//     remove: removeService,
//   } = useFieldArray({ control, name: "services" });
//   const {
//     fields: workFields,
//     append: appendWork,
//     remove: removeWork,
//   } = useFieldArray({ control, name: "work_experience" });
//   const {
//     fields: educationFields,
//     append: appendEducation,
//     remove: removeEducation,
//   } = useFieldArray({ control, name: "education" });

//   const onSubmit = (data) => {
//     setRecentDoctors((prev) => [data, ...prev]);
//     reset();
//     toast.success("Doctor added successfully!");
//   };

//   const handleDeleteDoctor = (index) => {
//     if (confirm("Are you sure you want to delete this doctor?")) {
//       setRecentDoctors((prev) => prev.filter((_, i) => i !== index));
//       toast.success("Doctor deleted successfully!");
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto p-8 space-y-10">
//       <ToastContainer />

//       {/* Doctor Form */}
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="bg-white shadow-xl p-8 rounded-2xl space-y-6"
//       >
//         <h2 className="text-3xl font-bold mb-6">Add New Doctor</h2>

//         {/* Basic Info */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input
//             {...register("name", { required: true })}
//             className="input"
//             placeholder="Doctor's Name"
//           />
//           <input
//             {...register("specialization", { required: true })}
//             className="input"
//             placeholder="Specialization"
//           />
//           <input
//             {...register("experience_years", { required: true })}
//             type="number"
//             className="input"
//             placeholder="Years of Experience"
//           />
//           <input
//             {...register("bmdc_registration", { required: true })}
//             className="input"
//             placeholder="BMDC Registration No."
//           />
//           <input
//             {...register("location", { required: true })}
//             className="input"
//             placeholder="Location"
//           />
//           <input
//             {...register("availability")}
//             className="input"
//             placeholder="General Availability"
//           />
//           <select {...register("gender", { required: true })} className="input">
//             <option value="">Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//           </select>
//           <div>
//             <label className="block mb-1 font-medium">Consultation Type</label>
//             <div className="flex flex-wrap gap-4">
//               <label className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   value="Face to Face"
//                   {...register("consultation_type")}
//                 />
//                 Face to Face
//               </label>
//               <label className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   value="Video Call/ Audio Call"
//                   {...register("consultation_type")}
//                 />
//                 Video/Audio Call
//               </label>
//             </div>
//           </div>
//         </div>

//         <textarea
//           {...register("about")}
//           rows={3}
//           className="input w-full"
//           placeholder="About the doctor"
//         />

//         {/* Degrees */}
//         <div>
//           <h3 className="text-xl font-semibold mb-2">Degrees</h3>
//           {degreeFields.map((field, index) => (
//             <div key={field.id} className="flex gap-2 mb-2">
//               <input
//                 {...register(`degrees.${index}`)}
//                 className="input flex-1"
//                 placeholder="Degree"
//               />
//               <button
//                 type="button"
//                 onClick={() => removeDegree(index)}
//                 className="text-red-500"
//               >
//                 <FaTrash />
//               </button>
//             </div>
//           ))}
//           <button
//             type="button"
//             onClick={() => appendDegree("")}
//             className="btn-secondary"
//           >
//             <FaPlus /> Add Degree
//           </button>
//         </div>

//         {/* Chambers */}
//         <div>
//           <h3 className="text-xl font-semibold mb-2">Chambers</h3>
//           {chamberFields.map((field, index) => (
//             <div
//               key={field.id}
//               className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4"
//             >
//               <input
//                 {...register(`chamber.${index}.name`)}
//                 className="input"
//                 placeholder="Chamber Name"
//               />
//               <input
//                 {...register(`chamber.${index}.address`)}
//                 className="input"
//                 placeholder="Chamber Address"
//               />
//               <input
//                 {...register(`chamber.${index}.contact`)}
//                 className="input"
//                 placeholder="Chamber Contact"
//               />
//               <input
//                 {...register(`chamber.${index}.availability`)}
//                 className="input"
//                 placeholder="Chamber Availability"
//               />
//               <div className="md:col-span-2 flex justify-end">
//                 <button
//                   type="button"
//                   onClick={() => removeChamber(index)}
//                   className="text-red-500"
//                 >
//                   <FaTrash />
//                 </button>
//               </div>
//             </div>
//           ))}
//           <button
//             type="button"
//             onClick={() =>
//               appendChamber({
//                 name: "",
//                 address: "",
//                 contact: "",
//                 availability: "",
//               })
//             }
//             className="btn-secondary"
//           >
//             <FaPlus /> Add Chamber
//           </button>
//         </div>

//         {/* Services */}
//         <div>
//           <h3 className="text-xl font-semibold mb-2">Services</h3>
//           {serviceFields.map((field, index) => (
//             <div key={field.id} className="flex gap-2 mb-2">
//               <input
//                 {...register(`services.${index}`)}
//                 className="input flex-1"
//                 placeholder="Service"
//               />
//               <button
//                 type="button"
//                 onClick={() => removeService(index)}
//                 className="text-red-500"
//               >
//                 <FaTrash />
//               </button>
//             </div>
//           ))}
//           <button
//             type="button"
//             onClick={() => appendService("")}
//             className="btn-secondary"
//           >
//             <FaPlus /> Add Service
//           </button>
//         </div>

//         {/* Work Experience */}
//         <div>
//           <h3 className="text-xl font-semibold mb-2">Work Experience</h3>
//           {workFields.map((field, index) => (
//             <div
//               key={field.id}
//               className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4"
//             >
//               <input
//                 {...register(`work_experience.${index}.title`)}
//                 className="input"
//                 placeholder="Title"
//               />
//               <input
//                 {...register(`work_experience.${index}.institution`)}
//                 className="input"
//                 placeholder="Institution"
//               />
//               <div className="md:col-span-2 flex justify-end">
//                 <button
//                   type="button"
//                   onClick={() => removeWork(index)}
//                   className="text-red-500"
//                 >
//                   <FaTrash />
//                 </button>
//               </div>
//             </div>
//           ))}
//           <button
//             type="button"
//             onClick={() => appendWork({ title: "", institution: "" })}
//             className="btn-secondary"
//           >
//             <FaPlus /> Add Work Experience
//           </button>
//         </div>

//         {/* Education */}
//         <div>
//           <h3 className="text-xl font-semibold mb-2">Education</h3>
//           {educationFields.map((field, index) => (
//             <div key={field.id} className="flex gap-2 mb-2">
//               <input
//                 {...register(`education.${index}`)}
//                 className="input flex-1"
//                 placeholder="Education Detail"
//               />
//               <button
//                 type="button"
//                 onClick={() => removeEducation(index)}
//                 className="text-red-500"
//               >
//                 <FaTrash />
//               </button>
//             </div>
//           ))}
//           <button
//             type="button"
//             onClick={() => appendEducation("")}
//             className="btn-secondary"
//           >
//             <FaPlus /> Add Education
//           </button>
//         </div>

//         {/* Submit */}
//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-blue-700 w-full"
//         >
//           Submit Doctor
//         </button>
//       </form>

//       {/* Recently Added Doctors Table */}
//       <div className="mt-10">
//         <h2 className="text-2xl font-bold mb-4">Recently Added Doctors</h2>
//         {recentDoctors.length === 0 ? (
//           <p className="text-gray-500">No doctors added yet.</p>
//         ) : (
//           <div className="overflow-x-auto">
//             <table className="min-w-full text-sm">
//               <thead>
//                 <tr className="bg-gray-100 text-gray-700 text-left">
//                   <th className="py-2 px-4">#</th>
//                   <th className="py-2 px-4">Name</th>
//                   <th className="py-2 px-4">Gender</th>
//                   <th className="py-2 px-4">BMDC Reg No</th>
//                   <th className="py-2 px-4">Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {recentDoctors.map((doctor, index) => (
//                   <tr key={index} className="border-b hover:bg-gray-50">
//                     <td className="py-2 px-4">{index + 1}</td>
//                     <td className="py-2 px-4">{doctor.name}</td>
//                     <td className="py-2 px-4">{doctor.gender}</td>
//                     <td className="py-2 px-4">{doctor.bmdc_registration}</td>
//                     <td className="py-2 px-4">
//                       <button
//                         onClick={() => handleDeleteDoctor(index)}
//                         className="text-red-500 hover:text-red-700"
//                       >
//                         <FaTrash />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DoctorForm;

// import { useForm, useFieldArray } from "react-hook-form";
// import { useState } from "react";
// import { FaPlus, FaTrash } from "react-icons/fa";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const DoctorForm = () => {
//   const {
//     register,
//     control,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       name: "",
//       gender: "",
//       degrees: [""],
//       specialization: "",
//       experience_years: "",
//       consultation_type: [],
//       bmdc_registration: "",
//       about: "",
//       location: "",
//       availability: "",
//       fee: "", // ✅ New
//       image: "", // ✅ New
//       chamber: [{ name: "", address: "", contact: "", availability: "" }],
//       services: [""],
//       work_experience: [{ title: "", institution: "" }],
//       education: [""],
//     },
//   });

//   const [recentDoctors, setRecentDoctors] = useState([]);

//   const {
//     fields: degreeFields,
//     append: appendDegree,
//     remove: removeDegree,
//   } = useFieldArray({ control, name: "degrees" });
//   const {
//     fields: chamberFields,
//     append: appendChamber,
//     remove: removeChamber,
//   } = useFieldArray({ control, name: "chamber" });
//   const {
//     fields: serviceFields,
//     append: appendService,
//     remove: removeService,
//   } = useFieldArray({ control, name: "services" });
//   const {
//     fields: workFields,
//     append: appendWork,
//     remove: removeWork,
//   } = useFieldArray({ control, name: "work_experience" });
//   const {
//     fields: educationFields,
//     append: appendEducation,
//     remove: removeEducation,
//   } = useFieldArray({ control, name: "education" });

//   const onSubmit = (data) => {
//     setRecentDoctors((prev) => [data, ...prev]);
//     reset();
//     toast.success("Doctor added successfully!");
//   };

//   const handleDeleteDoctor = (index) => {
//     if (confirm("Are you sure you want to delete this doctor?")) {
//       setRecentDoctors((prev) => prev.filter((_, i) => i !== index));
//       toast.success("Doctor deleted successfully!");
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto p-8 space-y-10">
//       <ToastContainer />

//       {/* Doctor Form */}
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="bg-white shadow-xl p-8 rounded-2xl space-y-6"
//       >
//         <h2 className="text-3xl font-bold mb-6">Add New Doctor</h2>

//         {/* Basic Info */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input
//             {...register("name", { required: true })}
//             className="input"
//             placeholder="Doctor's Name"
//           />
//           <input
//             {...register("specialization", { required: true })}
//             className="input"
//             placeholder="Specialization"
//           />
//           <input
//             {...register("experience_years", { required: true })}
//             type="number"
//             className="input"
//             placeholder="Years of Experience"
//           />
//           <input
//             {...register("bmdc_registration", { required: true })}
//             className="input"
//             placeholder="BMDC Registration No."
//           />
//           <input
//             {...register("location", { required: true })}
//             className="input"
//             placeholder="Location"
//           />
//           <input
//             {...register("availability")}
//             className="input"
//             placeholder="General Availability"
//           />
//           <input
//             {...register("fee", { required: true })}
//             type="number"
//             className="input"
//             placeholder="Consultation Fee"
//           />
//           <input
//             {...register("image")}
//             type="text"
//             className="input"
//             placeholder="Image URL"
//           />
//           <select {...register("gender", { required: true })} className="input">
//             <option value="">Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//           </select>
//           <div>
//             <label className="block mb-1 font-medium">Consultation Type</label>
//             <div className="flex flex-wrap gap-4">
//               <label className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   value="Face to Face"
//                   {...register("consultation_type")}
//                 />
//                 Face to Face
//               </label>
//               <label className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   value="Video Call/ Audio Call"
//                   {...register("consultation_type")}
//                 />
//                 Video/Audio Call
//               </label>
//             </div>
//           </div>
//         </div>

//         <textarea
//           {...register("about")}
//           rows={3}
//           className="input w-full"
//           placeholder="About the doctor"
//         />

//         {/* Degrees */}
//         <div>
//           <h3 className="text-xl font-semibold mb-2">Degrees</h3>
//           {degreeFields.map((field, index) => (
//             <div key={field.id} className="flex gap-2 mb-2">
//               <input
//                 {...register(`degrees.${index}`)}
//                 className="input flex-1"
//                 placeholder="Degree"
//               />
//               <button
//                 type="button"
//                 onClick={() => removeDegree(index)}
//                 className="text-red-500"
//               >
//                 <FaTrash />
//               </button>
//             </div>
//           ))}
//           <button
//             type="button"
//             onClick={() => appendDegree("")}
//             className="btn-secondary"
//           >
//             <FaPlus /> Add Degree
//           </button>
//         </div>

//         {/* Chambers */}
//         <div>
//           <h3 className="text-xl font-semibold mb-2">Chambers</h3>
//           {chamberFields.map((field, index) => (
//             <div
//               key={field.id}
//               className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4"
//             >
//               <input
//                 {...register(`chamber.${index}.name`)}
//                 className="input"
//                 placeholder="Chamber Name"
//               />
//               <input
//                 {...register(`chamber.${index}.address`)}
//                 className="input"
//                 placeholder="Chamber Address"
//               />
//               <input
//                 {...register(`chamber.${index}.contact`)}
//                 className="input"
//                 placeholder="Chamber Contact"
//               />
//               <input
//                 {...register(`chamber.${index}.availability`)}
//                 className="input"
//                 placeholder="Chamber Availability"
//               />
//               <div className="md:col-span-2 flex justify-end">
//                 <button
//                   type="button"
//                   onClick={() => removeChamber(index)}
//                   className="text-red-500"
//                 >
//                   <FaTrash />
//                 </button>
//               </div>
//             </div>
//           ))}
//           <button
//             type="button"
//             onClick={() =>
//               appendChamber({
//                 name: "",
//                 address: "",
//                 contact: "",
//                 availability: "",
//               })
//             }
//             className="btn-secondary"
//           >
//             <FaPlus /> Add Chamber
//           </button>
//         </div>

//         {/* Services */}
//         <div>
//           <h3 className="text-xl font-semibold mb-2">Services</h3>
//           {serviceFields.map((field, index) => (
//             <div key={field.id} className="flex gap-2 mb-2">
//               <input
//                 {...register(`services.${index}`)}
//                 className="input flex-1"
//                 placeholder="Service"
//               />
//               <button
//                 type="button"
//                 onClick={() => removeService(index)}
//                 className="text-red-500"
//               >
//                 <FaTrash />
//               </button>
//             </div>
//           ))}
//           <button
//             type="button"
//             onClick={() => appendService("")}
//             className="btn-secondary"
//           >
//             <FaPlus /> Add Service
//           </button>
//         </div>

//         {/* Work Experience */}
//         <div>
//           <h3 className="text-xl font-semibold mb-2">Work Experience</h3>
//           {workFields.map((field, index) => (
//             <div
//               key={field.id}
//               className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4"
//             >
//               <input
//                 {...register(`work_experience.${index}.title`)}
//                 className="input"
//                 placeholder="Title"
//               />
//               <input
//                 {...register(`work_experience.${index}.institution`)}
//                 className="input"
//                 placeholder="Institution"
//               />
//               <div className="md:col-span-2 flex justify-end">
//                 <button
//                   type="button"
//                   onClick={() => removeWork(index)}
//                   className="text-red-500"
//                 >
//                   <FaTrash />
//                 </button>
//               </div>
//             </div>
//           ))}
//           <button
//             type="button"
//             onClick={() => appendWork({ title: "", institution: "" })}
//             className="btn-secondary"
//           >
//             <FaPlus /> Add Work Experience
//           </button>
//         </div>

//         {/* Education */}
//         <div>
//           <h3 className="text-xl font-semibold mb-2">Education</h3>
//           {educationFields.map((field, index) => (
//             <div key={field.id} className="flex gap-2 mb-2">
//               <input
//                 {...register(`education.${index}`)}
//                 className="input flex-1"
//                 placeholder="Education Detail"
//               />
//               <button
//                 type="button"
//                 onClick={() => removeEducation(index)}
//                 className="text-red-500"
//               >
//                 <FaTrash />
//               </button>
//             </div>
//           ))}
//           <button
//             type="button"
//             onClick={() => appendEducation("")}
//             className="btn-secondary"
//           >
//             <FaPlus /> Add Education
//           </button>
//         </div>

//         {/* Submit */}
//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-blue-700 w-full"
//         >
//           Submit Doctor
//         </button>
//       </form>

//       {/* Recently Added Doctors Table */}
//       <div className="mt-10">
//         <h2 className="text-2xl font-bold mb-4">Recently Added Doctors</h2>
//         {recentDoctors.length === 0 ? (
//           <p className="text-gray-500">No doctors added yet.</p>
//         ) : (
//           <div className="overflow-x-auto">
//             <table className="min-w-full text-sm">
//               <thead>
//                 <tr className="bg-gray-100 text-gray-700 text-left">
//                   <th className="py-2 px-4">#</th>
//                   <th className="py-2 px-4">Name</th>
//                   <th className="py-2 px-4">Gender</th>
//                   <th className="py-2 px-4">BMDC Reg No</th>
//                   <th className="py-2 px-4">Fee (৳)</th>
//                   <th className="py-2 px-4">Image</th>
//                   <th className="py-2 px-4">Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {recentDoctors.map((doctor, index) => (
//                   <tr key={index} className="border-b hover:bg-gray-50">
//                     <td className="py-2 px-4">{index + 1}</td>
//                     <td className="py-2 px-4">{doctor.name}</td>
//                     <td className="py-2 px-4">{doctor.gender}</td>
//                     <td className="py-2 px-4">{doctor.bmdc_registration}</td>
//                     <td className="py-2 px-4">{doctor.fee} ৳</td>
//                     <td className="py-2 px-4">
//                       {doctor.image ? (
//                         <img
//                           src={doctor.image}
//                           alt="Doctor"
//                           className="w-12 h-12 object-cover rounded-full"
//                         />
//                       ) : (
//                         "No Image"
//                       )}
//                     </td>
//                     <td className="py-2 px-4">
//                       <button
//                         onClick={() => handleDeleteDoctor(index)}
//                         className="text-red-500 hover:text-red-700"
//                       >
//                         <FaTrash />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DoctorForm;

import { useForm, useFieldArray } from "react-hook-form";
import { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DoctorForm = () => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      gender: "",
      degrees: [""],
      specialization: "",
      experience_years: "",
      consultation_type: [],
      bmdc_registration: "",
      about: "",
      location: "",
      availability: "",
      chamber: [{ name: "", address: "", contact: "", availability: "" }],
      services: [""],
      work_experience: [{ title: "", institution: "" }],
      education: [""],
      fee: "",
      image: null,
    },
  });

  const [recentDoctors, setRecentDoctors] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);

  const {
    fields: degreeFields,
    append: appendDegree,
    remove: removeDegree,
  } = useFieldArray({ control, name: "degrees" });
  const {
    fields: chamberFields,
    append: appendChamber,
    remove: removeChamber,
  } = useFieldArray({ control, name: "chamber" });
  const {
    fields: serviceFields,
    append: appendService,
    remove: removeService,
  } = useFieldArray({ control, name: "services" });
  const {
    fields: workFields,
    append: appendWork,
    remove: removeWork,
  } = useFieldArray({ control, name: "work_experience" });
  const {
    fields: educationFields,
    append: appendEducation,
    remove: removeEducation,
  } = useFieldArray({ control, name: "education" });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const onSubmit = (data) => {
    if (data.image && data.image.length > 0) {
      data.image = data.image[0]; // File object
    }
    setRecentDoctors((prev) => [data, ...prev]);
    reset();
    setPreviewImage(null);
    toast.success("Doctor added successfully!");
  };

  const handleDeleteDoctor = (index) => {
    if (confirm("Are you sure you want to delete this doctor?")) {
      setRecentDoctors((prev) => prev.filter((_, i) => i !== index));
      toast.success("Doctor deleted successfully!");
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-8 space-y-10">
      <ToastContainer />

      {/* Doctor Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-xl p-8 rounded-2xl space-y-6"
      >
        <h2 className="text-3xl font-bold mb-6">Add New Doctor</h2>

        {/* Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            {...register("name", { required: true })}
            className="input"
            placeholder="Doctor's Name"
          />
          <input
            {...register("specialization", { required: true })}
            className="input"
            placeholder="Specialization"
          />
          <input
            {...register("experience_years", { required: true })}
            type="number"
            className="input"
            placeholder="Years of Experience"
          />
          <input
            {...register("bmdc_registration", { required: true })}
            className="input"
            placeholder="BMDC Registration No."
          />
          <input
            {...register("location", { required: true })}
            className="input"
            placeholder="Location"
          />
          <input
            {...register("availability")}
            className="input"
            placeholder="General Availability"
          />
          <input
            {...register("fee", { required: true })}
            type="number"
            className="input"
            placeholder="Consultation Fee"
          />
          <select {...register("gender", { required: true })} className="input">
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          {/* Consultation Type */}
          <div className="md:col-span-2">
            <label className="block mb-1 font-medium">Consultation Type</label>
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value="Face to Face"
                  {...register("consultation_type")}
                />{" "}
                Face to Face
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value="Video Call/ Audio Call"
                  {...register("consultation_type")}
                />{" "}
                Video/Audio Call
              </label>
            </div>
          </div>

          {/* Image Upload */}
          <div className="md:col-span-2">
            <label className="block mb-1 font-medium">
              Upload Doctor's Image
            </label>
            <input
              type="file"
              accept="image/*"
              {...register("image", { required: true })}
              onChange={(e) => {
                handleImageChange(e);
                register("image").onChange(e);
              }}
              className="input"
            />
            {previewImage && (
              <img
                src={previewImage}
                alt="Preview"
                className="w-20 h-20 object-cover rounded-full mt-4"
              />
            )}
          </div>
        </div>

        <textarea
          {...register("about")}
          rows={3}
          className="input w-full"
          placeholder="About the doctor"
        />

        {/* Degrees */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Degrees</h3>
          {degreeFields.map((field, index) => (
            <div key={field.id} className="flex gap-2 mb-2">
              <input
                {...register(`degrees.${index}`)}
                className="input flex-1"
                placeholder="Degree"
              />
              <button
                type="button"
                onClick={() => removeDegree(index)}
                className="text-red-500"
              >
                <FaTrash />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => appendDegree("")}
            className="btn-secondary"
          >
            <FaPlus /> Add Degree
          </button>
        </div>

        {/* Chambers */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Chambers</h3>
          {chamberFields.map((field, index) => (
            <div
              key={field.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4"
            >
              <input
                {...register(`chamber.${index}.name`)}
                className="input"
                placeholder="Chamber Name"
              />
              <input
                {...register(`chamber.${index}.address`)}
                className="input"
                placeholder="Chamber Address"
              />
              <input
                {...register(`chamber.${index}.contact`)}
                className="input"
                placeholder="Chamber Contact"
              />
              <input
                {...register(`chamber.${index}.availability`)}
                className="input"
                placeholder="Chamber Availability"
              />
              <div className="md:col-span-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => removeChamber(index)}
                  className="text-red-500"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              appendChamber({
                name: "",
                address: "",
                contact: "",
                availability: "",
              })
            }
            className="btn-secondary"
          >
            <FaPlus /> Add Chamber
          </button>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Services</h3>
          {serviceFields.map((field, index) => (
            <div key={field.id} className="flex gap-2 mb-2">
              <input
                {...register(`services.${index}`)}
                className="input flex-1"
                placeholder="Service"
              />
              <button
                type="button"
                onClick={() => removeService(index)}
                className="text-red-500"
              >
                <FaTrash />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => appendService("")}
            className="btn-secondary"
          >
            <FaPlus /> Add Service
          </button>
        </div>

        {/* Work Experience */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Work Experience</h3>
          {workFields.map((field, index) => (
            <div
              key={field.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4"
            >
              <input
                {...register(`work_experience.${index}.title`)}
                className="input"
                placeholder="Title"
              />
              <input
                {...register(`work_experience.${index}.institution`)}
                className="input"
                placeholder="Institution"
              />
              <div className="md:col-span-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => removeWork(index)}
                  className="text-red-500"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={() => appendWork({ title: "", institution: "" })}
            className="btn-secondary"
          >
            <FaPlus /> Add Work Experience
          </button>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Education</h3>
          {educationFields.map((field, index) => (
            <div key={field.id} className="flex gap-2 mb-2">
              <input
                {...register(`education.${index}`)}
                className="input flex-1"
                placeholder="Education Detail"
              />
              <button
                type="button"
                onClick={() => removeEducation(index)}
                className="text-red-500"
              >
                <FaTrash />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => appendEducation("")}
            className="btn-secondary"
          >
            <FaPlus /> Add Education
          </button>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-blue-700 w-full"
        >
          Submit Doctor
        </button>
      </form>

      {/* Recently Added Doctors */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Recently Added Doctors</h2>
        {recentDoctors.length === 0 ? (
          <p className="text-gray-500">No doctors added yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100 text-gray-700 text-left">
                  <th className="py-2 px-4">#</th>
                  <th className="py-2 px-4">Photo</th>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Gender</th>
                  <th className="py-2 px-4">Fee</th>
                  <th className="py-2 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {recentDoctors.map((doctor, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-2 px-4">{index + 1}</td>
                    <td className="py-2 px-4">
                      {doctor.image ? (
                        <img
                          src={URL.createObjectURL(doctor.image)}
                          alt="Doctor"
                          className="w-12 h-12 object-cover rounded-full"
                        />
                      ) : (
                        "No Image"
                      )}
                    </td>
                    <td className="py-2 px-4">{doctor.name}</td>
                    <td className="py-2 px-4">{doctor.gender}</td>
                    <td className="py-2 px-4">{doctor.fee} ৳</td>
                    <td className="py-2 px-4">
                      <button
                        onClick={() => handleDeleteDoctor(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorForm;
