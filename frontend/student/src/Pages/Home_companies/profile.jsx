import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";

function ProfileButton() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setDropdownVisible((prev) => !prev);
  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownVisible(false);
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Clear auth token
    navigate("/login"); // Redirect to /login page
  };
  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);
    return () => document.removeEventListener("mousedown", closeDropdown);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        className="flex items-center space-x-2 focus:outline-none transition-transform duration-300 hover:scale-105"
        onClick={toggleDropdown}
      >
        <img
          src="/images/profle.jpg"
          alt="Profile"
          className="h-28 w-28 mx-24 rounded-full border-2 border-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-blue-500 hover:shadow-2xl hover:border-blue-500"
        />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute right-0 mt-2 w-48 z-20 bg-gray-700 text-white rounded-lg shadow-lg transition-all duration-300 ease-in-out transform ${
          dropdownVisible
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }`}
      >
        <ul className="py-2">
          <li
            className="flex items-center px-4 py-2 hover:bg-gray-800 cursor-pointer transition-all duration-300"
            onClick={() => navigate("/profile")}
          >
            <FaUser className="mr-2 text-blue-500" /> View Profile
          </li>
          
          <li
            className="flex items-center px-4 py-2 hover:bg-gray-800 cursor-pointer transition-all duration-300"
            onClick={handleLogout}
          >
            <FaSignOutAlt className="mr-2 text-red-500" /> Logout
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProfileButton;
