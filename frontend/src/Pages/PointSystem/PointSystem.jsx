import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Badges from "../../Components/Badges/Badges";
import Points from "../../Components/Points/Points";
import Discount from "../../Components/Discount/Discount";
import RefundLevels from "../../Components/RefundLevels/RefundLevels";
import Footer from "../../Components/Footer/Footer";

const PointSystem = () => {
  return (
    <div>
      <NavBar />
      <Badges />
      <Points />
      <Discount />
      <RefundLevels />
      <Footer />
    </div>
  );
};

export default PointSystem;
