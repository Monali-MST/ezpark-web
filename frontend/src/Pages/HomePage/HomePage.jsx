import React from "react";
import Navbar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Button from 'react-bootstrap/Button';

import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import myImage from "../../Assets/bgimg.jpg";
import Logo from "../../Assets/logo_without_text.png";


const HomePage = () => {
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
   
      <section id="coverpage">
      <div style={{ backgroundImage: `url(${myImage})`,backgroundSize:"cover", height:"83vh" ,filter: "brightness(0.6)"}}> 
      <div className="logo-section" >
        <div className="logo-img">
          <img className="logo" src={Logo} alt="logo" />
        </div>
        <div className="logo-name">
          <span className="yell">EZ </span>
          <span className="blk">Park</span>
        </div>
       
      </div>
      <p style={{color:"#85857F",fontWeight:"bold",fontSize:"20px",textAlign:"center"}}>PARKING AT YOUR FINGERTIPS</p>
     
      <div className="text" style={{}} >
      <p style={{color:"white",fontSize:"50px"}}> Save Time.<br/>
      Save Money. 
     
      </p>
      </div> 
      <Button className="start"onClick={handleClick}>Get Started</Button>
      </div>
     
      
      
      {/* <button className="start"onClick={handleClick}>VerEmail</button> */}
      
      <h1 className="text1">WE HAVE A SPOT FOR YOU. </h1>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;

