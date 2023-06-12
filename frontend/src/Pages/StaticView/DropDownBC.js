//Drop down menue for booking and cancellation...

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
    <div className="drop-down-bc-container">
      <div className="drop-down-bc"><h3>Booking and Cancellation</h3></div>

      <div className="drop-down-bc-names" style={{paddingTop:1.5}}>
        <select value={selectedChart} onChange={handleChartChange}>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      
      <div className="drop-down-bc-values">
        {/* Render the appropriate chart component based on the selected value */}
        {selectedChart === "daily" && <div style={{ paddingTop: 10, paddingLeft: 50 }}><DoughnutFunctionD /></div>}
        {selectedChart === "weekly" && <div style={{ paddingTop: 10, paddingLeft: 50 }}><DoughnutFunctionW /></div>}
        {selectedChart === "monthly" && <div style={{ paddingTop: 10, paddingLeft: 50 }}><DoughnutFunctionM /></div>}
      </div>
    </div>
  );
};

export default DropDownBC;
