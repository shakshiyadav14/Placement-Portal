import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { StoreContext } from "../../context/StoreContext";

import * as XLSX from "xlsx";

const AddResult = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [status, setStatus] = useState("");
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");

  const { setResult } = useContext(StoreContext);

  const addStudent = (e) => {
    e.preventDefault();
    
    const trimmedName = name.trim();
    const trimmedRollNo = rollNo.trim();
    const trimmedStatus = status.trim();
    const trimmedEmail = rollNo.trim();

    if (!trimmedRollNo || !trimmedStatus || !trimmedEmail || !trimmedName) {
      setError("All fields are required!");
      return;
    }

    const currStudent = {
      id: Date.now(),
      name,
      email,
      rollNo,
      status,
    };

    const studentExists = students.some((student) => student.email === email);
    if (studentExists) {
      setError("Student already added.");
      return;
    } else {
      setError("");
    }

    setStudents([...students, currStudent]);
    setName("");
    setEmail("");
    setRollNo("");
    setStatus("");
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const submitResult = () => {
    setResult(students);
    setStudents([]);
  };

  const handleFileUpload = (e) => {
    if (!e.target.files || e.target.files.length === 0) return;
  
    const file = e.target.files[0];
  
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
  
      if (parsedData.length === 0) {
        setError("The uploaded file is empty.");
        return;
      }
  
      // Expected column names
      const requiredColumns = ["Name", "RollNo", "Email", "Result_Type"];
      const fileColumns = Object.keys(parsedData[0]);
  
      // Check if all required columns exist
      const missingColumns = requiredColumns.filter((col) => !fileColumns.includes(col));
      if (missingColumns.length > 0) {
        setError(`Missing columns: ${missingColumns.join(", ")}. Please upload a valid file.`);
        return;
      }
  
      // Clear previous student list before adding new ones
      setStudents([]);
  
      const newStudents = parsedData.map((row) => ({
        id: Date.now() + Math.random(),
        name: row.Name.trim(),
        email: row.Email.trim(),
        rollNo: String(row.RollNo).trim(), // Convert RollNo to string before trimming
        status: row.Result_Type.trim(),
      }));
  
      setStudents(newStudents);
      setError(""); // Clear errors if successful
    };
  
  };
  
  const handleClick = (e) => {
    // Reset input field to allow re-uploading the same file
    e.target.value = "";

  }
  
  return (
    <motion.div
      className="min-h-screen bg-gray-900 flex flex-col md:flex-row pt-5 px-8 text-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Form Section */}
      <motion.div
        className="bg-gray-800 shadow-lg rounded-xl p-6 w-full max-w-lg mb-6 md:mb-0 md:mr-8 animate-slideInLeft"
        whileHover={{ scale: 1.02 }}
      >
        <h1 className="text-3xl font-bold text-center mb-6">Add Student Details</h1>
        <form onSubmit={addStudent} className="space-y-4">
          <div>
            <label className="block text-gray-300 font-medium">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter student's name"
              className="w-full p-3 mt-1 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
            />
          </div>
          <div>
            <label className="block text-gray-300 font-medium">Roll No:</label>
            <input
              type="text"
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
              placeholder="Enter student's email"
              className="w-full p-3 mt-1 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
            />
          </div>
          <div>
            <label className="block text-gray-300 font-medium">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter student's email"
              className="w-full p-3 mt-1 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
            />
          </div>
          <div>
            <label className="block text-gray-300 font-medium">Result Type:</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full p-3 mt-1 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400">
              <option value="" disabled>Select</option>
              <option value={"OA"}>Online Assesment</option>
              <option value={"Interview"}>Interview</option>
              <option value={"Final"}>Final</option>
            </select>
          </div>
          {error && <p className="text-red-500 font-medium">{error}</p>}
          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blue-600 hover:bg-blue-700 transition duration-300 py-3 rounded-lg font-semibold"
          >
            Add Student
          </motion.button>
          <h3 className="text-2xl font-bold text-center mb-6">Upload Via Excel Sheet</h3>
          <input type="file" accept=".xls, .xlsx" onClick={handleClick} onChange={handleFileUpload}/>
          
        </form>
      </motion.div>

      {/* Student List Section */}
      <motion.div
        className="w-full shadow-lg rounded-xl p-6 bg-gray-800 animate-slideInRight"
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex justify-between items-center mb-6 ">
          <h1 className="text-3xl font-bold text-center w-3/4">Student List</h1>
          {students.length > 0 && (
            <motion.button
              onClick={submitResult}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 hover:bg-green-600 transition duration-300 px-4 py-2 rounded-lg shadow-md focus:ring-4 focus:ring-green-300"
            >
              Upload Result
            </motion.button>
          )}
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 shadow-md rounded-lg overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-3 px-6 text-left">Roll No</th>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-left">Result Type</th>
                <th className="py-3 px-6 text-center">Action</th>
              </tr>
            </thead>
            {students.length === 0 ? (
              <tbody>
                <tr>
                  <td colSpan="4">
                    <p className="text-gray-400 text-center py-4">
                      No students added yet.
                    </p>
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody>
                {students.map((student, index) => (
                  <tr
                    key={student.id}
                    className={`border-b border-gray-700 ${index % 2 === 0 ? "bg-gray-700" : "bg-gray-600"
                      }`}
                  >
                    <td className="py-3 px-6">{student.rollNo}</td>
                    <td className="py-3 px-6">{student.name}</td>
                    <td className="py-3 px-6">{student.email}</td>
                    <td className="py-3 px-6">{student.status}</td>
                    <td className="py-3 px-6 text-center">
                      <motion.button
                        onClick={() => deleteStudent(student.id)}
                        whileTap={{ scale: 0.9 }}
                        className="flex justify-center items-center w-full"
                      >
                        <img
                          src="\images\delete.png"
                          className="w-6"
                          alt="Delete"
                        />
                      </motion.button>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AddResult;
