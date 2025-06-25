import React, { useContext } from "react";
import { motion } from "framer-motion";
import { StoreContext } from "../Context/StoreContext";
import { useNavigate } from "react-router-dom";

const Student = () => {
  const { data, setData } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleUpdate = (field, value) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // send API req to change the student details
    alert("Changes saved");
    setData({});
    navigate(-1);
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-200 p-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-full max-w-3xl bg-gray-800 shadow-lg rounded-lg p-6"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <motion.h2
          className="text-3xl font-bold mb-6 text-white text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Student Details
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {Object.entries(data).map(([key, value]) => (
            <motion.div
              key={key}
              className="p-3 border-b border-gray-600"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <span className="font-semibold text-gray-300 capitalize">
                {key.replace("_", " ")}:
              </span>
              {[
                "studentImage",
                "github",
                "linkedin",
                "leetcode",
                "codechef",
                "codeforces",
                "gfg",
                "codingninja",
                "resume",
              ].includes(key) ? (
                <a
                  href={value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-blue-400 underline"
                >
                  Click to View
                </a>
              ) : (
                <span className="ml-2 text-gray-400">
                  {Array.isArray(value)
                    ? value.join(", ")
                    : value.toString()}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Radio Input Section */}
        <motion.div
          className="mt-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <label className="font-semibold text-gray-300">Approve:</label>
          <div className="flex space-x-6 mt-2">
            {["Yes", "No"].map((option) => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="approved"
                  value={option}
                  checked={data.approved === option}
                  onChange={(e) => handleUpdate("approved", e.target.value)}
                  className="appearance-none w-5 h-5 border border-gray-500 rounded-full checked:bg-blue-500 focus:ring focus:ring-blue-400"
                />
                <span className="text-gray-300">{option}</span>
              </label>
            ))}
          </div>
        </motion.div>

        {/* Submit Button */}
        <motion.div
          className="mt-6 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.button
            type="submit"
            onClick={handleSubmit}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
          >
            Submit
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Student;
