import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Badges from "../../Components/Badges/Badges";
import Points from "../../Components/Points/Points";
import Discount from "../../Components/Discount/Discount";
import Refunds from "../../Components/Refunds/Refunds";
import Footer from "../../Components/Footer/Footer";

const PointSystem = () => {
  return (
    <div>
      <NavBar />
      <Badges />
      <Points />
      {/* <Discount />
      <Refunds />
      <Footer /> */}
    </div>
  );
};

export default PointSystem;
