import React, { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import { useNavigate } from "react-router-dom";

const CompanyDetail = () => {
  const { data, setData } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleUpdate = (field, value) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // send api req to change the company details
    alert("Changes saved");
    setData({});
    navigate(-1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-200 p-6">
      <div className="w-full max-w-3xl bg-gray-800 shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-6 text-white text-center">
          Company Details
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(data).map(([key, value]) => (
            <div key={key} className="p-3 border-b border-gray-600">
              <span className="font-semibold text-gray-300 capitalize">
                {key.replace("_", " ")}:
              </span>
              {key === "companyImage" ? (
                <a
                  href={value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-blue-400 underline"
                >
                  Click to View
                </a>
              ) : (
                <span className="ml-2 text-gray-400">
                  {Array.isArray(value) ? value.join(", ") : value.toString()}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Radio Input Sections */}
        {[
          { label: "Approve", field: "approved" },
          { label: "Result Declared", field: "result" },
          { label: "Is Bonus", field: "isBonus" },
        ].map(({ label, field }) => (
          <div key={field} className="mt-4">
            <label className="font-semibold text-gray-300">{label}:</label>
            <div className="flex space-x-6 mt-2">
              {["Yes", "No"].map((option) => (
                <label key={option} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name={field}
                    value={option}
                    checked={data[field] === option}
                    onChange={(e) => handleUpdate(field, e.target.value)}
                    className="appearance-none w-5 h-5 border border-gray-500 rounded-full checked:bg-blue-500 focus:ring focus:ring-blue-400"
                  />
                  <span className="text-gray-300">{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}

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

export default CompanyDetail;
