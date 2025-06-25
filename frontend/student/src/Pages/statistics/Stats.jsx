import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line, Tooltip, Legend, ResponsiveContainer } from "recharts";
import PieChartComponent from "./pie"; 


const placementData2025 = {
  title: "Placed vs Unplaced (2025)",
  labels: ["Placed", "Unplaced"],
  dataValues: [200, 50],
};

const placementData2026 = {
  title: "Placed vs Unplaced (2026)",
  labels: ["Placed", "Unplaced"],
  dataValues: [180, 70],
};

const branchLabels = ["CSE", "ECE", "ME", "EE", "IT", "PIE", "CIVIL"];
const branchPlacedValues = [80, 50, 40, 30, 40, 40, 40];
const branchUnplacedValues = [10, 15, 20, 25, 40, 40, 40];

const ppoSuccessData = [
  { year: 2020, ppo: 25 },
  { year: 2021, ppo: 40 },
  { year: 2022, ppo: 55 },
  { year: 2023, ppo: 65 },
  { year: 2024, ppo: 80 },
  { year: 2025, ppo: 95 },
];

const medianPackageData = [
  { year: 2017, package: 9 },
  { year: 2018, package: 8 },
  { year: 2019, package: 15 },
  { year: 2020, package: 18 },
  { year: 2021, package: 12 },
  { year: 2022, package: 12 },
  { year: 2023, package: 16 },
  { year: 2024, package: 18 },
  { year: 2025, package: 28 },
  { year: 2026, package: 24 },
];

const branchBarChartData = branchLabels.map((branch, index) => ({
  name: branch,
  Placed: branchPlacedValues[index],
  Unplaced: branchUnplacedValues[index],
}));

const ChartContainer = ({ children, title }) => (
  <div className="bg-gray-800 hover:bg-gray-700 transition p-6 rounded-lg shadow-md border border-gray-700 text-center w-full">
    <h2 className="text-xl font-bold text-gray-100 mb-4">{title}</h2>
    {children}
  </div>
);

const BarChartComponent = ({ title, data }) => (
  <ChartContainer title={title}>
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
        <XAxis dataKey="name" tick={{ fill: "white" }} />
        <YAxis tick={{ fill: "white" }} />
        <Tooltip contentStyle={{ backgroundColor: "#222", color: "#fff", borderRadius: "5px" }} />
        <Legend wrapperStyle={{ color: "#fff" }} />
        <Bar dataKey="Placed" fill="#33FF57" barSize={50} />
        <Bar dataKey="Unplaced" fill="#FF5733" barSize={50} />
      </BarChart>
    </ResponsiveContainer>
  </ChartContainer>
);

const PPOBarChart = () => (
  <ChartContainer title="PPO Success Rate Over the Years">
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={ppoSuccessData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
        <XAxis dataKey="year" tick={{ fill: "white" }} />
        <YAxis tick={{ fill: "white" }} />
        <Tooltip contentStyle={{ backgroundColor: "#222", color: "#fff", borderRadius: "5px" }} />
        <Legend wrapperStyle={{ color: "#fff" }} />
        <Bar dataKey="ppo" fill="url(#ppoGradient)" barSize={50} />
        <defs>
          <linearGradient id="ppoGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#FF5733" />
          </linearGradient>
        </defs>
      </BarChart>
    </ResponsiveContainer>
  </ChartContainer>
);

const LineChartComponent = ({ title, data }) => (
  <ChartContainer title={title}>
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
        <XAxis dataKey="year" tick={{ fill: "white" }} />
        <YAxis tick={{ fill: "white" }} />
        <Tooltip contentStyle={{ backgroundColor: "#222", color: "#fff", borderRadius: "5px" }} />
        <Legend wrapperStyle={{ color: "#fff" }} />
        <Line type="monotone" dataKey="package" stroke="#FFD700" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  </ChartContainer>
);

const jobTypeData = [
  { jobType: "Software Engineer", count: 120, color: "#FF5733" }, // Red
  { jobType: "Data Scientist", count: 90, color: "#36A2EB" }, // Blue
  { jobType: "Marketing", count: 60, color: "#FFCE56" }, // Yellow
  { jobType: "AI/ML", count: 45, color: "#4CAF50" }, // Green
  { jobType: "Software Developer", count: 70, color: "#9C27B0" }, // Purple
  { jobType: "Sales", count: 50, color: "#FF9800" } // Orange
];

const JobTypeBarChart = () => (
  <ChartContainer title="Distribution of Job Types 2024">
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={jobTypeData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
        <XAxis dataKey="jobType" tick={{ fill: "white" }} />
        <YAxis tick={{ fill: "white" }} />
        <Tooltip contentStyle={{ backgroundColor: "#222", color: "#fff", borderRadius: "5px" }} />
        <Legend wrapperStyle={{ color: "#fff" }} />
        <Bar dataKey="count" fill="url(#jobTypeGradient)" barSize={50} />
        <defs>
        <linearGradient id="jobTypeGradient" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0%" stopColor="#FF5733" />  // Red
  <stop offset="50%" stopColor="#FF8C42" /> // Orange
  <stop offset="100%" stopColor="#FFD700" /> // Yellow
</linearGradient>

        </defs>
      </BarChart>
    </ResponsiveContainer>
  </ChartContainer>
);

const jobTypeData25 = [
  { jobType: "Software Engineer", count: 150, color: "#FF5733" }, // Red
  { jobType: "Data Scientist", count: 100, color: "#36A2EB" }, // Blue
  { jobType: "Marketing", count: 50, color: "#FFCE56" }, // Yellow
  { jobType: "AI/ML", count: 60, color: "#4CAF50" }, // Green
  { jobType: "Software Developer", count: 90, color: "#9C27B0" }, // Purple
  { jobType: "Sales", count: 30, color: "#FF9800" } // Orange
];

const JobTypeBarChart25 = () => (
  <ChartContainer title="Distribution of Job Types 2025">
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={jobTypeData25} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
        <XAxis dataKey="jobType" tick={{ fill: "white" }} />
        <YAxis tick={{ fill: "white" }} />
        <Tooltip contentStyle={{ backgroundColor: "#222", color: "#fff", borderRadius: "5px" }} />
        <Legend wrapperStyle={{ color: "#fff" }} />
        <Bar dataKey="count" fill="url(#jobTypeGradient)" barSize={50} />
        <defs>
        <linearGradient id="jobTypeGradient" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0%" stopColor="#FF5733" />  // Red
  <stop offset="50%" stopColor="#FF8C42" /> // Orange
  <stop offset="100%" stopColor="#FFD700" /> // Yellow
</linearGradient>

        </defs>
      </BarChart>
    </ResponsiveContainer>
  </ChartContainer>
);

const PlacementStats = () => {
  return (
    <div className="p-8 bg-gray-950 min-h-screen text-white flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-4 text-yellow-400">Placement Statistics</h1>
      <p className="text-lg text-gray-400 mb-10">Insights into student placements and salary trends</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        <PieChartComponent {...placementData2025} />
        <PieChartComponent {...placementData2026} />
      </div>

      <h2 className="text-2xl font-bold text-white mt-10 mb-4">Branch-wise Placement</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        <PieChartComponent title="Placed Students" labels={branchLabels} dataValues={branchPlacedValues} />
        <PieChartComponent title="Unplaced Students" labels={branchLabels} dataValues={branchUnplacedValues} />
      </div>

      <div className="mt-10 w-full max-w-6xl">
        <BarChartComponent title="Placement Comparison Across Branches" data={branchBarChartData} />
      </div>

      <div className="mt-10 w-full max-w-6xl">
        <LineChartComponent title="Median Package Trend Over the Years" data={medianPackageData} />
      </div>

      <div className="mt-10 w-full max-w-6xl">
        <JobTypeBarChart/>
      </div>
      <div className="mt-10 w-full max-w-6xl">
        <JobTypeBarChart25/>
      </div>

      
    </div>
  );
};

export default PlacementStats;
