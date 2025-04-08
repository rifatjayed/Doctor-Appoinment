// let doctorList = [
//   {
//     id: "1",
//     name: "Dr. Nusrat Jahan",
//     degrees: ["MBBS", "FCPS (Cardiology)"],
//     specialization: "Cardiologist",
//     experience_years: 10,
//     bmdc_registration: "A123456",
//     chamber: {
//       name: "Heart Care Centre",
//       address: "House #5, Road #7, Dhanmondi, Dhaka",
//       contact: "01812345678",
//     },
//     services: [
//       "Heart Checkup",
//       "ECG",
//       "Echocardiogram",
//       "Hypertension Treatment",
//     ],
//     work_experience: [
//       {
//         title: "Cardiology Consultant",
//         institution: "Dhaka Medical College Hospital",
//       },
//     ],
//     education: [
//       "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//       "FCPS - Fellow of the College of Physicians and Surgeons (Cardiology)",
//     ],
//     location: "Dhaka",
//     availability: "Evening (5 PM - 8 PM)",
//   },
//   {
//     id: "2",
//     name: "Dr. Shahinur Rahman",
//     degrees: ["MBBS", "MD (Neurology)"],
//     specialization: "Neurologist",
//     experience_years: 15,
//     bmdc_registration: "B234567",
//     chamber: {
//       name: "Neuro Clinic",
//       address: "House #3, Road #2, Uttara, Dhaka",
//       contact: "01745678901",
//     },
//     services: [
//       "Stroke Treatment",
//       "Epilepsy",
//       "Migraine Management",
//       "Parkinson’s Disease",
//     ],
//     work_experience: [
//       {
//         title: "Neurologist",
//         institution: "National Institute of Neurosciences & Hospital",
//       },
//     ],
//     education: [
//       "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//       "MD - Doctor of Medicine in Neurology",
//     ],
//     location: "Dhaka",
//     availability: "Morning (9 AM - 12 PM)",
//   },
//   {
//     id: "3",
//     name: "Dr. Farhana Akter",
//     degrees: ["MBBS", "FCPS (Gyne & Obs)"],
//     specialization: "Gynecologist",
//     experience_years: 8,
//     bmdc_registration: "C345678",
//     chamber: {
//       name: "Women's Health Clinic",
//       address: "Chattogram Medical Road, Chattogram",
//       contact: "01612344321",
//     },
//     services: [
//       "Pregnancy Care",
//       "Infertility Treatment",
//       "C-section",
//       "Menstrual Disorders",
//     ],
//     work_experience: [
//       {
//         title: "Consultant",
//         institution: "Chittagong Medical College Hospital",
//       },
//     ],
//     education: [
//       "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//       "FCPS - Fellow of the College of Physicians and Surgeons (Gyne & Obs)",
//     ],
//     location: "Chattogram",
//     availability: "10 AM - 1 PM",
//   },
//   {
//     id: "4",
//     name: "Dr. Tanvir Hossain",
//     degrees: ["MBBS", "MS (Orthopedics)"],
//     specialization: "Orthopedic Surgeon",
//     experience_years: 11,
//     bmdc_registration: "D456789",
//     chamber: {
//       name: "Ortho Care Clinic",
//       address: "Rajshahi City Center, Rajshahi",
//       contact: "01511223344",
//     },
//     services: [
//       "Joint Pain",
//       "Fracture Treatment",
//       "Knee Replacement",
//       "Arthritis Management",
//     ],
//     work_experience: [
//       {
//         title: "Senior Consultant",
//         institution: "Rajshahi Medical College Hospital",
//       },
//     ],
//     education: [
//       "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//       "MS - Master of Surgery in Orthopedics",
//     ],
//     location: "Rajshahi",
//     availability: "Evening (4 PM - 7 PM)",
//   },
//   {
//     id: "5",
//     name: "Dr. Kamal Uddin",
//     degrees: ["MBBS", "MD (Dermatology)"],
//     specialization: "Dermatologist",
//     experience_years: 9,
//     bmdc_registration: "E567890",
//     chamber: {
//       name: "Skin & Laser Clinic",
//       address: "Zindabazar, Sylhet",
//       contact: "01844556677",
//     },
//     services: ["Acne Treatment", "Laser Therapy", "Hair Loss", "Skin Allergy"],
//     work_experience: [
//       {
//         title: "Consultant Dermatologist",
//         institution: "Sylhet MAG Osmani Medical College",
//       },
//     ],
//     education: [
//       "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//       "MD - Doctor of Medicine in Dermatology",
//     ],
//     location: "Sylhet",
//     availability: "Afternoon (2 PM - 5 PM)",
//   },
//   {
//     id: "6",
//     name: "Dr. Sabrina Haque",
//     degrees: ["MBBS", "FCPS (Pediatrics)"],
//     specialization: "Child Specialist",
//     experience_years: 7,
//     bmdc_registration: "F678901",
//     chamber: {
//       name: "Pediatric Health Centre",
//       address: "Mymensingh Town Hall Road",
//       contact: "01799887766",
//     },
//     services: [
//       "Child Growth Monitoring",
//       "Vaccination",
//       "Pediatric Nutrition",
//       "Common Childhood Illnesses",
//     ],
//     work_experience: [
//       {
//         title: "Consultant Pediatrician",
//         institution: "Mymensingh Medical College",
//       },
//     ],
//     education: [
//       "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//       "FCPS - Fellow of the College of Physicians and Surgeons (Pediatrics)",
//     ],
//     location: "Mymensingh",
//     availability: "Morning (9 AM - 1 PM)",
//   },
//   {
//     id: "7",
//     name: "Dr. Mahmudul Hasan",
//     degrees: ["MBBS", "MS (ENT)"],
//     specialization: "ENT Specialist",
//     experience_years: 13,
//     bmdc_registration: "G789012",
//     chamber: {
//       name: "ENT Care Hospital",
//       address: "Kushtia Central Road",
//       contact: "01911222333",
//     },
//     services: [
//       "Ear Infection",
//       "Sinus Treatment",
//       "Hearing Loss",
//       "Tonsil Surgery",
//     ],
//     work_experience: [
//       {
//         title: "ENT Consultant",
//         institution: "Kushtia General Hospital",
//       },
//     ],
//     education: [
//       "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//       "MS - Master of Surgery in ENT",
//     ],
//     location: "Kushtia",
//     availability: "Evening (5 PM - 8 PM)",
//   },
//   {
//     id: "8",
//     name: "Dr. Nilufa Begum",
//     degrees: ["MBBS", "MD (Medicine)"],
//     specialization: "Internal Medicine Specialist",
//     experience_years: 14,
//     bmdc_registration: "H890123",
//     chamber: {
//       name: "City Diagnostic Centre",
//       address: "Barisal Sadar, Barisal",
//       contact: "01877665544",
//     },
//     services: [
//       "Diabetes",
//       "Hypertension",
//       "Liver Disease",
//       "Gastrointestinal Disorders",
//     ],
//     work_experience: [
//       {
//         title: "Medicine Consultant",
//         institution: "Barisal Medical College",
//       },
//     ],
//     education: [
//       "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//       "MD - Doctor of Medicine in Internal Medicine",
//     ],
//     location: "Barisal",
//     availability: "10 AM - 2 PM",
//   },
//   {
//     id: "9",
//     name: "Dr. Rafiqul Islam",
//     degrees: ["MBBS", "MD (Nephrology)"],
//     specialization: "Kidney Specialist",
//     experience_years: 12,
//     bmdc_registration: "I901234",
//     chamber: {
//       name: "Kidney Care Hospital",
//       address: "Khulna Medical Area, Khulna",
//       contact: "01733445566",
//     },
//     services: [
//       "Kidney Disease",
//       "Dialysis",
//       "Urinary Tract Infections",
//       "Chronic Kidney Disease",
//     ],
//     work_experience: [
//       {
//         title: "Nephrologist",
//         institution: "Khulna Medical College",
//       },
//     ],
//     education: [
//       "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//       "MD - Doctor of Medicine in Nephrology",
//     ],
//     location: "Khulna",
//     availability: "Morning (8 AM - 12 PM)",
//   },
//   {
//     id: "10",
//     name: "Dr. Ruma Akter",
//     degrees: ["MBBS", "FCPS (Ophthalmology)"],
//     specialization: "Eye Specialist",
//     experience_years: 10,
//     bmdc_registration: "J012345",
//     chamber: {
//       name: "Vision Eye Hospital",
//       address: "Comilla Sadar Road, Comilla",
//       contact: "01555667788",
//     },
//     services: [
//       "Vision Checkup",
//       "Cataract Surgery",
//       "Glaucoma Treatment",
//       "Eye Infection",
//     ],
//     work_experience: [
//       {
//         title: "Eye Consultant",
//         institution: "Comilla Medical College",
//       },
//     ],
//     education: [
//       "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//       "FCPS - Fellow of the College of Physicians and Surgeons (Ophthalmology)",
//     ],
//     location: "Comilla",
//     availability: "9 AM - 1 PM",
//   },
// ];

// export default doctorList;

let doctorList = [
  {
    id: "5",
    name: "Dr. Kamal Uddin",
    degrees: ["MBBS", "MD (Dermatology)"],
    specialization: "Dermatologist",
    experience_years: 9,
    bmdc_registration: "E567890",
    chamber: [
      {
        name: "Skin & Laser Clinic",
        address: "Zindabazar, Sylhet",
        contact: "01844556677",
      },
      {
        name: "City Skin Care",
        address: "Sylhet Medical Road, Sylhet",
        contact: "01799885566",
      },
      {
        name: "Advanced Derma Centre",
        address: "Shibgonj, Sylhet",
        contact: "01944556677",
      },
    ],
    services: [
      "Acne Treatment",
      "Laser Therapy",
      "Hair Loss",
      "Skin Allergy",
      "Psoriasis Management",
      "Eczema Treatment",
    ],
    work_experience: [
      {
        title: "Consultant Dermatologist",
        institution: "Sylhet MAG Osmani Medical College",
      },
      {
        title: "Visiting Dermatologist",
        institution: "Sylhet Skin Institute",
      },
    ],
    education: [
      "MBBS - Bachelor of Medicine and Bachelor of Surgery",
      "MD - Doctor of Medicine in Dermatology",
    ],
    location: "Sylhet",
    availability: "Afternoon (2 PM - 5 PM)",
  },
  {
    id: "6",
    name: "Dr. Sabrina Haque",
    degrees: ["MBBS", "FCPS (Pediatrics)"],
    specialization: "Child Specialist",
    experience_years: 7,
    bmdc_registration: "F678901",
    chamber: [
      {
        name: "Pediatric Health Centre",
        address: "Mymensingh Town Hall Road",
        contact: "01799887766",
      },
      {
        name: "Little Star Clinic",
        address: "Charpara, Mymensingh",
        contact: "01611224455",
      },
      {
        name: "Mymensingh Children's Hospital",
        address: "Ganginarpar, Mymensingh",
        contact: "01933221155",
      },
    ],
    services: [
      "Child Growth Monitoring",
      "Vaccination",
      "Pediatric Nutrition",
      "Common Childhood Illnesses",
      "Asthma Management",
      "Newborn Care",
    ],
    work_experience: [
      {
        title: "Consultant Pediatrician",
        institution: "Mymensingh Medical College",
      },
      {
        title: "Junior Consultant",
        institution: "Mymensingh Sadar Hospital",
      },
    ],
    education: [
      "MBBS - Bachelor of Medicine and Bachelor of Surgery",
      "FCPS - Fellow of the College of Physicians and Surgeons (Pediatrics)",
    ],
    location: "Mymensingh",
    availability: "Morning (9 AM - 1 PM)",
  },
  {
    id: "7",
    name: "Dr. Mahmudul Hasan",
    degrees: ["MBBS", "MS (ENT)"],
    specialization: "ENT Specialist",
    experience_years: 13,
    bmdc_registration: "G789012",
    chamber: [
      {
        name: "ENT Care Hospital",
        address: "Kushtia Central Road",
        contact: "01911222333",
      },
      {
        name: "Voice & Ear Clinic",
        address: "Mirzapur, Kushtia",
        contact: "01866778899",
      },
      {
        name: "Kushtia Medical Point",
        address: "PTI Road, Kushtia",
        contact: "01788990011",
      },
    ],
    services: [
      "Ear Infection",
      "Sinus Treatment",
      "Hearing Loss",
      "Tonsil Surgery",
      "Deviated Septum Correction",
      "Nasal Polyps Treatment",
    ],
    work_experience: [
      {
        title: "ENT Consultant",
        institution: "Kushtia General Hospital",
      },
      {
        title: "ENT Specialist",
        institution: "Kushtia ENT Institute",
      },
    ],
    education: [
      "MBBS - Bachelor of Medicine and Bachelor of Surgery",
      "MS - Master of Surgery in ENT",
    ],
    location: "Kushtia",
    availability: "Evening (5 PM - 8 PM)",
  },
  {
    id: "8",
    name: "Dr. Nilufa Begum",
    degrees: ["MBBS", "MD (Medicine)"],
    specialization: "Internal Medicine Specialist",
    experience_years: 14,
    bmdc_registration: "H890123",
    chamber: [
      {
        name: "City Diagnostic Centre",
        address: "Barisal Sadar, Barisal",
        contact: "01877665544",
      },
      {
        name: "Barisal General Clinic",
        address: "Natun Bazar, Barisal",
        contact: "01788997766",
      },
      {
        name: "Advanced Medical Services",
        address: "Band Road, Barisal",
        contact: "01655443322",
      },
    ],
    services: [
      "Diabetes",
      "Hypertension",
      "Liver Disease",
      "Gastrointestinal Disorders",
      "Thyroid Disorders",
      "Infectious Disease Management",
    ],
    work_experience: [
      {
        title: "Medicine Consultant",
        institution: "Barisal Medical College",
      },
      {
        title: "Senior Registrar",
        institution: "Barisal Sadar Hospital",
      },
    ],
    education: [
      "MBBS - Bachelor of Medicine and Bachelor of Surgery",
      "MD - Doctor of Medicine in Internal Medicine",
    ],
    location: "Barisal",
    availability: "10 AM - 2 PM",
  },
  {
    id: "9",
    name: "Dr. Rafiqul Islam",
    degrees: ["MBBS", "MD (Nephrology)"],
    specialization: "Kidney Specialist",
    experience_years: 12,
    bmdc_registration: "I901234",
    chamber: [
      {
        name: "Kidney Care Hospital",
        address: "Khulna Medical Area, Khulna",
        contact: "01733445566",
      },
      {
        name: "Nephro Point",
        address: "Boyra Main Road, Khulna",
        contact: "01677889900",
      },
      {
        name: "Southern Kidney Centre",
        address: "Sonadanga, Khulna",
        contact: "01855667788",
      },
    ],
    services: [
      "Kidney Disease",
      "Dialysis",
      "Urinary Tract Infections",
      "Chronic Kidney Disease",
      "Kidney Stone Management",
      "Nephrotic Syndrome Treatment",
    ],
    work_experience: [
      {
        title: "Nephrologist",
        institution: "Khulna Medical College",
      },
      {
        title: "Senior Consultant",
        institution: "Southern Kidney Centre",
      },
    ],
    education: [
      "MBBS - Bachelor of Medicine and Bachelor of Surgery",
      "MD - Doctor of Medicine in Nephrology",
    ],
    location: "Khulna",
    availability: "Morning (8 AM - 12 PM)",
  },
  {
    id: "10",
    name: "Dr. Ruma Akter",
    degrees: ["MBBS", "FCPS (Ophthalmology)"],
    specialization: "Eye Specialist",
    experience_years: 10,
    bmdc_registration: "J012345",
    chamber: [
      {
        name: "Vision Eye Hospital",
        address: "Comilla Sadar Road, Comilla",
        contact: "01555667788",
      },
      {
        name: "Comilla Eye Centre",
        address: "Kotbari Road, Comilla",
        contact: "01611220099",
      },
      {
        name: "Optic Vision Clinic",
        address: "Laksam Road, Comilla",
        contact: "01788992233",
      },
    ],
    services: [
      "Vision Checkup",
      "Cataract Surgery",
      "Glaucoma Treatment",
      "Eye Infection",
      "Diabetic Retinopathy",
      "Dry Eye Syndrome Treatment",
    ],
    work_experience: [
      {
        title: "Eye Consultant",
        institution: "Comilla Medical College",
      },
      {
        title: "Ophthalmologist",
        institution: "Optic Vision Clinic",
      },
    ],
    education: [
      "MBBS - Bachelor of Medicine and Bachelor of Surgery",
      "FCPS - Fellow of the College of Physicians and Surgeons (Ophthalmology)",
    ],
    location: "Comilla",
    availability: "9 AM - 1 PM",
  },
];
export default doctorList;
