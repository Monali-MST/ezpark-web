//Drop down menue for total and partial refunds

import React, { useState } from "react";
import RefundFPFunctionM from "./RefundFPFunctionM";
import RefundFPFunctionW from "./RefundFPFunctionW";
import RefundFPFunctionD from "./RefundFPFunctionD";


const DropDownRM = () => {
  const [selectedChart, setSelectedChart] = useState("daily");

  const handleChartChange = (event) => {
    setSelectedChart(event.target.value);
  };

  return (
    <div className="drop-down-rm-container">
      <div className="drop-down-rm"><h3>Refunds Made</h3></div>

      <div className="drop-down-rm-names" style={{ paddingTop: 1.5 }}>
        <select value={selectedChart} onChange={handleChartChange}>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>

      <div className="drop-down-rm-values">
        {selectedChart === "daily" && <div style={{ paddingTop: 17, paddingLeft: 50 }}><RefundFPFunctionD /></div>}
        {selectedChart === "weekly" && <div style={{ paddingTop: 17, paddingLeft: 50 }}><RefundFPFunctionW /></div>}
        {selectedChart === "monthly" && <div style={{ paddingTop: 17, paddingLeft: 50 }}><RefundFPFunctionM /></div>}
      </div>
    </div>
  );
};

export default DropDownRM;
