import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  // api req for setting company requirements
  const [CompanyReq,setCompanyReq] = useState({
          name : "",
          ctc : "",
          job_id : "",
          email : "",
          phoneNumber : "",
          gender : "", 
          batch : "",
          cgpa : "",
          backlogs : "",
          branch : [""],
          location : [""],
          job_profile : [""],
          companyImage : "",
          onlyPWD : "",
          last_date : "",
          group_disscussion : "",
          OA : "",
          aptitude : "",
          tech_rounds : "",
          hr_rounds : "",
          description : "",

  });
  // api req for updating company's requirements
  const [isChange, setIsChange] = useState(false);
  useEffect(() => {
    // req for changing the data -> send {companyRequirements} in the request
    const updateData = async () => {
      if(!isChange) return ;
      try{
        const token = localStorage.getItem("token");
        const res = await axios.post('http://localhost:5000/auth/company/updateReq', {CompanyReq}, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setCompanyReq(res.data.updatedCompany);
        // console.log(res.data.updatedCompany);
        
      }catch (error) {
        console.error("Error updatinig data:", error);
      }
    }
    updateData();
    setIsChange(false);
  }, [isChange]);
  
  //result silder data for profile
  const [result_for_profile, setResult_for_profile] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sliderResponse = await axios.post('http://localhost:5000/getdata/slider');
        setResult_for_profile(sliderResponse.data);

        const token = localStorage.getItem("token");
        const companyResponse = await axios.post('http://localhost:5000/company/getCompanyData', {}, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setCompanyReq(companyResponse.data.company);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  // useEffect(()=>{
  //   console.log(CompanyReq)
  // },[CompanyReq])

  // student applied in particular company
  const appliedStudents = [
    {
      name: "Harshit Anand",
      rollNo: "12213053",
      branch: "IT",
      cgpa: 9.5,
    },
    {
      name: "Sameer Singh",
      rollNo: "12213054",
      branch: "IT",
      cgpa: 9.2,
    },
    {
      name: "Sameer",
      rollNo: "12213055",
      branch: "IT",
      cgpa: 10,
    }
  ];

  //each student full details
  const studentDetails = {
    name: "Meetha",
    rollNo: "69",
    personal_email: "meetha@gmail.com",
    college_email: "maimeetha@gmail.com",
    phoneNumber: "6969696969",
    gender: "Rainbow",
    batch: "2026",
    cgpa: "6.9",
    backlogs: "Yes",
    branch: "IT",
    familyIncome: "69",
    category: 'XYZ',
    studentImage: 'https://nitkkr.ac.in/wp-content/uploads/2023/01/Parveen.jpg',
    isDisabled: "No",
  };

  // api request for result declared by comapny
  const [result, setResult] = useState([]);
  useEffect(() => {
    // formate
    // req  = {
    //     token : "token",
    //     students = result;
    // } in backend fetch company details from token and save the result accordingaly

    // console.log(result); send request
  }, [result]);

  // send notification
  const [notification, setNotification] = useState({});
  useEffect(() => {
    // console.log(notification); // send req {from,to[], message}
  }, [notification])

  // received Notification
  // const recNotis = [
  //     {
  //         from : "Admin",

  //     }
  // ]

  // all the objects which declared in the context must be created into a single object
  const contextValue = {
    appliedStudents,
    studentDetails,
    setIsChange,
    result_for_profile,
    CompanyReq,
    setCompanyReq,
    setResult,
    setNotification,
  }
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}
export default StoreContextProvider