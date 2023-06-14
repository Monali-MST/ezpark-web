import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
    //Registering necessary components for the chart
    ArcElement,
    Tooltip,
    Legend
);

function DoughnutChart({ chartData }, { chartOptions }) {
    return (
        <div >
            <Doughnut data={chartData} options={chartOptions} />
        </div>
    )
}
export default DoughnutChart;

