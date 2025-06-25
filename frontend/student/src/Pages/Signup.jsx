import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    personal_email: "",
    college_email: "",
    phoneNumber: "",
    gender: "Male",
    batch: "",
    cgpa: "",
    backlogs: "Nil",
    branch: "CS",
    familyIncome: "<1Lac",
    category: "Gen",
    studentImage: "",
    password: "",
    isDisabled:"",
    resume: "",
    github: "",
    linkedin: "",
    leetcode: "",
    codechef: "",
    codeforces: "",
    gfg: "",
    codingninja: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);

    const response=await fetch("http://localhost:5000/auth/student/login",{
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-400">Full Name</label>
              <input
                type="text"
                name="name"
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-purple-400"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Roll Number */}
            <div>
              <label className="block text-gray-400">Roll Number</label>
              <input
                type="text"
                name="rollNo"
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-purple-400"
                value={formData.rollNo}
                onChange={handleChange}
                required
              />
            </div>
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
            <label className="block text-gray-400">Personal Email</label>
            <input
              type="email"
              name="personal_email"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-purple-400"
              value={formData.personal_email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mt-4">
            <label className="block text-gray-400">College Email</label>
            <input
              type="email"
              name="college_email"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-purple-400"
              value={formData.college_email}
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

          <div className="mt-4">
          <label className="block text-gray-400">Disable</label>
          <select
            name="isDisabled"
            className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-purple-400"
            value={formData.isDisabled}
            onChange={handleChange}
            required
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>


          {/* Resume Link */}
          <div className="mt-4">
            <label className="block text-gray-400">Resume (Google Drive / PDF URL)</label>
            <input
              type="url"
              name="resume"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-purple-400"
              value={formData.resume}
              onChange={handleChange}
            />
          </div>

          {/* Social & Coding Profiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-gray-400">GitHub</label>
              <input
                type="url"
                name="github"
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-purple-400"
                value={formData.github}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-gray-400">LinkedIn</label>
              <input
                type="url"
                name="linkedin"
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-purple-400"
                value={formData.linkedin}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-gray-400">LeetCode</label>
              <input
                type="url"
                name="leetcode"
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-purple-400"
                value={formData.leetcode}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-gray-400">CodeChef</label>
              <input
                type="url"
                name="codechef"
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-purple-400"
                value={formData.codechef}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-gray-400">Codeforces</label>
              <input
                type="url"
                name="codeforces"
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-purple-400"
                value={formData.codeforces}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-gray-400">GeeksforGeeks</label>
              <input
                type="url"
                name="gfg"
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-purple-400"
                value={formData.gfg}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-gray-400">Coding Ninjas</label>
            <input
              type="url"
              name="codingninja"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-purple-400"
              value={formData.codingninja}
              onChange={handleChange}
            />
          </div>
          
          <div className="mt-4">
            <label className="block text-gray-400">Image</label>
            <input
              type="url"
              name="studentImage"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-purple-400"
              value={formData.studentImage}
              onChange={handleChange}
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

export default Signup;
