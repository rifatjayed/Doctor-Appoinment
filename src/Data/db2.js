let doctorList = [
  {
    id: "5",
    name: "Dr. Kamal Uddin",
    img: "https://example.com/images/dr_kamal.jpg", // Add the doctor's image URL here
    fee: "1500 BDT",
    gender: "Male",
    degrees: ["MBBS", "MD (Dermatology)"],
    specialization: "Dermatologist",
    experience_years: 9,
    consultation_type: ["Face to Face", "Video Call/ Audio Call"],
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
    img: "https://example.com/images/dr_kamal.jpg", // Add the doctor's image URL here
    fee: "1500 BDT",
    gender: "Female",
    degrees: ["MBBS", "FCPS (Pediatrics)"],
    specialization: "Child Specialist",
    experience_years: 7,
    consultation_type: ["Face to Face", "Video Call/ Audio Call"],

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
    img: "https://example.com/images/dr_kamal.jpg", // Add the doctor's image URL here
    fee: "1500 BDT",
    gender: "Male",
    degrees: ["MBBS", "MS (ENT)"],
    specialization: "ENT Specialist",
    experience_years: 13,
    consultation_type: ["Face to Face"],

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
    img: "https://example.com/images/dr_kamal.jpg", // Add the doctor's image URL here
    fee: "1500 BDT",
    gender: "Female",
    degrees: ["MBBS", "MD (Medicine)"],
    specialization: "Internal Medicine Specialist",
    experience_years: 14,
    consultation_type: ["Face to Face"],

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
    img: "https://example.com/images/dr_kamal.jpg", // Add the doctor's image URL here
    fee: "1500 BDT",
    gender: "Male",
    degrees: ["MBBS", "MD (Nephrology)"],
    specialization: "Kidney Specialist",
    experience_years: 12,
    consultation_type: ["Video Call/ Audio Call"],

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
    img: "https://example.com/images/dr_kamal.jpg", // Add the doctor's image URL here
    fee: "1500 BDT",
    gender: "Female",
    degrees: ["MBBS", "FCPS (Ophthalmology)"],
    specialization: "Eye Specialist",
    experience_years: 10,
    consultation_type: ["Face to Face", "Video Call/ Audio Call"],

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
    img: "https://example.com/images/dr_kamal.jpg", // Add the doctor's image URL here
    fee: "1500 BDT",
    gender: "Male",
    degrees: ["MBBS", "MD (Dermatology)"],
    specialization: "Dermatologist",
    experience_years: 9,
    consultation_type: ["Face to Face", "Video Call/ Audio Call"],

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
    img: "https://example.com/images/dr_kamal.jpg", // Add the doctor's image URL here
    fee: "1500 BDT",
    gender: "Female",
    degrees: ["MBBS", "FCPS (Pediatrics)"],
    specialization: "Child Specialist",
    experience_years: 7,
    consultation_type: ["Face to Face", "Video Call/ Audio Call"],

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
    img: "https://example.com/images/dr_kamal.jpg", // Add the doctor's image URL here
    fee: "1500 BDT",
    gender: "Male",
    degrees: ["MBBS", "MS (ENT)"],
    specialization: "ENT Specialist",
    experience_years: 13,
    consultation_type: ["Face to Face"],

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
    img: "https://example.com/images/dr_kamal.jpg", // Add the doctor's image URL here
    fee: "1500 BDT",
    gender: "Female",
    degrees: ["MBBS", "MD (Medicine)"],
    specialization: "Internal Medicine Specialist",
    experience_years: 14,
    consultation_type: ["Video Call/ Audio Call"],

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
    img: "https://example.com/images/dr_kamal.jpg", // Add the doctor's image URL here
    fee: "1500 BDT",
    gender: "Male",
    degrees: ["MBBS", "MD (Nephrology)"],
    specialization: "Kidney Specialist",
    experience_years: 12,
    consultation_type: ["Face to Face", "Video Call/ Audio Call"],

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
    img: "https://example.com/images/dr_kamal.jpg", // Add the doctor's image URL here
    fee: "1500 BDT",
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
