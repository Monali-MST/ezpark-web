//Drop down menue for total revenue

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
    <div className="drop-down-tr-container">
      <div className="drop-down-tr"><h3>Total Revenue</h3></div>

      <div className="drop-down-tr-names" style={{ paddingTop: 1.5 }}>
        <select value={selectedChart} onChange={handleChartChange}>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>

      <div className="drop-down-tr-values" >
        {/* Render the appropriate chart component based on the selected value */}
        {selectedChart === "daily" && <div style={{ paddingTop: 13, paddingLeft: 20 }}><RevenueFunctionD /></div>}
        {selectedChart === "weekly" && <div style={{ paddingTop: 13, paddingLeft: 20 }}><RevenueFunctionW /></div>}
        {selectedChart === "monthly" && <div style={{ paddingTop: 13, paddingLeft: 20 }}><RevenueFunctionM /></div>}
      </div>


    </div>
  );
};

export default DropDownTR;


