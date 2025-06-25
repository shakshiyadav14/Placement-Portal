import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
export const StoreContext = createContext(null);


const StoreContextProvider = (props) => {
  // api req for companies will be made here
  const companies1 = [
    {
      job_id: "G001",
      companyImage: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      name: "Google",
      ctc: "63.5 LPA",
      gender: "Both",
      last_date: "15-01-2025",
      cgpa: "8.0",
      backlogs: "No Backlog Allowed",
      branch: "CS, IT",
      job_profile: "Placement",
      applied: true,
      isBonus: true,
      group_disscussion: true,
      tech_rounds: 3,
      result: "Declared",
      phoneNumber: "+1-800-555-1234",
      email: "recruitment@google.com",
      batch: "2025",
    },
    {
      job_id: "JPM001",
      companyImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAe1BMVEX///8AAACSkpK8vLyXl5fU1NSZmZn6+vp/f3+NjY3v7+/Z2dn29va5ubnExMS2traHh4eoqKji4uJaWlrl5eVnZ2dxcXENDg2wsLBbW1vKyspJSUlOTk44ODhERESkpKRpaWkYGBgeHh4oKCh3d3cxMTElJSU1NjVLTEtiy6/LAAAGhElEQVR4nO2aa3uiPBCGiQpIQE4iKipoq939/7/wzfngoe3r1l5b97m/1ISAmYfJzCQ2CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDNDpdFpy2N9U9Y1YV5IkojuJijC2w6vRaBJF0ai+eFDFuiejJPyeaX8pNBqqOSFkXQ2RNqySXT1T4bhhH8i808OLoSp5T3v+nEaMq4b0/MIPIWLTj/yuCesq5cdu59uccmsJPXvGiFw+5CcxuZw+N2mqG2srCCMk18xd8s7JI2f5WD7SIOD2NboRkpa3/fFjsntyDRLWGnQjJGLtj73xm3705Bp0bkQISbBg7Y07vCarZ9eg5jFfN5gGIiS4WbAkwld8DSg9D5xXyShVybc5mIfG7Obs8xb8OR9qwJ1/qxtMg+DEOo52dMy85EyDfM+j5HKfq/aR1R9Jwr+lGc23prsu37ievwcu15SQBe9My18i7u6OSpKsbdvp9NiIa5tdP+2Cr+Z/+0FQ+OlxTFJfg5pFyCGt04pVGbLqGIaKmUgyeatWkH1NnwbxmHVUQXxgZQrrPBJyGtf1eGfSUcaKF9aYiWvkan3ycA06t8U1iP30+HsXeBqwtXKQnhzv7KLhT6mZnAdhBZeGqfJLrAMu8ivvZSUWK89e5A0HN/Qyt0pYlo66ThRpyVcZr/hUXtDeKzQQPSY9NmTlaUCd4al1GK5B9/slDGgvB3R2HE+3i3bSyE41mcFxv3jJa9k+1v3ki6PFRxpkrPFmLgkNRHqcqZ6SxJ4GLG0czHAWOvbyU86XuJh7/CJs4KtehcOxuZsbqJY7l0O5hNBAq87nQ744JHykwdb7SqGBSI+96hGr1mrA9dmb4VNTX3ENSCGt6Kh0F/2I1Hxmhh9i/U3W2YQGuljlIXl1t7lXeV+D7pevutQgVKuXMRN/rQY8fI3McLsZERo4e9Dc0aqxrzysdLC90EAHh62IoV/KDQ22wzAk/H2/Ru7ikxoEryY6b8QLtBrwPaepKgOWGkS0lzZvnQcVjgbcJ5aOPoL0XAP9Jtpv02C3b9tjMuSNf0lpYNJjLeOC1YB4nrriIopPuVFDMj7zg1fva2iaJ+ca6Axz/La1UF4frTQw6bGUbV+DwgwvzBvOnTDPSR2/SL0YklV7nhdP5xrow4nv02B6fbTSQJ4YBCoiOhrElxqQqxoETrqZOZ5OuYm7gl6uBa1B+7dowJcwi1IzFfVvabC66QdBac1aWDfoTNq9iIkP1ODKlu8TGqj02Ct3vhUPKi8eeBrEJx0gQrVTCGTJSGrd+2ANMhOGk7v8QE6x0pWe1cDPXDw3SvsuNBALe1cVqyPpTRm6tjnw4RosbJidElvzKT6jQcA3NWaSVsiRJ2lpFLmiQUDZ5dO+ssfUsVNEhM7nCw2K4I9xj0XWxvsM72jQGQ1EuNPVkPWD1Mspc6I3DJcahO16VftVAY8yJ335wRqsnGStV2w8NuVg6WvQFLZIyM12Rcyrce5QeqydU6bYClIQWxsrUy4NyRy7ReZhX1bWZ3uE4+XivYexTc65Wl2x3d6It9d7g408gz1eHdlQJu5QdzfEHi6wW19ck5y3Prm6+eN7SlFlxuLoloUbym8SeVJHmQXxK847sXrTN2UJt1TNXR50mLe0dby4ebEHGNRKIzYDupWbU6bsQJZKDnkm7zgXq7bXed1QGrvLQTwoSdOI3cj1IGuyZ98qfus5iMUQy9lF56X1/4cvhr6rw8g4a65cb7wXBRrjbS+VX5jgEa3Fhb2ya7EUf2L5cxRjcxQzS3dk3lHarJZkLd81seiI/ub0vW3N+VilutpM5klyoNSM69XbI65b3E96lKbOI+3bUzm/tBhrCpk6mhPZqbg2492zQjlxo1JLMVM3zLTvjOfi4fpEMJiZZ850+G2Jz1y92LR9Xfbyx08atW2VBbG5mwllGrPLHz3vIM4yz6Gym+51z6kNbd4/V85ez0TYvDv8OYlX84MnQv7xPU9InNVhl4+LoTyRmxXJM+MvldllFfn8LM4CQGmLjX8F59RdUnz5jwZ/PR3xqkZeN/7Uf2K5m/rMD+i/txTEDsOxOl3uvvWH5r8EXndPQpplNKz6W0e4z0462up9QNR8PPxZiWnTNPTPt4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/BT+A4o9R41uccLNAAAAAElFTkSuQmCC",
      name: "JPMorgan",
      ctc: "63.5 LPA",
      gender: "Both",
      last_date: "15-01-2025",
      cgpa: "8.0",
      backlogs: "No Backlog Allowed",
      branch: "CS, IT, ECE",
      job_profile: "Placement",
      applied: false,
      isBonus: false,
      group_disscussion: true,
      tech_rounds: 2,
      result: "Pending",
      phoneNumber: "+1-800-555-5678",
      email: "careers@jpmorgan.com",
      batch: "2025",
    },
    {
      job_id: "A001",
      companyImage: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_logo.svg",
      name: "Adobe",
      ctc: "63.5 LPA",
      gender: "Both",
      last_date: "15-01-2025",
      cgpa: "8.0",
      backlogs: "No Backlog Allowed",
      branch: "CS, IT",
      job_profile: "Placement",
      applied: true,
      isBonus: true,
      group_disscussion: true,
      tech_rounds: 2,
      result: "Declared",
      phoneNumber: "+1-800-555-8765",
      email: "hr@adobe.com",
      batch: "2025",
    },
    {
      job_id: "M001",
      companyImage: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      name: "Microsoft",
      ctc: "63.5 LPA",
      gender: "Both",
      last_date: "15-01-2025",
      cgpa: "8.0",
      backlogs: "No Backlog Allowed",
      branch: "CS, IT",
      job_profile: "Placement",
      applied: false,
      isBonus: true,
      group_disscussion: true,
      tech_rounds: 3,
      result: "Pending",
      phoneNumber: "+1-800-555-9999",
      email: "jobs@microsoft.com",
      batch: "2025",
    },
    {
      job_id: "V001",
      companyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png",
      name: "VISA",
      ctc: "32.5 LPA",
      gender: "Both",
      last_date: "15-01-2025",
      cgpa: "8.0",
      backlogs: "No Backlog Allowed",
      branch: "CS, IT",
      job_profile: "Placement",
      applied: true,
      isBonus: false,
      group_disscussion: false,
      tech_rounds: 2,
      result: "Declared",
      phoneNumber: "+1-800-555-4321",
      email: "apply@visa.com",
      batch: "2025",
    },
    {
      job_id: "S001",
      companyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/188px-SAP_2011_logo.svg.png",
      name: "SAP Labs",
      ctc: "27 LPA",
      gender: "Both",
      last_date: "15-01-2025",
      cgpa: "7.5",
      backlogs: "No Backlog Allowed",
      branch: "CS, IT, ECE, EE",
      job_profile: "Placement",
      applied: false,
      isBonus: true,
      group_disscussion: true,
      tech_rounds: 3,
      result: "Pending",
      phoneNumber: "+1-800-555-5432",
      email: "careers@sap.com",
      batch: "2025",
    },
    {
      job_id: "T001",
      companyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/375px-Tata_Consultancy_Services_Logo.svg.png",
      name: "TCS",
      ctc: "6 LPA",
      gender: "Both",
      last_date: "15-01-2025",
      cgpa: "6.0",
      backlogs: "No Backlog Allowed",
      branch: "CS, IT",
      job_profile: "Placement, Intern",
      applied: true,
      isBonus: false,
      group_disscussion: false,
      tech_rounds: 1,
      result: "Declared",
      phoneNumber: "+1-800-555-9876",
      email: "apply@tcs.com",
      batch: "2025",
    },
    {
      job_id: "H001",
      companyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Hero_MotoCorp.svg/270px-Hero_MotoCorp.svg.png",
      name: "Hero",
      ctc: "12 LPA",
      gender: "Both",
      last_date: "15-01-2025",
      cgpa: "6.5",
      backlogs: "No Backlog Allowed",
      branch: "ME",
      job_profile: "Placement, Intern",
      applied: false,
      isBonus: true,
      group_disscussion: true,
      tech_rounds: 2,
      result: "Pending",
      phoneNumber: "+1-800-555-6543",
      email: "jobs@heromotocorp.com",
      batch: "2025",
    },
  ];
  const [companies, setCompany] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const company_data = await axios.post('http://localhost:5000/company/getAllCompany');

        setCompany(company_data.data);
        console.log(company_data.data);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  // companies in which I have applied api req /studentcompany roll no should be passed in the request
  const appliedCompanies = [
    {
      companyImage: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_logo.svg",
      name: "Adobe",
      ctc: "63.5 LPA",
      gender: "Both",
      last_date: "15-01-2025",
      cgpa: "8.0",
      backlogs: "No Backlog Allowed",
      branch: "CS, IT",
      job_profile: "Placement",
      job_id: "ADOBE321",
      email: "careers@adobe.com",
      phoneNumber: "+1 408-536-6000",
      batch: "2025",
      isBonus: true,
      group_disscussion: false,
      tech_rounds: 4,
      result: "Declared",
      applied: true,
    },
    {
      companyImage: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      name: "Google",
      ctc: "63.5 LPA",
      gender: "Both",
      last_date: "15-01-2025",
      cgpa: "8.0",
      backlogs: "No Backlog Allowed",
      branch: "CS, IT",
      job_profile: "Placement",
      job_id: "GOOG123",
      email: "careers@google.com",
      phoneNumber: "+1 650-253-0000",
      batch: "2025",
      isBonus: true,
      group_disscussion: true,
      tech_rounds: 3,
      result: "Declared",
      applied: true,
    },
    {
      companyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png",
      name: "VISA",
      ctc: "32.5 LPA",
      gender: "Both",
      last_date: "15-01-2025",
      cgpa: "8.0",
      backlogs: "No Backlog Allowed",
      branch: "CS, IT",
      job_profile: "Placement",
      job_id: "VISA2025",
      email: "careers@visa.com",
      phoneNumber: "+1 650-432-3200",
      batch: "2025",
      isBonus: false,
      group_disscussion: false,
      tech_rounds: 2,
      result: "Declared",
      applied: true,
    },
    {
      companyImage: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      name: "Microsoft",
      ctc: "63.5 LPA",
      gender: "Both",
      last_date: "15-01-2025",
      cgpa: "8.0",
      backlogs: "No Backlog Allowed",
      branch: "CS, IT",
      job_profile: "Placement",
      job_id: "MSFT001",
      email: "careers@microsoft.com",
      phoneNumber: "+1 425-882-8080",
      batch: "2025",
      isBonus: true,
      group_disscussion: true,
      tech_rounds: 3,
      result: "Pending",
      applied: false,
    },
    {
      companyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/J_P_Morgan_Logo_2008.svg/450px-J_P_Morgan_Logo_2008.svg.png",
      name: "JPMorgan",
      ctc: "63.5 LPA",
      gender: "Both",
      last_date: "15-01-2025",
      cgpa: "8.0",
      backlogs: "No Backlog Allowed",
      branch: "CS, IT, ECE",
      job_profile: "Placement",
      job_id: "JPM001",
      email: "careers@jpmorgan.com",
      phoneNumber: "+1 212-270-6000",
      batch: "2025",
      isBonus: false,
      group_disscussion: true,
      tech_rounds: 2,
      result: "Pending",
      applied: false,
    },
  ];


  // api req for userProfile
  const [userData, setUserData] = useState({
    name: "Sameer",
    rollNo: "2213055",
    personal_email: "sameermeel01@gmail.com",
    college_email: "12213055@nitkkr.ac.in",
    phoneNumber: "9350367478",
    gender: "Male",
    batch: "2022-26",
    cgpa: "9.2",
    backlogs: "No",
    branch: "IT",
    familyIncome: ">1Lac",
    category: 'Gen',
    studentImage: null,
    isDisabled: "No",
    password: "sameer123$%^%",
  });

  // api req for the result of all copnies whose result declared till now
  const result = [
    {
      name: "Harshit Anand",
      rollNo: "12213053",
      branch: "IT",
      job_profile: "Intern",
      role: "SDE",
      location: "Hydreabad"
    },
    {
      name: "Sameer Singh",
      rollNo: "12213054",
      branch: "IT",
      job_profile: "Intern",
      role: "SDE",
      location: "Hydreabad"
    },
    {
      name: "Sameer",
      rollNo: "12213055",
      branch: "IT",
      job_profile: "Intern",
      role: "SDE",
      location: "Hydreabad"

    }
  ];
  //api req for result slider on profile
  const result_for_profile = [
    {
      name: "Harshit Anand",
      rollNo: "12213053",
      studentImage: "/images/Harshit.jpg",
      companyImage: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      job_profile: "Placement",
      role: "SDE",
      batch: "2022-26",
    },
    {
      name: "Sameer Singh",
      rollNo: "12213054",
      studentImage: "/images/profle.jpg",
      companyImage: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_logo.svg",
      job_profile: "Placement",
      role: "SDE",
      batch: "2022-26",
    },
    {
      name: "Sameer",
      rollNo: "12213055",
      studentImage: "/images/Sameer.jpg",
      companyImage: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      job_profile: "Placement",
      role: "SDE",
      batch: "2022-26",
    },
    {
      name: "Richa",
      rollNo: "12213002",
      studentImage: "/images/Richa.jpg",
      companyImage: "data:image/png;base64,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",
      job_profile: "Placement",
      role: "SDE",
      batch: "2022-26",
    }
  ]

  // api req for the copanies whose result is decreald
  const resultDeclaredCompanies = [
    {
      name: 'Google',
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      job_id: "1234",
    },
    {
      name: 'J P Morgan',
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/J_P_Morgan_Logo_2008.svg/450px-J_P_Morgan_Logo_2008.svg.png",
      job_id: "1234",
    },
    {
      name: 'Microsoft',
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      job_id: "1234",
    },
  ];

  // api req for updating user's data
  const [isChange, setIsChange] = useState(true);
  useEffect(() => {
    // req for changing the data -> send {userData} in the request
    setIsChange(false);
  }, [isChange]);

  const resultdata = [
    {
      companyImage: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png",
      name: "Google",
      result: "Yes",
    },
    {
      companyImage: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Linkedin_Logo.png",
      name: "LinkedIn",
      value: "No",
    },
    {
      companyImage: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      name: "Apple",
      value: "Yes",
    },
    {
      companyImage: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      name: "Microsoft",
      value: "No",
    },
    {
      companyImage: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Amazon_icon.png",
      name: "Amazon",
      value: "Yes",
    },
  ];

  const [contactUsInfo, setContactUsInfo] = useState({
    name: "",
    email: "",
    message: "",
  });
  useEffect(() => {
    // api call for contact us to send email
    // console.log(contactUsInfo);

  }, [contactUsInfo]);


  // all the objects which declared in the context must be created into a single object
  const contextValue = {
    companies,
    appliedCompanies,
    resultdata,
    setUserData,
    setIsChange,
    result_for_profile,
    userData,
    result,
    resultDeclaredCompanies,
    contactUsInfo,
    setContactUsInfo,
  }
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider
