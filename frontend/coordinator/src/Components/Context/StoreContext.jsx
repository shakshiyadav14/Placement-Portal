import React, { createContext, useState, useEffect } from 'react'

export const StoreContext = createContext(null);


// all the api class are in Companies, students and resutl folder

const StoreContextProvider = (props) => {
    const [data, setData] = useState({});

    const companies = [
        {   
            name: "Google",
            ctc: "63.5 LPA",
            job_id: "G001",
            email: "hr@google.com",
            location: ["Noida", "Banglore"],
            job_profile: ["Full Time", "Research Intern"],
            onlyPwd : "No",
            OA : "Yes",
            aptitude: "Yes",
            hr_rounds: "Yes",
            description: "This is description.",
            phoneNumber: "+1-800-555-1234",
            gender: "Both",
            batch: "2025",
            cgpa: "8.0",
            backlogs: "No Backlog Allowed",
            branch: ["CS", "IT"],
            companyImage: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
            last_date: "15-01-2025",
            group_disscussion: true,
            tech_rounds: 3,
            isBonus: "No",
            approved: "Yes",
            result: "No",
        },
        {
            job_id: "JPM001",
            email: "hr@google.com",
            location: ["Noida", "Banglore"],
            job_profile: ["Full Time", "Research Intern"],
            onlyPwd : "No",
            OA : "Yes",
            aptitude: "Yes",
            hr_rounds: "Yes",
            description: "This is description.",
            companyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/J_P_Morgan_Logo_2008.svg/450px-J_P_Morgan_Logo_2008.svg.png",
            name: "JPMorgan",
            ctc: "63.5 LPA",
            gender: "Both",
            last_date: "15-01-2025",
            cgpa: "8.0",
            backlogs: "No Backlog Allowed",
            branch: ["CS", "IT"],
            group_disscussion: true,
            tech_rounds: 2,
            phoneNumber: "+1-800-555-5678",
            batch: "2025",
            isBonus: "No",
            approved: "Yes",
            result: "No",
        },
        {
            job_id: "A001",
             email: "hr@google.com",
            location: ["Noida", "Banglore"],
            job_profile: ["Full Time", "Research Intern"],
            onlyPwd : "No",
            OA : "Yes",
            aptitude: "Yes",
            hr_rounds: "Yes",
            description: "This is description.",
            companyImage: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_logo.svg",
            name: "Adobe",
            ctc: "63.5 LPA",
            gender: "Both",
            last_date: "15-01-2025",
            cgpa: "8.0",
            backlogs: "No Backlog Allowed",
            branch: "CS, IT",
            job_role: ["CS", "IT"],
            group_disscussion: true,
            tech_rounds: 2,
            phoneNumber: "+1-800-555-8765",
            batch: "2025",
            isBonus: "No",
            approved: "Yes",
            result: "No",
        },
        {
            job_id: "M001",
            email: "hr@google.com",
            location: ["Noida", "Banglore"],
            job_profile: ["Full Time", "Research Intern"],
            onlyPwd : "No",
            OA : "Yes",
            aptitude: "Yes",
            hr_rounds: "Yes",
            description: "This is description.",
            companyImage: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
            name: "Microsoft",
            ctc: "63.5 LPA",
            gender: "Both",
            last_date: "15-01-2025",
            cgpa: "8.0",
            backlogs: "No Backlog Allowed",
            branch: ["CS", "IT"],
            group_disscussion: true,
            tech_rounds: 3,
            phoneNumber: "+1-800-555-9999",
            email: "jobs@microsoft.com",
            batch: "2025",
            isBonus: "No",
            approved: "No",
            result: "No",
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
            job_role: "Placement",
            applied: true,
            group_disscussion: false,
            tech_rounds: 2,
            result: "Declared",
            phoneNumber: "+1-800-555-4321",
            email: "apply@visa.com",
            batch: "2025",
            isBonus: "No",
            approved: "No",
            result: "No",
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
            job_role: "Placement",
            applied: false,
            group_disscussion: true,
            tech_rounds: 3,
            result: "Pending",
            phoneNumber: "+1-800-555-5432",
            email: "careers@sap.com",
            batch: "2025",
            isBonus: "No",
            approved: "No",
            result: "No",
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
            job_role: "Placement, Intern",
            applied: true,
            group_disscussion: false,
            tech_rounds: 1,
            result: "Declared",
            phoneNumber: "+1-800-555-9876",
            email: "apply@tcs.com",
            batch: "2025",
            isBonus: "No",
            approved: "No",
            result: "No",
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
            job_role: "Placement, Intern",
            applied: false,
            group_disscussion: true,
            tech_rounds: 2,
            result: "Pending",
            phoneNumber: "+1-800-555-6543",
            email: "jobs@heromotocorp.com",
            batch: "2025",
            isBonus: "No",
            approved: "No",
            result: "No",
        },
    ];

    const students = [
        {
            name: "Sameer Khobra",
            rollNo: "12213054",
            personal_email: "sameerkhobra474@gmail.com",
            college_email: "12213054@nitkkr.ac.in",
            phoneNumber: "0123456789",
            gender: "Male",
            batch: "2022-26",
            cgpa: 8.5,
            backlogs: "Nil",
            branch: "IT",
            familyIncome: ">=1Lac",
            category: "SC/ST",
            studentImage: "google.com",
            isDisabled: "No",
            approved: "Yes",
            github: "google.com",
            linkedin:"google.com",
            leetcode:"google.com",
            codechef:"google.com",
            codeforces:"google.com",
            gfg:"google.com",
            codingninja:"google.com",
            resume:"google.com",
        },
        {
            name: "Sameer",
            rollNo: "12213055",
            personal_email: "sameerkhobra474@gmail.com",
            college_email: "12213055@nitkkr.ac.in",
            phoneNumber: "0123456789",
            gender: "Male",
            batch: "2022-26",
            cgpa: 8.5,
            backlogs: "Nil",
            branch: "IT",
            familyIncome: ">=1Lac",
            category: "SC/ST",
            studentImage: "google.com",
            isDisabled: "No",
            approved: "No",
            github: "google.com",
            linkedin:"google.com",
            leetcode:"google.com",
            codechef:"google.com",
            codeforces:"google.com",
            gfg:"google.com",
            codingninja:"google.com",
            resume:"google.com",
        },
        {
            name: "Harshit Anand",
            rollNo: "12213053",
            personal_email: "sameerkhobra474@gmail.com",
            college_email: "12213053@nitkkr.ac.in",
            phoneNumber: "0123456789",
            gender: "Male",
            batch: "2022-26",
            cgpa: 8.5,
            backlogs: "Nil",
            branch: "IT",
            familyIncome: ">=1Lac",
            category: "SC/ST",
            studentImage: "google.com",
            isDisabled: "No",
            approved: "No",
            github: "google.com",
            linkedin:"google.com",
            leetcode:"google.com",
            codechef:"google.com",
            codeforces:"google.com",
            gfg:"google.com",
            codingninja:"google.com",
            resume:"google.com",
        },
    ]

    const results = [
        {
            companyName : "Google",
            approved : "Yes",
            students : [
                {
                    rollNo: "12213050",
                    name: "Sameer",
                    email: "sameer@gmail.com",
                    status:"Interview"
                },
                {
                    rollNo: "12213058",
                    name: "Mohit",
                    email:"mohit@gmai.com",
                    status:"Final"
                },
                {
                    rollNo: "12213057",
                    name: "Sumit",
                    email:"sumit@gmai.com",
                    status:"OA"
                },
                {
                    rollNo: "12213056",
                    name: "Anish",
                    email:"anish@gmai.com",
                    status:"Final"
                },
                {
                    rollNo: "12213055",
                    name: "Sameer",
                    email:"sam@gmai.com",
                    status:"OA"
                },
            ]
        },
        {
            companyName : "MicroSoft",
            approved : "No",
            students : [
                {
                    rollNo: "12213050",
                    name: "Sameer",
                    email: "sameer@gmail.com",
                    status:"Interview"
                },
                {
                    rollNo: "12213058",
                    name: "Mohit",
                    email:"mohit@gmai.com",
                    status:"Final"
                },
                {
                    rollNo: "12213057",
                    name: "Sumit",
                    email:"sumit@gmai.com",
                    status:"OA"
                },
                {
                    rollNo: "12213056",
                    name: "Anish",
                    email:"anish@gmai.com",
                    status:"Final"
                },
                {
                    rollNo: "12213055",
                    name: "Sameer",
                    email:"sam@gmai.com",
                    status:"OA"
                },
            ]
        },
        {
            companyName : "Visa",
            approved : "No",
            students : [
                {
                    rollNo: "12213050",
                    name: "Sameer",
                    email: "sameer@gmail.com",
                    status:"Interview"
                },
                {
                    rollNo: "12213058",
                    name: "Mohit",
                    email:"mohit@gmai.com",
                    status:"Final"
                },
                {
                    rollNo: "12213057",
                    name: "Sumit",
                    email:"sumit@gmai.com",
                    status:"OA"
                },
                {
                    rollNo: "12213056",
                    name: "Anish",
                    email:"anish@gmai.com",
                    status:"Final"
                },
                {
                    rollNo: "12213055",
                    name: "Sameer",
                    email:"sam@gmai.com",
                    status:"OA"
                },
            ]
        },
        {
            companyName : "Sap",
            approved : "No",
            students : [
                {
                    rollNo: "12213050",
                    name: "Sameer",
                    email: "sameer@gmail.com",
                    status:"Interview"
                },
                {
                    rollNo: "12213058",
                    name: "Mohit",
                    email:"mohit@gmai.com",
                    status:"Final"
                },
                {
                    rollNo: "12213057",
                    name: "Sumit",
                    email:"sumit@gmai.com",
                    status:"OA"
                },
                {
                    rollNo: "12213056",
                    name: "Anish",
                    email:"anish@gmai.com",
                    status:"Final"
                },
                {
                    rollNo: "12213055",
                    name: "Sameer",
                    email:"sam@gmai.com",
                    status:"OA"
                },
            ]
        },
        {
            companyName : "Nvidia",
            approved : "Yes",
            students : [
                {
                    rollNo: "12213050",
                    name: "Sameer",
                    email: "sameer@gmail.com",
                    status:"Interview"
                },
                {
                    rollNo: "12213058",
                    name: "Mohit",
                    email:"mohit@gmai.com",
                    status:"Final"
                },
                {
                    rollNo: "12213057",
                    name: "Sumit",
                    email:"sumit@gmai.com",
                    status:"OA"
                },
                {
                    rollNo: "12213056",
                    name: "Anish",
                    email:"anish@gmai.com",
                    status:"Final"
                },
                {
                    rollNo: "12213055",
                    name: "Sameer",
                    email:"sam@gmai.com",
                    status:"OA"
                },
            ]
        },
    ]
    // onchanging the data send the req acc to the type of approval wether it is for students, company or result
    const contextValue = {
        companies,
        students,
        results,
        data,
        setData

    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;
