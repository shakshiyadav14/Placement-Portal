import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

// Register required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const PieChartComponent = ({ title, labels, dataValues }) => {
  const colors = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#8AD1C2", "#9F8AD1"];

  const data = {
    labels,
    datasets: [
      {
        label: "Count",
        data: dataValues,
        backgroundColor: colors.slice(0, labels.length),
        hoverOffset: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top", labels: { color: "white", font: { size: 14 } } },
      title: { display: true, text: title, color: "white", font: { size: 16 } },
    },
  };

  return <div className="p-6 bg-gray-800 rounded-lg shadow-lg w-full max-w-md"><Pie data={data} options={options} /></div>;
};

export default PieChartComponent;
