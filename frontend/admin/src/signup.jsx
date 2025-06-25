import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PreSignup from "./PreSignup";

const Signup = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Show PreSignup first, then allow access to Signup
  if (!isAuthenticated) {
    return <PreSignup setAuth={setIsAuthenticated} />;
  }

  // State for form data
  const [formData, setFormData] = useState({ email: "", password: "" });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);

    try {
      const response = await fetch("http://localhost:5000/auth/student/signUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert("Your account is successfully created");
        navigate("/login"); // Redirect to login page
      } else {
        alert("Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error during signup.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
      <div className="flex bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full items-center justify-center">
        {/* Left Side - Image & Text */}
        <div className="w-1/2 relative hidden md:block">
          <img src="./logo.png" alt="Background" className="h-full w-full object-cover opacity-80" />
        </div>

        {/* Right Side - Signup Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-white">Sign Up</h2>
          <p className="text-gray-400 mt-2">
            Already have an account?{" "}
            <a href="/login" className="text-purple-400 hover:underline">
              Log in
            </a>
          </p>

          <form className="mt-6" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-400"
            />

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-4 p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-400"
            />

            <button
              type="submit"
              className="w-full mt-6 bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded transition"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
