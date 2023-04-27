import React from "react";
import NavBar from "../../Components/PointsystemDetails/NavBar/NavBar";
import Badges from "../../Components/PointsystemDetails/Badges/Badges";
import Points from "../../Components/PointsystemDetails/Points/Points";
import Discount from "../../Components/PointsystemDetails/Discount/Discount";
import RefundLevels from "../../Components/PointsystemDetails/RefundLevels/RefundLevels";

const PointSystem = () => {
  return (
    <div>
      <NavBar />
      <Badges />
      <Points />
      <Discount />
      <RefundLevels />
    </div>
  );
};

export default PointSystem;
