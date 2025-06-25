import React from "react";

const CompanyProfile = () => {
  const data = {
    name: "Google",
    phoneNumber: "1234567890",
    email: "hr@google.com",
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
      <div className="bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-md text-center">
        <h2 className="text-3xl font-bold text-blue-500 mb-4">Company Profile</h2>
        <div className="space-y-3">
          <p className="text-lg">
            <span className="font-semibold text-gray-300">Name: </span> {data.name}
          </p>
          <p className="text-lg">
            <span className="font-semibold text-gray-300">Phone: </span> {data.phoneNumber}
          </p>
          <p className="text-lg">
            <span className="font-semibold text-gray-300">Email: </span> {data.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
