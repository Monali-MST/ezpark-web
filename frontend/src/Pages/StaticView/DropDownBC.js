import React, { useState } from "react";
import DoughnutFunctionM from "./DoughnutFunctionM";
import DoughnutFunctionD from "./DoughnutFunctionD";
import DoughnutFunctionW from "./DoughnutFunctionW";

const DropDownBC = () => {
  const [selectedChart, setSelectedChart] = useState("daily"); // initialize selectedChart state variable with "daily"

  const handleChartChange = (event) => {
    setSelectedChart(event.target.value); // update selectedChart state variable when dropdown value changes
  };

  return (
    <div>
        <div><h3>Booking and Cancellation</h3></div>
        <div>
            <select value={selectedChart} onChange={handleChartChange}>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
            </select>
            {/* Render the appropriate chart component based on the selected value */}
            {selectedChart === "daily" && <div style={{padding:50}}><DoughnutFunctionD /></div> }
            {selectedChart === "weekly" && <div style={{padding:50}}><DoughnutFunctionW /></div>}
            {selectedChart === "monthly" && <div style={{padding:50}}><DoughnutFunctionM /></div>}
        </div>
    </div>
  );
};

export default DropDownBC;
