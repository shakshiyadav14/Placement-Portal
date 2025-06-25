import React, { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import { useNavigate } from "react-router-dom";

const Results = () => {
  const { results, setData } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleClick = (company) => {
    setData(company);
    navigate("/company-result");
  };

  // Separate approved and unapproved companies
  const approvedCompanies = results.filter((company) => company.approved === "Yes");
  const pendingCompanies = results.filter((company) => company.approved === "No");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-200 p-6">
      <div className="w-full max-w-4xl bg-gray-800 shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-6 text-white text-center">Results</h2>

        {/* Pending Companies Section */}
        <h3 className="text-xl font-semibold text-red-400 mb-4">Pending Approval</h3>
        {pendingCompanies.length > 0 ? (
          <div className="overflow-x-auto pb-12">
            <table className="w-full border-collapse text-gray-300">
              <thead>
                <tr className="bg-gray-700 text-gray-200 uppercase text-sm">
                  <th className="p-3 text-left">Company Name</th>
                  <th className="p-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {pendingCompanies.map((company) => (
                  <tr
                    key={company.id || company.companyName}
                    className="border-b border-gray-600 hover:bg-gray-700 transition duration-200"
                  >
                    <td className="p-3">{company.companyName}</td>
                    <td className="p-3 text-center">
                      <button
                        onClick={() => handleClick(company)}
                        className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition duration-300"
                      >
                        View Result
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

        {/* Approved Companies Section */}
        <h3 className="text-xl font-semibold text-green-400 mb-4">Approved Companies</h3>
        {approvedCompanies.length > 0 ? (
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-gray-300">
              <thead>
                <tr className="bg-gray-700 text-gray-200 uppercase text-sm">
                  <th className="p-3 text-left">Company Name</th>
                  <th className="p-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {approvedCompanies.map((company) => (
                  <tr
                    key={company.id || company.companyName}
                    className="border-b border-gray-600 hover:bg-gray-700 transition duration-200"
                  >
                    <td className="p-3">{company.companyName}</td>
                    <td className="p-3 text-center">
                      <button
                        onClick={() => handleClick(company)}
                        className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition duration-300"
                      >
                        View Result
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-400 mb-6">No approved companies yet.</p>
        )}

      </div>
    </div>
  );
};

export default Results;
