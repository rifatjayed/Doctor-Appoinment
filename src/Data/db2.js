let doctorList = [
  {
    id: "5",
    name: "Dr. Kamal Uddin",
    gender: "Male",
    degrees: ["MBBS", "MD (Dermatology)"],
    specialization: "Dermatologist",
    experience_years: 9,
    bmdc_registration: "E567890",
    about:
      "Dr. Kamal Uddin is a board-certified dermatologist with a decade of experience in treating complex skin conditions. He is known for his personalized care and commitment to using modern dermatological techniques.",
    chamber: [
      {
        name: "Skin & Laser Clinic",
        address: "Zindabazar, Sylhet",
        contact: "01844556677",
        availability: "Saturday to Wednesday, 2 PM - 5 PM",
      },
      {
        name: "City Skin Care",
        address: "Sylhet Medical Road, Sylhet",
        contact: "01799885566",
        availability: "Thursday, 2 PM - 5 PM",
      },
      {
        name: "Advanced Derma Centre",
        address: "Shibgonj, Sylhet",
        contact: "01944556677",
        availability: "Friday, 3 PM - 6 PM",
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
    gender: "Female",
    degrees: ["MBBS", "FCPS (Pediatrics)"],
    specialization: "Child Specialist",
    experience_years: 7,
    bmdc_registration: "F678901",
    about:
      "Dr. Sabrina Haque is a dedicated pediatrician with a strong focus on child growth, nutrition, and preventive care. She brings warmth and expertise to every consultation.",
    chamber: [
      {
        name: "Pediatric Health Centre",
        address: "Mymensingh Town Hall Road",
        contact: "01799887766",
        availability: "Saturday to Wednesday, 9 AM - 1 PM",
      },
      {
        name: "Little Star Clinic",
        address: "Charpara, Mymensingh",
        contact: "01611224455",
        availability: "Thursday, 10 AM - 1 PM",
      },
      {
        name: "Mymensingh Children's Hospital",
        address: "Ganginarpar, Mymensingh",
        contact: "01933221155",
        availability: "Friday, 9 AM - 12 PM",
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
    gender: "Male",
    degrees: ["MBBS", "MS (ENT)"],
    specialization: "ENT Specialist",
    experience_years: 13,
    bmdc_registration: "G789012",
    about:
      "Dr. Mahmudul Hasan is a leading ENT specialist renowned for his surgical precision and effective treatment of ear, nose, and throat disorders.",
    chamber: [
      {
        name: "ENT Care Hospital",
        address: "Kushtia Central Road",
        contact: "01911222333",
        availability: "Saturday to Wednesday, 5 PM - 8 PM",
      },
      {
        name: "Voice & Ear Clinic",
        address: "Mirzapur, Kushtia",
        contact: "01866778899",
        availability: "Thursday, 5 PM - 7 PM",
      },
      {
        name: "Kushtia Medical Point",
        address: "PTI Road, Kushtia",
        contact: "01788990011",
        availability: "Friday, 6 PM - 8 PM",
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
    gender: "Female",
    degrees: ["MBBS", "MD (Medicine)"],
    specialization: "Internal Medicine Specialist",
    experience_years: 14,
    bmdc_registration: "H890123",
    about:
      "Dr. Nilufa Begum is a highly experienced internal medicine specialist, providing comprehensive care for chronic illnesses and complex medical cases with compassion and excellence.",
    chamber: [
      {
        name: "City Diagnostic Centre",
        address: "Barisal Sadar, Barisal",
        contact: "01877665544",
        availability: "Saturday to Wednesday, 10 AM - 2 PM",
      },
      {
        name: "Barisal General Clinic",
        address: "Natun Bazar, Barisal",
        contact: "01788997766",
        availability: "Thursday, 10 AM - 1 PM",
      },
      {
        name: "Advanced Medical Services",
        address: "Band Road, Barisal",
        contact: "01655443322",
        availability: "Friday, 9 AM - 12 PM",
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
    gender: "Male",
    degrees: ["MBBS", "MD (Nephrology)"],
    specialization: "Kidney Specialist",
    experience_years: 12,
    bmdc_registration: "I901234",
    about:
      "Dr. Rafiqul Islam is an expert in nephrology with a special focus on chronic kidney diseases and dialysis. He is committed to improving the quality of life of his patients through advanced kidney care.",
    chamber: [
      {
        name: "Kidney Care Hospital",
        address: "Khulna Medical Area, Khulna",
        contact: "01733445566",
        availability: "Saturday to Wednesday, 8 AM - 12 PM",
      },
      {
        name: "Nephro Point",
        address: "Boyra Main Road, Khulna",
        contact: "01677889900",
        availability: "Thursday, 9 AM - 11 AM",
      },
      {
        name: "Southern Kidney Centre",
        address: "Sonadanga, Khulna",
        contact: "01855667788",
        availability: "Friday, 8 AM - 10 AM",
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
    gender: "Female",
    degrees: ["MBBS", "FCPS (Ophthalmology)"],
    specialization: "Eye Specialist",
    experience_years: 10,
    bmdc_registration: "J012345",
    about:
      "Dr. Ruma Akter is a respected ophthalmologist specializing in vision correction, eye diseases, and cataract surgery. Her precise diagnostics and surgical skills make her a trusted name in eye care.",
    chamber: [
      {
        name: "Vision Eye Hospital",
        address: "Comilla Sadar Road, Comilla",
        contact: "01555667788",
        availability: "Saturday to Wednesday, 9 AM - 1 PM",
      },
      {
        name: "Comilla Eye Centre",
        address: "Kotbari Road, Comilla",
        contact: "01611220099",
        availability: "Thursday, 10 AM - 12 PM",
      },
      {
        name: "Optic Vision Clinic",
        address: "Laksam Road, Comilla",
        contact: "01788992233",
        availability: "Friday, 10 AM - 12 PM",
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
  {
    id: "11",
    name: "Dr. Kamal Uddin",
    gender: "Male",
    degrees: ["MBBS", "MD (Dermatology)"],
    specialization: "Dermatologist",
    experience_years: 9,
    bmdc_registration: "E567890",
    about:
      "Dr. Kamal Uddin is a board-certified dermatologist with a decade of experience in treating complex skin conditions. He is known for his personalized care and commitment to using modern dermatological techniques.",
    chamber: [
      {
        name: "Skin & Laser Clinic",
        address: "Zindabazar, Sylhet",
        contact: "01844556677",
        availability: "Saturday to Wednesday, 2 PM - 5 PM",
      },
      {
        name: "City Skin Care",
        address: "Sylhet Medical Road, Sylhet",
        contact: "01799885566",
        availability: "Thursday, 2 PM - 5 PM",
      },
      {
        name: "Advanced Derma Centre",
        address: "Shibgonj, Sylhet",
        contact: "01944556677",
        availability: "Friday, 3 PM - 6 PM",
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
    id: "12",
    name: "Dr. Sabrina Haque",
    gender: "Female",
    degrees: ["MBBS", "FCPS (Pediatrics)"],
    specialization: "Child Specialist",
    experience_years: 7,
    bmdc_registration: "F678901",
    about:
      "Dr. Sabrina Haque is a dedicated pediatrician with a strong focus on child growth, nutrition, and preventive care. She brings warmth and expertise to every consultation.",
    chamber: [
      {
        name: "Pediatric Health Centre",
        address: "Mymensingh Town Hall Road",
        contact: "01799887766",
        availability: "Saturday to Wednesday, 9 AM - 1 PM",
      },
      {
        name: "Little Star Clinic",
        address: "Charpara, Mymensingh",
        contact: "01611224455",
        availability: "Thursday, 10 AM - 1 PM",
      },
      {
        name: "Mymensingh Children's Hospital",
        address: "Ganginarpar, Mymensingh",
        contact: "01933221155",
        availability: "Friday, 9 AM - 12 PM",
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
    id: "13",
    name: "Dr. Mahmudul Hasan",
    gender: "Male",
    degrees: ["MBBS", "MS (ENT)"],
    specialization: "ENT Specialist",
    experience_years: 13,
    bmdc_registration: "G789012",
    about:
      "Dr. Mahmudul Hasan is a leading ENT specialist renowned for his surgical precision and effective treatment of ear, nose, and throat disorders.",
    chamber: [
      {
        name: "ENT Care Hospital",
        address: "Kushtia Central Road",
        contact: "01911222333",
        availability: "Saturday to Wednesday, 5 PM - 8 PM",
      },
      {
        name: "Voice & Ear Clinic",
        address: "Mirzapur, Kushtia",
        contact: "01866778899",
        availability: "Thursday, 5 PM - 7 PM",
      },
      {
        name: "Kushtia Medical Point",
        address: "PTI Road, Kushtia",
        contact: "01788990011",
        availability: "Friday, 6 PM - 8 PM",
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
    id: "14",
    name: "Dr. Nilufa Begum",
    gender: "Female",
    degrees: ["MBBS", "MD (Medicine)"],
    specialization: "Internal Medicine Specialist",
    experience_years: 14,
    bmdc_registration: "H890123",
    about:
      "Dr. Nilufa Begum is a highly experienced internal medicine specialist, providing comprehensive care for chronic illnesses and complex medical cases with compassion and excellence.",
    chamber: [
      {
        name: "City Diagnostic Centre",
        address: "Barisal Sadar, Barisal",
        contact: "01877665544",
        availability: "Saturday to Wednesday, 10 AM - 2 PM",
      },
      {
        name: "Barisal General Clinic",
        address: "Natun Bazar, Barisal",
        contact: "01788997766",
        availability: "Thursday, 10 AM - 1 PM",
      },
      {
        name: "Advanced Medical Services",
        address: "Band Road, Barisal",
        contact: "01655443322",
        availability: "Friday, 9 AM - 12 PM",
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
    id: "15",
    name: "Dr. Rafiqul Islam",
    gender: "Male",
    degrees: ["MBBS", "MD (Nephrology)"],
    specialization: "Kidney Specialist",
    experience_years: 12,
    bmdc_registration: "I901234",
    about:
      "Dr. Rafiqul Islam is an expert in nephrology with a special focus on chronic kidney diseases and dialysis. He is committed to improving the quality of life of his patients through advanced kidney care.",
    chamber: [
      {
        name: "Kidney Care Hospital",
        address: "Khulna Medical Area, Khulna",
        contact: "01733445566",
        availability: "Saturday to Wednesday, 8 AM - 12 PM",
      },
      {
        name: "Nephro Point",
        address: "Boyra Main Road, Khulna",
        contact: "01677889900",
        availability: "Thursday, 9 AM - 11 AM",
      },
      {
        name: "Southern Kidney Centre",
        address: "Sonadanga, Khulna",
        contact: "01855667788",
        availability: "Friday, 8 AM - 10 AM",
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
    id: "16",
    name: "Dr. Ruma Akter",
    gender: "Female",
    degrees: ["MBBS", "FCPS (Ophthalmology)"],
    specialization: "Eye Specialist",
    experience_years: 10,
    bmdc_registration: "J012345",
    about:
      "Dr. Ruma Akter is a respected ophthalmologist specializing in vision correction, eye diseases, and cataract surgery. Her precise diagnostics and surgical skills make her a trusted name in eye care.",
    chamber: [
      {
        name: "Vision Eye Hospital",
        address: "Comilla Sadar Road, Comilla",
        contact: "01555667788",
        availability: "Saturday to Wednesday, 9 AM - 1 PM",
      },
      {
        name: "Comilla Eye Centre",
        address: "Kotbari Road, Comilla",
        contact: "01611220099",
        availability: "Thursday, 10 AM - 12 PM",
      },
      {
        name: "Optic Vision Clinic",
        address: "Laksam Road, Comilla",
        contact: "01788992233",
        availability: "Friday, 10 AM - 12 PM",
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

// let doctorList = [
//   [
//     {
//       id: "100",
//       name: "Dr. Mahmudul A",
//       gender: "Male",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "Dermatologist",
//       experience_years: 14,
//       bmdc_registration: "A479874",
//       about:
//         "Dr. Mahmudul A is a highly experienced dermatologist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Rangpur Main Road",
//           contact: "01955907840",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: ["Acne Treatment", "Laser Therapy", "Hair Loss"],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Rangpur",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "101",
//       name: "Dr. Sabrina B",
//       gender: "Female",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "Eye Specialist",
//       experience_years: 17,
//       bmdc_registration: "B163855",
//       about:
//         "Dr. Sabrina B is a highly experienced eye specialist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Mymensingh Main Road",
//           contact: "01768229198",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: ["Vision Checkup", "Cataract Surgery", "Glaucoma Treatment"],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Mymensingh",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "102",
//       name: "Dr. Mahmudul C",
//       gender: "Male",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "Child Specialist",
//       experience_years: 16,
//       bmdc_registration: "C431223",
//       about:
//         "Dr. Mahmudul C is a highly experienced child specialist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Sylhet Main Road",
//           contact: "01663930700",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: [
//         "Child Growth Monitoring",
//         "Vaccination",
//         "Pediatric Nutrition",
//       ],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Sylhet",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "103",
//       name: "Dr. Sabrina D",
//       gender: "Female",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "Internal Medicine Specialist",
//       experience_years: 18,
//       bmdc_registration: "D277385",
//       about:
//         "Dr. Sabrina D is a highly experienced internal medicine specialist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Kushtia Main Road",
//           contact: "01971624242",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: ["Diabetes", "Hypertension", "Liver Disease"],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Kushtia",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "104",
//       name: "Dr. Mahmudul E",
//       gender: "Male",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "Dermatologist",
//       experience_years: 15,
//       bmdc_registration: "E483906",
//       about:
//         "Dr. Mahmudul E is a highly experienced dermatologist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Chattogram Main Road",
//           contact: "01695536673",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: ["Acne Treatment", "Laser Therapy", "Hair Loss"],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Chattogram",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "105",
//       name: "Dr. Sabrina F",
//       gender: "Female",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "Child Specialist",
//       experience_years: 16,
//       bmdc_registration: "F248743",
//       about:
//         "Dr. Sabrina F is a highly experienced child specialist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Barisal Main Road",
//           contact: "01777172203",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: [
//         "Child Growth Monitoring",
//         "Vaccination",
//         "Pediatric Nutrition",
//       ],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Barisal",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "106",
//       name: "Dr. Mahmudul G",
//       gender: "Male",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "Dermatologist",
//       experience_years: 18,
//       bmdc_registration: "G797344",
//       about:
//         "Dr. Mahmudul G is a highly experienced dermatologist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Rangpur Main Road",
//           contact: "01977845952",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: ["Acne Treatment", "Laser Therapy", "Hair Loss"],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Rangpur",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "107",
//       name: "Dr. Sabrina H",
//       gender: "Female",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "ENT Specialist",
//       experience_years: 11,
//       bmdc_registration: "H755793",
//       about:
//         "Dr. Sabrina H is a highly experienced ent specialist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Kushtia Main Road",
//           contact: "01523791273",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: ["Ear Infection", "Sinus Treatment", "Tonsil Surgery"],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Kushtia",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "108",
//       name: "Dr. Mahmudul I",
//       gender: "Male",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "ENT Specialist",
//       experience_years: 14,
//       bmdc_registration: "I479214",
//       about:
//         "Dr. Mahmudul I is a highly experienced ent specialist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Sylhet Main Road",
//           contact: "01893294541",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: ["Ear Infection", "Sinus Treatment", "Tonsil Surgery"],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Sylhet",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "109",
//       name: "Dr. Sabrina J",
//       gender: "Female",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "Eye Specialist",
//       experience_years: 8,
//       bmdc_registration: "J845878",
//       about:
//         "Dr. Sabrina J is a highly experienced eye specialist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Rangpur Main Road",
//           contact: "01605036689",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: ["Vision Checkup", "Cataract Surgery", "Glaucoma Treatment"],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Rangpur",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "110",
//       name: "Dr. Mahmudul K",
//       gender: "Male",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "Kidney Specialist",
//       experience_years: 11,
//       bmdc_registration: "K616830",
//       about:
//         "Dr. Mahmudul K is a highly experienced kidney specialist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Dhaka Main Road",
//           contact: "01973712916",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: ["Kidney Disease", "Dialysis", "Urinary Tract Infections"],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Dhaka",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "111",
//       name: "Dr. Sabrina L",
//       gender: "Female",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "Internal Medicine Specialist",
//       experience_years: 6,
//       bmdc_registration: "L850968",
//       about:
//         "Dr. Sabrina L is a highly experienced internal medicine specialist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Kushtia Main Road",
//           contact: "01526061535",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: ["Diabetes", "Hypertension", "Liver Disease"],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Kushtia",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "112",
//       name: "Dr. Mahmudul M",
//       gender: "Male",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "Child Specialist",
//       experience_years: 12,
//       bmdc_registration: "M854453",
//       about:
//         "Dr. Mahmudul M is a highly experienced child specialist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Sylhet Main Road",
//           contact: "01893106047",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: [
//         "Child Growth Monitoring",
//         "Vaccination",
//         "Pediatric Nutrition",
//       ],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Sylhet",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "113",
//       name: "Dr. Sabrina N",
//       gender: "Female",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "ENT Specialist",
//       experience_years: 15,
//       bmdc_registration: "N722500",
//       about:
//         "Dr. Sabrina N is a highly experienced ent specialist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Chattogram Main Road",
//           contact: "01930870803",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: ["Ear Infection", "Sinus Treatment", "Tonsil Surgery"],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Chattogram",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "114",
//       name: "Dr. Mahmudul O",
//       gender: "Male",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "Child Specialist",
//       experience_years: 13,
//       bmdc_registration: "O435006",
//       about:
//         "Dr. Mahmudul O is a highly experienced child specialist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Barisal Main Road",
//           contact: "01582591741",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: [
//         "Child Growth Monitoring",
//         "Vaccination",
//         "Pediatric Nutrition",
//       ],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Barisal",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "115",
//       name: "Dr. Sabrina P",
//       gender: "Female",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "Internal Medicine Specialist",
//       experience_years: 12,
//       bmdc_registration: "P264575",
//       about:
//         "Dr. Sabrina P is a highly experienced internal medicine specialist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Mymensingh Main Road",
//           contact: "01623555026",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: ["Diabetes", "Hypertension", "Liver Disease"],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Mymensingh",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "116",
//       name: "Dr. Mahmudul Q",
//       gender: "Male",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "Internal Medicine Specialist",
//       experience_years: 6,
//       bmdc_registration: "Q854589",
//       about:
//         "Dr. Mahmudul Q is a highly experienced internal medicine specialist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Rajshahi Main Road",
//           contact: "01753324542",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: ["Diabetes", "Hypertension", "Liver Disease"],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Rajshahi",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "117",
//       name: "Dr. Sabrina R",
//       gender: "Female",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "Child Specialist",
//       experience_years: 8,
//       bmdc_registration: "R877018",
//       about:
//         "Dr. Sabrina R is a highly experienced child specialist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Sylhet Main Road",
//           contact: "01714379600",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: [
//         "Child Growth Monitoring",
//         "Vaccination",
//         "Pediatric Nutrition",
//       ],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Sylhet",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "118",
//       name: "Dr. Mahmudul S",
//       gender: "Male",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "Eye Specialist",
//       experience_years: 11,
//       bmdc_registration: "S736026",
//       about:
//         "Dr. Mahmudul S is a highly experienced eye specialist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Dhaka Main Road",
//           contact: "01514363137",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: ["Vision Checkup", "Cataract Surgery", "Glaucoma Treatment"],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Dhaka",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "119",
//       name: "Dr. Sabrina T",
//       gender: "Female",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "Kidney Specialist",
//       experience_years: 17,
//       bmdc_registration: "T485054",
//       about:
//         "Dr. Sabrina T is a highly experienced kidney specialist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Sylhet Main Road",
//           contact: "01910468346",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: ["Kidney Disease", "Dialysis", "Urinary Tract Infections"],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Sylhet",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "120",
//       name: "Dr. Mahmudul U",
//       gender: "Male",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "ENT Specialist",
//       experience_years: 18,
//       bmdc_registration: "U259699",
//       about:
//         "Dr. Mahmudul U is a highly experienced ent specialist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Rajshahi Main Road",
//           contact: "01664808030",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: ["Ear Infection", "Sinus Treatment", "Tonsil Surgery"],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Rajshahi",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "121",
//       name: "Dr. Sabrina V",
//       gender: "Female",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "Child Specialist",
//       experience_years: 14,
//       bmdc_registration: "V189169",
//       about:
//         "Dr. Sabrina V is a highly experienced child specialist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Mymensingh Main Road",
//           contact: "01908426065",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: [
//         "Child Growth Monitoring",
//         "Vaccination",
//         "Pediatric Nutrition",
//       ],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Mymensingh",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "122",
//       name: "Dr. Mahmudul W",
//       gender: "Male",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "Kidney Specialist",
//       experience_years: 10,
//       bmdc_registration: "W541743",
//       about:
//         "Dr. Mahmudul W is a highly experienced kidney specialist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Rajshahi Main Road",
//           contact: "01615039867",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: ["Kidney Disease", "Dialysis", "Urinary Tract Infections"],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Rajshahi",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "123",
//       name: "Dr. Sabrina X",
//       gender: "Female",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "Dermatologist",
//       experience_years: 15,
//       bmdc_registration: "X513416",
//       about:
//         "Dr. Sabrina X is a highly experienced dermatologist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Mymensingh Main Road",
//           contact: "01748707684",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: ["Acne Treatment", "Laser Therapy", "Hair Loss"],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Mymensingh",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "124",
//       name: "Dr. Mahmudul Y",
//       gender: "Male",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "Internal Medicine Specialist",
//       experience_years: 14,
//       bmdc_registration: "Y825065",
//       about:
//         "Dr. Mahmudul Y is a highly experienced internal medicine specialist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Chattogram Main Road",
//           contact: "01936049791",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: ["Diabetes", "Hypertension", "Liver Disease"],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Chattogram",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "125",
//       name: "Dr. Sabrina Z",
//       gender: "Female",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "Internal Medicine Specialist",
//       experience_years: 13,
//       bmdc_registration: "Z435877",
//       about:
//         "Dr. Sabrina Z is a highly experienced internal medicine specialist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Sylhet Main Road",
//           contact: "01528900704",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: ["Diabetes", "Hypertension", "Liver Disease"],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Sylhet",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "126",
//       name: "Dr. Mahmudul A",
//       gender: "Male",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "Child Specialist",
//       experience_years: 5,
//       bmdc_registration: "A664211",
//       about:
//         "Dr. Mahmudul A is a highly experienced child specialist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Dhaka Main Road",
//           contact: "01650530344",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: [
//         "Child Growth Monitoring",
//         "Vaccination",
//         "Pediatric Nutrition",
//       ],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Dhaka",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "127",
//       name: "Dr. Sabrina B",
//       gender: "Female",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "ENT Specialist",
//       experience_years: 12,
//       bmdc_registration: "B955670",
//       about:
//         "Dr. Sabrina B is a highly experienced ent specialist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Sylhet Main Road",
//           contact: "01516316673",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: ["Ear Infection", "Sinus Treatment", "Tonsil Surgery"],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Sylhet",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "128",
//       name: "Dr. Mahmudul C",
//       gender: "Male",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "ENT Specialist",
//       experience_years: 7,
//       bmdc_registration: "C726842",
//       about:
//         "Dr. Mahmudul C is a highly experienced ent specialist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Rangpur Main Road",
//           contact: "01905655837",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: ["Ear Infection", "Sinus Treatment", "Tonsil Surgery"],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Rangpur",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "129",
//       name: "Dr. Sabrina D",
//       gender: "Female",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "Kidney Specialist",
//       experience_years: 14,
//       bmdc_registration: "D825056",
//       about:
//         "Dr. Sabrina D is a highly experienced kidney specialist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Sylhet Main Road",
//           contact: "01726521289",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: ["Kidney Disease", "Dialysis", "Urinary Tract Infections"],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Sylhet",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "130",
//       name: "Dr. Mahmudul E",
//       gender: "Male",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "Internal Medicine Specialist",
//       experience_years: 16,
//       bmdc_registration: "E601304",
//       about:
//         "Dr. Mahmudul E is a highly experienced internal medicine specialist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Rangpur Main Road",
//           contact: "01936092617",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: ["Diabetes", "Hypertension", "Liver Disease"],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Rangpur",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "131",
//       name: "Dr. Sabrina F",
//       gender: "Female",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "Child Specialist",
//       experience_years: 8,
//       bmdc_registration: "F742500",
//       about:
//         "Dr. Sabrina F is a highly experienced child specialist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Rajshahi Main Road",
//           contact: "01668400270",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: [
//         "Child Growth Monitoring",
//         "Vaccination",
//         "Pediatric Nutrition",
//       ],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Rajshahi",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "132",
//       name: "Dr. Mahmudul G",
//       gender: "Male",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "Internal Medicine Specialist",
//       experience_years: 9,
//       bmdc_registration: "G961867",
//       about:
//         "Dr. Mahmudul G is a highly experienced internal medicine specialist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Dhaka Main Road",
//           contact: "01999113933",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: ["Diabetes", "Hypertension", "Liver Disease"],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Dhaka",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "133",
//       name: "Dr. Sabrina H",
//       gender: "Female",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "ENT Specialist",
//       experience_years: 18,
//       bmdc_registration: "H952118",
//       about:
//         "Dr. Sabrina H is a highly experienced ent specialist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Mymensingh Main Road",
//           contact: "01693388402",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: ["Ear Infection", "Sinus Treatment", "Tonsil Surgery"],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Mymensingh",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "134",
//       name: "Dr. Mahmudul I",
//       gender: "Male",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "ENT Specialist",
//       experience_years: 12,
//       bmdc_registration: "I529756",
//       about:
//         "Dr. Mahmudul I is a highly experienced ent specialist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Chattogram Main Road",
//           contact: "01595727574",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: ["Ear Infection", "Sinus Treatment", "Tonsil Surgery"],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Chattogram",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "135",
//       name: "Dr. Sabrina J",
//       gender: "Female",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "Kidney Specialist",
//       experience_years: 9,
//       bmdc_registration: "J983331",
//       about:
//         "Dr. Sabrina J is a highly experienced kidney specialist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Barisal Main Road",
//           contact: "01505574520",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: ["Kidney Disease", "Dialysis", "Urinary Tract Infections"],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Barisal",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "136",
//       name: "Dr. Mahmudul K",
//       gender: "Male",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "Eye Specialist",
//       experience_years: 19,
//       bmdc_registration: "K171732",
//       about:
//         "Dr. Mahmudul K is a highly experienced eye specialist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Kushtia Main Road",
//           contact: "01946976555",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: ["Vision Checkup", "Cataract Surgery", "Glaucoma Treatment"],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Kushtia",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "137",
//       name: "Dr. Sabrina L",
//       gender: "Female",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "Kidney Specialist",
//       experience_years: 5,
//       bmdc_registration: "L203044",
//       about:
//         "Dr. Sabrina L is a highly experienced kidney specialist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Chattogram Main Road",
//           contact: "01624554993",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: ["Kidney Disease", "Dialysis", "Urinary Tract Infections"],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Chattogram",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "138",
//       name: "Dr. Mahmudul M",
//       gender: "Male",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "Kidney Specialist",
//       experience_years: 5,
//       bmdc_registration: "M603329",
//       about:
//         "Dr. Mahmudul M is a highly experienced kidney specialist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Mymensingh Main Road",
//           contact: "01561059682",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: ["Kidney Disease", "Dialysis", "Urinary Tract Infections"],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Mymensingh",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "139",
//       name: "Dr. Sabrina N",
//       gender: "Female",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "Child Specialist",
//       experience_years: 16,
//       bmdc_registration: "N418897",
//       about:
//         "Dr. Sabrina N is a highly experienced child specialist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Barisal Main Road",
//           contact: "01624803850",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: [
//         "Child Growth Monitoring",
//         "Vaccination",
//         "Pediatric Nutrition",
//       ],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Barisal",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "140",
//       name: "Dr. Mahmudul O",
//       gender: "Male",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "Child Specialist",
//       experience_years: 9,
//       bmdc_registration: "O765671",
//       about:
//         "Dr. Mahmudul O is a highly experienced child specialist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Kushtia Main Road",
//           contact: "01541577186",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: [
//         "Child Growth Monitoring",
//         "Vaccination",
//         "Pediatric Nutrition",
//       ],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Kushtia",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "141",
//       name: "Dr. Sabrina P",
//       gender: "Female",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "Internal Medicine Specialist",
//       experience_years: 19,
//       bmdc_registration: "P238023",
//       about:
//         "Dr. Sabrina P is a highly experienced internal medicine specialist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Rangpur Main Road",
//           contact: "01940327442",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: ["Diabetes", "Hypertension", "Liver Disease"],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Rangpur",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "142",
//       name: "Dr. Mahmudul Q",
//       gender: "Male",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "Child Specialist",
//       experience_years: 16,
//       bmdc_registration: "Q602950",
//       about:
//         "Dr. Mahmudul Q is a highly experienced child specialist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Rajshahi Main Road",
//           contact: "01858798469",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: [
//         "Child Growth Monitoring",
//         "Vaccination",
//         "Pediatric Nutrition",
//       ],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Rajshahi",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "143",
//       name: "Dr. Sabrina R",
//       gender: "Female",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "Eye Specialist",
//       experience_years: 19,
//       bmdc_registration: "R233725",
//       about:
//         "Dr. Sabrina R is a highly experienced eye specialist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Rajshahi Main Road",
//           contact: "01832831609",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: ["Vision Checkup", "Cataract Surgery", "Glaucoma Treatment"],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Rajshahi",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "144",
//       name: "Dr. Mahmudul S",
//       gender: "Male",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "Child Specialist",
//       experience_years: 6,
//       bmdc_registration: "S140982",
//       about:
//         "Dr. Mahmudul S is a highly experienced child specialist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Khulna Main Road",
//           contact: "01740504635",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: [
//         "Child Growth Monitoring",
//         "Vaccination",
//         "Pediatric Nutrition",
//       ],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Khulna",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "145",
//       name: "Dr. Sabrina T",
//       gender: "Female",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "Dermatologist",
//       experience_years: 9,
//       bmdc_registration: "T148060",
//       about:
//         "Dr. Sabrina T is a highly experienced dermatologist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Rangpur Main Road",
//           contact: "01999885905",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: ["Acne Treatment", "Laser Therapy", "Hair Loss"],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Rangpur",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "146",
//       name: "Dr. Mahmudul U",
//       gender: "Male",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "Internal Medicine Specialist",
//       experience_years: 15,
//       bmdc_registration: "U440722",
//       about:
//         "Dr. Mahmudul U is a highly experienced internal medicine specialist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Sylhet Main Road",
//           contact: "01684758491",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: ["Diabetes", "Hypertension", "Liver Disease"],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Sylhet",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "147",
//       name: "Dr. Sabrina V",
//       gender: "Female",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "Child Specialist",
//       experience_years: 9,
//       bmdc_registration: "V602246",
//       about:
//         "Dr. Sabrina V is a highly experienced child specialist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Chattogram Main Road",
//           contact: "01696268838",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: [
//         "Child Growth Monitoring",
//         "Vaccination",
//         "Pediatric Nutrition",
//       ],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Chattogram",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "148",
//       name: "Dr. Mahmudul W",
//       gender: "Male",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "Eye Specialist",
//       experience_years: 10,
//       bmdc_registration: "W758472",
//       about:
//         "Dr. Mahmudul W is a highly experienced eye specialist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Rajshahi Main Road",
//           contact: "01674687641",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: ["Vision Checkup", "Cataract Surgery", "Glaucoma Treatment"],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Rajshahi",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//     {
//       id: "149",
//       name: "Dr. Sabrina X",
//       gender: "Female",
//       degrees: ["MBBS", "MD (Dermatology)"],
//       specialization: "ENT Specialist",
//       experience_years: 13,
//       bmdc_registration: "X428681",
//       about:
//         "Dr. Sabrina X is a highly experienced ent specialist known for excellent care and advanced treatments.",
//       chamber: [
//         {
//           name: "Skin & Laser Clinic",
//           address: "Dhaka Main Road",
//           contact: "01733470765",
//           availability: "Saturday to Wednesday, 2 PM - 5 PM",
//         },
//       ],
//       services: ["Ear Infection", "Sinus Treatment", "Tonsil Surgery"],
//       work_experience: [
//         {
//           title: "Consultant Dermatologist",
//           institution: "Sylhet MAG Osmani Medical College",
//         },
//       ],
//       education: [
//         "MBBS - Bachelor of Medicine and Bachelor of Surgery",
//         "MD - Doctor of Medicine in Dermatology",
//       ],
//       location: "Dhaka",
//       availability: "Afternoon (2 PM - 5 PM)",
//     },
//   ],
// ];

// export default doctorList;
