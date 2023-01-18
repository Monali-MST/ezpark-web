import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Badges from "../../Components/Badges/Badges";
import Points from "../../Components/Points/Points";
import Discount from "../../Components/Discount/Discount";
import Footer from "../../Components/Footer/Footer";

const PointSystem = () => {
  return (
    <div>
      <NavBar />
      <Badges />
      <Points />
      <Discount />
      <Footer />
    </div>
  );
};

export default PointSystem;
