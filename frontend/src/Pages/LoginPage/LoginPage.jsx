import React from "react";
import "./LoginPage.css";
// import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../Assets/logo_without_text.png";

function LoginPage() {
  return (
    <div className="login-page">
      <div className="left-column">
        <div className="logo-img">
          <img className="login_logo" src={Logo} alt="web-logo" />
        </div>
        <p
          style={{
            color: "#85857F",
            fontWeight: "bold",
            fontSize: "31px",
            marginTop: "5vh",
            marginLeft: "25vh",
          }}
        >
          PARKING AT YOUR FINGERTIPS
        </p>
      </div>
      <div className="right-column">
        <div className="login-form">
          <h1 style={{ color: "#FAA41E",marginTop:"0vh",fontSize:"50px" }}>Ez Park</h1>
          <h2 style={{ color: "white",marginTop:"5vh",fontSize:"30px",textAlign:"center"}}>Welcome to Ez park</h2>
          <br />
          <form>
            <div className="feild1">
              <input
              style={{borderRadius:"45px"}}
                type="text"
                placeholder="Username"
                //onChange={handleChange}
                name="Fname"
              />
              {/* <FaUser className="icon" /> */}
            </div>
            <div className="feild1">
              <input
              style={{borderRadius:"45px"}}
                type="password"
                placeholder="Password" 
                //onChange={handleChange}
                name="Pword"
              />
              {/* <FaLock className="icon" /> */}
            </div>
            <p style={{color:"#FAA41E",textAlign:"right"}}>Forgot password?</p><br />

            <button className="log_btn" type="submit">Sign in</button>
            <br />

            <p style={{ color: "white",fontSize:"20px",textAlign:"center",marginTop:"8vh" }}>
              New?
              <Link to="/signup" style={{ color: "#FAA41E" ,fontSize:"15px"}}>
                Create an Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
