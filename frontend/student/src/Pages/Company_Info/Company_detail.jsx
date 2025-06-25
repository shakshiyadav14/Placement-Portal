import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const CompanyDetails = ({ onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const company = location.state?.company;

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      navigate(-1);
    }
  };

  const handleResultNavigation = () => {
    navigate(`/companydetails/${company.job_id}/results`);
  };

  const handleApplyNow = () => {
    navigate(`/companydetails/${company.job_id}/apply`);
  };

  if (!company) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-10">
        <div className="bg-gray-900 w-4/5 h-auto rounded-lg p-8 shadow-xl flex flex-col justify-center items-center text-white">
          <h1 className="text-2xl font-bold text-gray-300 mb-4">No Company Selected</h1>
          <button
            className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-gray-900 w-4/5 h-auto rounded-lg p-8 shadow-xl relative border-2 ring-2 ring-blue-500 text-white">
        <button
          className="absolute top-4 right-4 text-red-400 text-lg font-bold hover:text-red-600 transition-all"
          onClick={handleClose}
        >
          ✕
        </button>

        <div className="flex flex-wrap justify-between items-center mb-8 my-10 mx-10">
          {company.companyImage && (
            <img
              src={company.companyImage}
              alt={`${company.name} Logo`}
              className="w-40 h-40 object-contain rounded-md shadow-md"
            />
          )}
          <h2 className="text-4xl font-extrabold text-gray-300 mt-4 md:mt-0">
            {company.name}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-400">
          <p><strong className="font-semibold text-gray-300">CTC:</strong> {company.ctc}</p>
          <p><strong className="font-semibold text-gray-300">Location:</strong> {company.location}</p>
          <p><strong className="font-semibold text-gray-300">Job ID:</strong> {company.job_id}</p>
          <p><strong className="font-semibold text-gray-300">CGPA Requirement:</strong> {company.cgpa}</p>
          <p><strong className="font-semibold text-gray-300">Backlog Policy:</strong> {company.backlogs}</p>
          <p><strong className="font-semibold text-gray-300">Eligible Branches:</strong> {company.branch}</p>
          <p><strong className="font-semibold text-gray-300">Job Roles:</strong> {company.job_profile}</p>
          <p><strong className="font-semibold text-gray-300">Email:</strong> {company.email}</p>
          <p><strong className="font-semibold text-gray-300">Contact:</strong> {company.phoneNumber}</p>
          <p><strong className="font-semibold text-gray-300">Eligible Gender:</strong> {company.gender}</p>
          <p><strong className="font-semibold text-gray-300">Eligible Batch:</strong> {company.batch}</p>
          <p><strong className="font-semibold text-gray-300">Last Date:</strong> {company.last_date}</p>
          <p><strong className="font-semibold text-gray-300">Bonus:</strong> {company.isBonus ? "Yes" : "No"}</p>
          <p><strong className="font-semibold text-gray-300">Group Discussion:</strong> {company.group_disscussion ? "Yes" : "No"}</p>
          <p><strong className="font-semibold text-gray-300">Tech Rounds:</strong> {company.tech_rounds}</p>
        </div>

        <div className="flex flex-wrap items-center justify-start mt-8 space-x-4">
          {company.result === "Declared" ? (
            <button
              className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-all"
              onClick={handleResultNavigation}
            >
              View Results
            </button>
          ) : company.result === "Pending" ? (
            <span className="px-6 py-2 bg-yellow-600 text-white rounded-lg shadow-md">Pending</span>
          ) : (
            <button
              className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all"
              onClick={handleApplyNow}
            >
              Apply Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;