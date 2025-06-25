import React, { useContext } from 'react';
import { StoreContext } from '../Context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Company_Result = () => {
    const { data, setData } = useContext(StoreContext);
    const navigate = useNavigate();

    const handleUpdate = (field, value) => {
        setData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = () => {
        alert("Changes saved");
        setData({});
        navigate(-1);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-200 p-6">
            <div className="w-full max-w-4xl bg-gray-800 shadow-lg rounded-lg p-6">
                <h2 className="text-3xl font-bold mb-6 text-white text-center">{data.companyName}</h2>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-gray-300">
                        {/* Table Header */}
                        <thead>
                            <tr className="bg-gray-700 text-gray-200 uppercase text-sm">
                                <th className="p-3 text-left">Name</th>
                                <th className="p-3 text-left">Email</th>
                                <th className="p-3 text-center">Roll No</th>
                                <th className="p-3 text-center">Result Type</th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody>
                            {Array.isArray(data.students) &&
                                data.students.map((student) => (
                                    <tr
                                        key={student.rollNo}
                                        className="border-b border-gray-600 hover:bg-gray-700 transition duration-200"
                                    >
                                        <td className="p-3">{student.name}</td>
                                        <td className="p-3">{student.email}</td>
                                        <td className="p-3">{student.rollNo}</td>
                                        <td className="p-3">{student.status}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>

                {/* Approval Radio Buttons */}
                <div className="mt-4">
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
                </div>

                {/* Submit Button */}
                <div className="mt-6 flex justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Company_Result;
