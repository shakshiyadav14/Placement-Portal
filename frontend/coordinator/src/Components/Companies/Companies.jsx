import React, { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Companies = () => {
  const { companies, setData } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleClick = (company) => {
    setData(company);
    navigate("/company-detail");
  };

  // Separate companies based on approval status
  const approvedCompanies = companies.filter((company) => company.approved === "Yes");
  const pendingCompanies = companies.filter((company) => company.approved === "No");

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-200 p-6"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="w-full max-w-4xl bg-gray-800 shadow-lg rounded-lg p-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6 text-white text-center"
        >
          Company List
        </motion.h2>

        {/* Pending Approval Companies */}
        <h3 className="text-xl font-semibold text-red-400 mb-4">Pending Approval</h3>
        {pendingCompanies.length > 0 ? (
          <div className="overflow-x-auto pb-12">
            <table className="w-full border-collapse text-gray-300">
              <thead>
                <tr className="bg-gray-700 text-gray-200 uppercase text-sm">
                  <th className="p-3 text-left">Company Logo</th>
                  <th className="p-3 text-left">Company Name</th>
                  <th className="p-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {pendingCompanies.map((company) => (
                  <motion.tr
                    key={company.job_id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.0 }}
                    transition={{ duration: 0.3 }}
                    className="border-b border-gray-600 hover:bg-gray-700 transition duration-200"
                  >
                    <td className="p-3">
                      <motion.img
                        src={company.companyImage}
                        alt={company.name}
                        className="h-14 w-20 border bg-white border-gray-500"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </td>
                    <td className="p-3">{company.name}</td>
                    <td className="p-3 text-center">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleClick(company)}
                        className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition duration-300"
                      >
                        View Details
                      </motion.button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-400">No pending approvals.</p>
        )}

        {/* Approved Companies */}
        <h3 className="text-xl font-semibold text-green-400 mb-4">Approved Companies</h3>
        {approvedCompanies.length > 0 ? (
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-gray-300">
              <thead>
                <tr className="bg-gray-700 text-gray-200 uppercase text-sm">
                  <th className="p-3 text-left">Company Logo</th>
                  <th className="p-3 text-left">Company Name</th>
                  <th className="p-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {approvedCompanies.map((company) => (
                  <motion.tr
                    key={company.job_id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.0 }}
                    transition={{ duration: 0.3 }}
                    className="border-b border-gray-600 hover:bg-gray-700 transition duration-200"
                  >
                    <td className="p-3">
                      <motion.img
                        src={company.companyImage}
                        alt={company.name}
                        className="h-14 w-20 border bg-white border-gray-500"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </td>
                    <td className="p-3">{company.name}</td>
                    <td className="p-3 text-center">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleClick(company)}
                        className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition duration-300"
                      >
                        View Details
                      </motion.button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-400 mb-6">No approved companies yet.</p>
        )}

      </motion.div>
    </motion.div>
  );
};

export default Companies;
