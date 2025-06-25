import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const FullDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const student = location.state?.student || {}; // Ensure safe access

  const handleClose = () => {
    navigate(-1, { replace: true }); // Replace to avoid history stacking issues
  };

  if (!location.state?.student) {
    return (
      <div className="fixed inset-0 bg-gray-900 flex justify-center items-center z-10">
        <div className="bg-gray-900 w-4/5 h-4/5 rounded-lg p-8 shadow-[0_0_20px_10px_rgba(61,104,232,0.5)] flex flex-col justify-center items-center border border-gray-700">
          <h1 className="text-2xl font-bold text-white mb-4">No Student Selected</h1>
          <button
            className="px-4 py-2 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600"
            onClick={handleClose}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gray-900 flex justify-center items-center z-10">
      <div
        className="bg-gray-900 w-4/5 h-4/5 rounded-lg p-8 shadow-[0_0_20px_10px_rgba(61,104,232,0.5)] overflow-y-auto relative border border-gray-700"
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-red-500 text-lg font-bold hover:text-red-700 transition-all"
          onClick={handleClose}
        >
          ✕
        </button>

        {/* Student Image & Name */}
        <div className="flex flex-col items-center mb-8">
          <img
            src={student.studentImage || "https://via.placeholder.com/150"}
            alt={`${student.name || "Student"} Profile`}
            className="w-40 h-40 object-cover rounded-md shadow-md"
          />
          <h2 className="text-4xl font-extrabold text-white mt-4">{student.name || "Unknown Name"}</h2>
        </div>

        {/* Student Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
          <p><strong className="font-semibold">Roll No:</strong> {student.rollNo || "N/A"}</p>
          <p><strong className="font-semibold">Email:</strong> {student.personal_email || "N/A"}</p>
          <p><strong className="font-semibold">Phone:</strong> {student.phoneNumber || "N/A"}</p>
          <p><strong className="font-semibold">Gender:</strong> {student.gender || "N/A"}</p>
          <p><strong className="font-semibold">Branch:</strong> {student.branch || "N/A"}</p>
          <p><strong className="font-semibold">CGPA:</strong> {student.cgpa || "N/A"}</p>
          <p><strong className="font-semibold">Batch:</strong> {student.batch || "N/A"}</p>
          <p><strong className="font-semibold">Backlogs:</strong> {student.backlogs || "N/A"}</p>
          <p><strong className="font-semibold">Family Income:</strong> {student.familyIncome || "N/A"}</p>
        </div>
      </div>
    </div>
  );
};

export default FullDetails;
