import React from "react";
import { Chart as ChartJS, ArcElement,Tooltip,Legend} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

function DoughnutChart({chartData}, {chartOptions}){
    return(
        <div >
            <Doughnut data = {chartData} options={chartOptions} />
        </div>
    ) 
}
export default DoughnutChart;


// DATASET USED..............
// const data = {
//     labels:['Yes', 'No'],
//     datasets:[{
//         label:'Poll',
//         data:[3,6],
//         backgroundColor:['Black','Red'],
//         borderColor:['Black','Red']
//     }]
// }

// const options={

// }