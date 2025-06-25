import React from "react";

const Company = ({
  companyImage,
  name,
  ctc,
  gender,
  last_date,
  cgpa,
  backlogs,
  branch,
  job_profile,
}) => {
  return (
<div className="bg-gray-800 p-6 rounded-lg shadow-[4px_4px_10px_rgba(0,0,0,0.4)] max-w-xl w-full hover:scale-105 transition-transform duration-300 cursor-pointer text-white hover:shadow-[6px_6px_12px_rgba(0,0,150,0.5)] animate-zoomIn">
{/* Logo Section */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <img src={companyImage} alt={name} className="h-12" />
        </div>
        <h2 className="text-2xl font-bold text-gray-200">{name}</h2>
      </div>

      {/* Details Section */}
      <div className="space-y-4">
        <div className="flex items-start">
          <span className="font-semibold text-gray-400">CTC :</span>
          <span className="ml-2 text-gray-300">{ctc}</span>
        </div>
        <div className="flex items-start">
          <span className="font-semibold text-gray-400">CGPA Required :</span>
          <span className="ml-2 text-gray-300">{cgpa}</span>
        </div>
        <div className="flex items-start">
          <span className="font-semibold text-gray-400">Backlog Policy :</span>
          <span className="ml-2 text-gray-300">{backlogs}</span>
        </div>
        <div className="flex items-start">
          <span className="font-semibold text-gray-400">Eligible Branches :</span>
          <span className="ml-2 text-gray-300">{branch}</span>
        </div>
        <div className="flex items-start">
          <span className="font-semibold text-gray-400">Eligible Gender :</span>
          <span className="ml-2 text-gray-300">{gender}</span>
        </div>
        <div className="flex items-start">
          <span className="font-semibold text-gray-400">Job Role :</span>
          <span className="ml-2 text-gray-300">{job_profile}</span>
        </div>
        <div className="flex items-start">
          <span className="font-semibold text-gray-400">Last Date :</span>
          <span className="ml-2 text-gray-300">{last_date}</span>
        </div>
      </div>
    </div>
  );
};

export default Company;
