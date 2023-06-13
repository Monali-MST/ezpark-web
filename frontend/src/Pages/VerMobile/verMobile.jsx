import React, { useState, useRef } from "react";
import "./verMobile.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const VerMobile = () => {

  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const otpInput = useRef([]);

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
    axios.post("http://localhost:8800/verifyOTP", {"otp":otp[0]+otp[1]+otp[2]+otp[3], "MobNum":localStorage.getItem("MobNum")})
    .then((res=>{
      if(res.data===200){
        navigate('/sucess');
      }else if(res.data===300){
        alert("Invalid OTP");
      }else if(res.data===100){
        alert("Something went wrong");
      }
    }))
    .catch((err) => console.log(err));
  }
 
  return (
    <>
      <div className="OTP">
        <div style={{ justifyContent: "center" }} className="otp-form">
          <h2 style={{ marginTop: "10px" }}>OTP Verification</h2>
          <p style={{ marginTop: "10px" }}>
            <b>Please Enter the One-Time password to verify your Account</b>
          </p>
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
