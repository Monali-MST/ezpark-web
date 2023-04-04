//Drop down menue for total revenue...

import React, { useState } from "react";
import RevenueFunctionM from "./RevenueFunctionM";
import RevenueFunctionW from "./RevenueFunctionW";
import RevenueFunctionD from "./RevenueFunctionD";

const DropDownTR = () => {
  const [selectedChart, setSelectedChart] = useState("daily"); // initialize selectedChart state variable with "daily"

  const handleChartChange = (event) => {
    setSelectedChart(event.target.value); // update selectedChart state variable when dropdown value changes
  };

  return (
    <div>
        <div><h3>Total Revenue</h3></div>
        <div>
            <select value={selectedChart} onChange={handleChartChange}>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
            </select>
            {/* Render the appropriate chart component based on the selected value */}
            {selectedChart === "daily" && <div style={{padding:50}}><RevenueFunctionD /></div> }
            {selectedChart === "weekly" && <div style={{padding:50}}><RevenueFunctionW/></div> }
            {selectedChart === "monthly" && <div style={{padding:50}}><RevenueFunctionM/></div>}
        </div>
    </div>
  );
};

export default DropDownTR;

 
