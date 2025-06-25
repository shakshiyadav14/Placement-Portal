import React, { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import { useNavigate } from "react-router-dom";

const Students = () => {
  const { students, setData } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleClick = (student) => {
    setData(student);
    navigate("/student");
  };

  // Separate students based on approval status
  const approvedStudents = students.filter((student) => student.approved === "Yes");
  const pendingStudents = students.filter((student) => student.approved === "No");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-200 p-6">
      <div className="w-full max-w-4xl bg-gray-800 shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-6 text-white text-center">Student List</h2>

        {/* Pending Approval Students Section */}
        <h3 className="text-xl font-semibold text-red-400 mb-4">Pending Approval</h3>
        {pendingStudents.length > 0 ? (
          <div className="overflow-x-auto pb-12">
            <table className="w-full border-collapse text-gray-300">
              <thead>
                <tr className="bg-gray-700 text-gray-200 uppercase text-sm">
                  <th className="p-3 text-left">Student Name</th>
                  <th className="p-3 text-left">Roll No</th>
                  <th className="p-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {pendingStudents.map((student) => (
                  <tr
                    key={student.rollNo}
                    className="border-b border-gray-600 hover:bg-gray-700 transition duration-200"
                  >
                    <td className="p-3">{student.name}</td>
                    <td className="p-3">{student.rollNo}</td>
                    <td className="p-3 text-center">
                      <button
                        onClick={() => handleClick(student)}
                        className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition duration-300"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-400">No pending approvals.</p>
        )}

        {/* Approved Students Section */}
        <h3 className="text-xl font-semibold text-green-400 mb-4">Approved Students</h3>
        {approvedStudents.length > 0 ? (
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-gray-300">
              <thead>
                <tr className="bg-gray-700 text-gray-200 uppercase text-sm">
                  <th className="p-3 text-left">Student Name</th>
                  <th className="p-3 text-left">Roll No</th>
                  <th className="p-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {approvedStudents.map((student) => (
                  <tr
                    key={student.rollNo}
                    className="border-b border-gray-600 hover:bg-gray-700 transition duration-200"
                  >
                    <td className="p-3">{student.name}</td>
                    <td className="p-3">{student.rollNo}</td>
                    <td className="p-3 text-center">
                      <button
                        onClick={() => handleClick(student)}
                        className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition duration-300"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-400 mb-6">No approved students yet.</p>
        )}

      </div>
    </div>
  );
};

export default Students;
