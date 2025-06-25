import { useNavigate } from "react-router-dom";

const Result = ({ companies }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/companyResult");
  };

  return (
    <div className="container mx-auto p-6 bg-gray-800 rounded-lg shadow-lg animate-fadeInUp">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-white">
        Job Results
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-400 border border-gray-300 rounded-lg">
          <thead className="bg-gray-900">
            <tr>
              <th className="py-3 px-5 border-b font-semibold text-left text-white">Job ID</th>
              <th className="py-3 px-5 border-b font-semibold text-left text-white">Company</th>
              <th className="py-3 px-5 border-b font-semibold text-center text-white">Result</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company, index) => (
              <tr
                key={index}
                className={`transition-colors duration-200 ${
                  index % 2 === 0 ? "bg-gray-800" : "bg-gray-900"
                } hover:bg-gray-500`}
              >
                <td className="py-3 px-5 border-b text-white">
                  {company.job_id}
                </td>
                <td className="py-3 px-5 border-b">
                  <div className="flex items-center space-x-4">
                    <img
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className="h-12 w-12 object-contain rounded-full border border-gray-300"
                    />
                    <div className="text-white font-medium">
                      {company.name}
                    </div>
                  </div>
                </td>
                <td className="py-3 px-5 border-b text-center">
                  <button
                    onClick={handleClick}
                    className="bg-blue-500 text-white font-medium px-6 py-2 rounded-lg hover:bg-blue-600 transition-all shadow-md hover:shadow-lg"
                  >
                    View Result
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Result;
