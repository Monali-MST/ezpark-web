import React, { useState } from "react";
import "./LoginPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import validate from "../SignUpPage/SignUpValid";
import Logo from "../../Assets/logo_without_text.png";

function LoginPage() {
  const [formErrors, setFormErrors] = useState({});
  const [formValues, setFormValues] = useState({
    Fname: "",
    
    Pword: "",
   
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

  const handleClick =  (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    // if (
    //   formErrors.Fname === "" &&
      
    //   formErrors.Pword === ""
    // )
    //  {
      axios
        .post("http://localhost:8800/login", formValues)
        .then((res) => {
          if(res.data==="Success"){
            navigate("/userdashboard/:id");
          }else{
            alert("No record existed");
          }
          
        })
        .catch((err) => console.log(err));
    //}
  };
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
                onChange={handleChange}
                name="Fname"
                value={formValues.Fname}
              />
              {/* <FaUser className="icon" /> */}
            </div>
            <p>{formErrors.Fname}</p>
            <div className="feild1">
              <input
              style={{borderRadius:"45px"}}
                type="password"
                placeholder="Password" 
                onChange={handleChange}
                name="Pword"
                value={formValues.Pword}
              />
              {/* <FaLock className="icon" /> */}
            </div>
            <p>{formErrors.Pword}</p>
            <p style={{color:"#FAA41E",textAlign:"right"}}>Forgot password?</p><br />

            <button className="log_btn" type="submit"  onClick={handleClick}>Sign in</button>
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
