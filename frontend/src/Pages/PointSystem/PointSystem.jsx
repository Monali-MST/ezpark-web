import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Badges from "../../Components/Badges/Badges";
import Points from "../../Components/Points/Points";
import Discount from "../../Components/Discount/Discount";
import RefundLevels from "../../Components/RefundLevels/RefundLevels";

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
