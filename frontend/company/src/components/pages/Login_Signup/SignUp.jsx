import React, { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email:"",
    phoneNumber:"",
    password:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);

    const response=await fetch("http://localhost:5000/auth/student/signUp",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(formData),
    });

    const data=await response.json();

    if(data.success)
      {
        alert("Your account is successfully created.")
        navigate('/');
      }
      else{
        alert("Error, please try again")
      }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
      <div className="bg-gray-800 text-white rounded-lg shadow-lg p-8 w-full max-w-3xl">
        <h2 className="text-3xl font-semibold text-center">Sign Up</h2>
        <p className="text-gray-400 text-center mt-2">
          Already have an account?{" "}
          <a href="/login" className="text-purple-400 hover:underline">
            Log in
          </a>
        </p>

        <form onSubmit={handleSubmit} className="mt-6">
          {/* Name */}
            <div>
              <label className="block text-gray-400">Company Name</label>
              <input
                type="text"
                name="name"
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-purple-400"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          

          {/* Phone Number */}
          <div>
              <label className="block text-gray-400">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-purple-400"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
          

          {/* Emails */}
          <div className="mt-4">
            <label className="block text-gray-400">Company Email</label>
            <input
              type="email"
              name="personal_email"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-purple-400"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          

          {/* Password */}
          <div className="mt-4">
            <label className="block text-gray-400">Password</label>
            <input
              type="password"
              name="password"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-purple-400"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          

          {/* Submit Button */}
          <button className="w-full mt-6 bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded transition">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
