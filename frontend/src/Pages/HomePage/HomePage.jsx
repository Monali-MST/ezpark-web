import React from "react";
import Navbar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import "./HomePage.css"

const HomePage = () => {
  const img1 = new URL("../../Assets/bgimg.jpg", import.meta.url);
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      navigate("/signup");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Navbar />
      <img src={img1} alt="background Image" />
      <h1>Save Time</h1>
      <h1>Save Money</h1>
      <button className="start"onClick={handleClick}>Get Started</button>
      <h1 className="text">WE HAVE A SPOT FOR YOU. </h1>
      <Footer />
    </div>
  );
};

export default HomePage;
