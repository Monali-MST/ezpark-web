import React, { useState, useRef, useEffect } from "react";
import "./verMobile.css";
import Button from "react-bootstrap/Button";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { generateOTP, verifyOTP } from "../../Helper/helper";





const VerMobile = () => {

  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const otpInput = useRef([]);
  const location = useLocation();
  const [displayedMobNumString, setDisplayedMobNumString] = useState("");
const data = location.state;
const formValues = data.formValues;
const nextURL = data.nextURL;

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);
    console.log(otp);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  const handleClick = () => {
    console.log(otp);

    const finalOTP = parseInt(otp[0]+otp[1]+otp[2]+otp[3])
    //console.log(typeof(finalOTP));
   verifyOTP(finalOTP)
      .then((res) => {
        navigate(nextURL,{state:{formValues, nextURL:"/login"}});

      })
      .catch((err) => console.log(err.response.data));
  }

  useEffect(()=>{
    localStorage.setItem("Email",formValues.Email);
    const MobNum = formValues.MobNum; //localStorage.getItem("Email");
    let displayedMobNumString;

    if (MobNum.length <= 8) {
      setDisplayedMobNumString(MobNum);
    } else {
      const firstFive = MobNum.slice(0, 5);
      const lastTwo = MobNum.slice(-2);
      const asterisks = "*".repeat(MobNum.length - 7);
      displayedMobNumString = firstFive + asterisks + lastTwo;
      setDisplayedMobNumString(displayedMobNumString);
     
    }
    generateOTP(formValues.Fname + " " + formValues.Lname, formValues.MobNum, false).then((OTP) => {
      console.log(OTP);
      if (OTP) return console.log("OTP has been send to your Mobile!");
      alert("Problem while generating OTP!");
    });
  },[])
 
  return (
    <>
      <div className="OTP">
        <div style={{ justifyContent: "center" }} className="otp-form">
          <h2 style={{ marginTop: "10px" }}>OTP Verification</h2>
          <p style={{ marginTop: "10px" }}>
            <b>Please Enter the One-Time password to verify your Account</b>
          </p>
          <p>A One-Time password has been send to {displayedMobNumString}</p>
          <div>
            {otp.map((data, index) => (
              <input
              style={{marginLeft:"20px",marginTop:"10px",width:"40px",height:"40px"}}
                type="text"
                maxLength="1"
                key={index}
                value={data}
                ref={(ref) => (otpInput.current[index] = ref)}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
              />
            ))}
          </div>
          <p style={{ marginTop: "10px" }}>Did not received?Resend</p>
          <Button
            onClick={handleClick}
            style={{
              width: "150px",
              borderRadius: "30px",
              backgroundColor: "rgb(248, 210, 151)",
              border:"none",
              color:"black"
            
            }}
          >
            Verify
          </Button>
        </div>
      </div>
    </>
  );
};

export default VerMobile;
