import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PreSignup({ setAuth }) {
  const [superpassword, setSuperPassword] = useState("");
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setSuperPassword(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/auth/admin/presignup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ superpassword }),
      });

      const data = await response.json();

      if (data.success) {
        setAuth(true); // Update authentication state in `Signup`
        navigate("/signup"); // Redirect to Signup
      } else {
        alert("Incorrect password, try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error verifying password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
      <div className="flex bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full items-center justify-center">
        {/* Left Side - Image & Text */}
        <div className="w-1/2 relative hidden md:block">
          <img src="./logo.png" alt="Background" className="h-full w-full object-cover opacity-80" />
        </div>

        {/* Right Side - Super Admin Password Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-white">Super Admin Password</h2>
          <p className="text-gray-400 mt-2">
            Already have an account?{" "}
            <a href="/login" className="text-purple-400 hover:underline">
              Log in
            </a>
          </p>

          <form className="mt-6" onSubmit={handleSubmit}>
            <input
              type="password"
              name="superpassword"
              placeholder="Enter super admin password"
              value={superpassword}
              onChange={handleChange}
              className="w-full mt-4 p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-400"
            />

            <button
              type="submit"
              className="w-full mt-6 bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded transition"
            >
              Submit Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PreSignup;
