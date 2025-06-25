import {Route,Routes,useLocation} from "react-router-dom"
import Home from "./components/pages/Home/Home";
import DisplayStudentDetails from "./components/pages/StudentDetails/DisplayStudentDetails";
import DisplayFullDetail from "./components/pages/StudentDetails/DisplayFullDetail";
import CompanyRequirements from "./components/pages/CompanyRequirements/CompanyRequirements";
import AddResult from "./components/pages/AddResult/AddResult";
import Notification from "./components/pages/Notification/Notification";
import { Navbar } from "./components/Header/navbar";
import About from "./components/pages/about/About";
import Login from "./components/pages/Login_Signup/login";
import ContactUs from "./components/pages/ContactUs/ContactUs";
import PlacementStats from "./components/pages/statistics/Stats";
import CompanyProfile from "./components/pages/CompanyProfile/CompanyProfile";
import SignUp from "./components/pages/Login_Signup/SignUp";
function App() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login" || location.pathname === "/signup";
  return (
    //every route must be added here if we need to render any sort of component to maintain single page
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/companyRequirements" element={<CompanyRequirements/>}/>
      <Route path="/studentDetails" element={<DisplayStudentDetails/>}/>
      <Route path="/fullDetails" element={<DisplayFullDetail/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/uploadResult" element={<AddResult/>} />
      <Route path="/sendNotification" element={<Notification/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/contact-us" element={<ContactUs/>}/>
      <Route path="/stats" element={<PlacementStats/>}/>
      <Route path="/profile" element={<CompanyProfile/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </>   
  );
}
export default App