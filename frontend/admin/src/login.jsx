import React, { useState } from "react";

const Login = () => {
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
    console.log("Login Data:", formData);

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
        alert("login successfull");
      } else {
        alert("error");
      }
    } catch (error) {
      console.error("Error", error);
      alert("there is an error in filling the details");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
      <div className="flex bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full items-center justify-center">
        {/* Left Side - Image & Text */}
        <div className="w-1/2 relative hidden md:block">
          <img
            src="./logo.png"
            alt="Background"
            className="h-full w-full object-cover opacity-80"
          />
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-white">Log in</h2>
          <p className="text-gray-400 mt-2">
            Don't have an account?{" "}
            <a href="#" className="text-purple-400 hover:underline">
              Sign up
            </a>
          </p>

          {/* Form */}
          <form className="mt-6" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="email"
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

            {/* Remember Me & Forgot Password */}
            <div className="mt-4 flex items-center justify-between">
              <label className="flex items-center text-gray-400">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-purple-400 bg-gray-700 border-gray-600 focus:ring-purple-400"
                />
                <span className="ml-2 text-sm">Remember me</span>
              </label>
              <a href="#" className="text-sm text-purple-400 hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-6 bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded transition"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
