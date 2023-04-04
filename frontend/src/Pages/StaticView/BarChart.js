//Render Bar Chart

import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS,Legend } from "chart.js/auto";

ChartJS.register(
  Legend
);

function BarChart({ chartData }) {
    return <Bar data={chartData} />;
  }
  
  export default BarChart;
