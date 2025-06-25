import Form from "./form";
import React from "react";
import Login from "./login";
import Signup from "./signup";
import PreSignup from "./PreSignup";
import {Route,Routes} from "react-router-dom"
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Form/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/presignup" element={<PreSignup/>}/>
    </Routes>
    
    </>
  )
}

export default App;
