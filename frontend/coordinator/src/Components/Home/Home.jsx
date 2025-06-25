import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();
  const [navItems, setNavItems] = useState([]);
  const [buttons, setButtons] = useState(["COMPANIES", "STUDENTS", "RESULTS"]);

  const handleClick = (item) => {
    setButtons((prev) => prev.filter((btn) => btn !== item));
    setNavItems((prev) => [...prev, item]);
    navigate(`/${item}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Clear auth token
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-6 text-white">
      {/* Navigation Bar */}
      <div className="fixed top-0 left-0 w-full bg-gray-800 p-4 flex justify-between items-center shadow-md">
        {/* Dynamic Navigation Items */}
        <div className="flex space-x-4">
          {navItems.map((item) => (
            <motion.div
              key={item}
              className="px-4 py-2 bg-blue-500 text-white rounded-full shadow-lg text-sm capitalize"
              whileHover={{ scale: 1.1 }}
            >
              {item}
            </motion.div>
          ))}
        </div>

        {/* Logout Button */}
        <motion.button
          className="px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-700 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLogout}
        >
          Logout
        </motion.button>
      </div>

      {/* Heading */}
      <h1 className="text-2xl font-bold mt-16 mb-8">Select the section you want to approve</h1>

      {/* Circular Buttons */}
      <div className="flex flex-wrap justify-center gap-10 mt-4">
        {buttons.map((item) => (
          <motion.button
            key={item}
            className="w-48 h-48 flex items-center justify-center bg-gradient-to-r from-pink-500 to-red-500 text-white text-xl font-semibold rounded-full shadow-xl transition-all duration-300 hover:from-pink-600 hover:to-red-600 hover:shadow-2xl hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleClick(item)}
          >
            {item}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Home;
