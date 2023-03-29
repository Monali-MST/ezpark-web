import React from "react";
import Navbar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import bgImg from "../../Assets/bgimg.jpg";

const HomePage = () => {
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      navigate("/signup");
      navigate("/emailverify");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Navbar />
      <section id="coverpage">
      <div className="bgImg">
        <div className="text">
        <h1>Save Time</h1>
      <h1>Save Money</h1>
        
          <img  src={bgImg} alt="web-logo" />
        </div>
        </div>
      
      <button className="start"onClick={handleClick}>Get Started</button>
      <button className="start"onClick={handleClick}>VerEmail</button>
      <h1 className="text">WE HAVE A SPOT FOR YOU. </h1>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
