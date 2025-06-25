import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const jobTypeData = [
  { jobType: "Software Engineer", count: 140, color: "#FF5733" }, // Red
  { jobType: "Data Scientist", count: 80, color: "#36A2EB" }, // Blue
  { jobType: "Marketing", count: 40, color: "#FFCE56" }, // Yellow
  { jobType: "AI/ML", count: 50, color: "#4CAF50" }, // Green
  { jobType: "Softeare Developer", count: 90, color: "#9C27B0" }, // Purple
  { jobType: "Sales", count: 30, color: "#FF9800" } // Orange
];

const JobTypeBarChart25 = () => (
  <ChartContainer title="Distribution of Job Types 2025">
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={jobTypeData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
        <XAxis dataKey="jobType" tick={{ fill: "white" }} />
        <YAxis tick={{ fill: "white" }} />
        <Tooltip contentStyle={{ backgroundColor: "#222", color: "#fff", borderRadius: "5px" }} />
        <Legend wrapperStyle={{ color: "#fff" }} />
        {jobTypeData.map((entry, index) => (
          <Bar key={index} dataKey="count" fill={entry.color} barSize={50} />
        ))}
      </BarChart>
    </ResponsiveContainer>
  </ChartContainer>
);

export default JobTypeBarChart25;
