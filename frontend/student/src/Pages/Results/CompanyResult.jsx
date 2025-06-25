import React from "react";
import { useNavigate } from "react-router-dom";

const CompanyResult = ({ result }) => {
  const navigate = useNavigate();
  const handleClick = (student) => {
    navigate("/fullDetails", { state: { student } });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-black p-6">
      <div className="bg-gray-900 shadow-2xl rounded-2xl overflow-hidden w-full max-w-6xl border border-gray-700">
        <h1
          className={`text-4xl font-extrabold text-center py-6 tracking-wide uppercase shadow-md ${
            result.length > 0 ? "bg-green-700 text-white" : "bg-red-700 text-white"
          }`}
        >
          {result.length > 0 ? "Students Applied" : "No Students Applied"}
        </h1>
        {result.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto text-md bg-gray-800 text-white">
              <thead>
                <tr className="bg-gray-700 text-gray-300 border-b border-gray-600">
                  <th className="py-4 px-6 text-left font-semibold">S No.</th>
                  <th className="py-4 px-6 text-left font-semibold">Name</th>
                  <th className="py-4 px-6 text-left font-semibold">Roll No</th>
                  <th className="py-4 px-6 text-left font-semibold">Branch</th>
                  <th className="py-4 px-6 text-left font-semibold">CGPA</th>
                  <th className="py-4 px-6 text-center font-semibold">View Full Details</th>
                </tr>
              </thead>
              <tbody>
                {result.map((student, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-600 transition duration-300 ease-in-out hover:bg-gray-600 transform hover:scale-105"
                  >
                    <td className="py-4 px-6">{index + 1}</td>
                    <td className="py-4 px-6">{student.name}</td>
                    <td className="py-4 px-6">{student.rollNo}</td>
                    <td className="py-4 px-6">{student.branch}</td>
                    <td className="py-4 px-6">{student.cgpa}</td>
                    <td className="py-4 px-6 text-center">
                      <button
                        onClick={() => handleClick(student)}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-110"
                      >
                        View Full Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-12 text-center text-gray-300">
            <p className="text-2xl font-semibold text-red-400">No students have applied yet.</p>
            <p className="mt-2 text-lg">Please check back later for updates.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyResult;