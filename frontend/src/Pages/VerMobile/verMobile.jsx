import React, { useState, useRef } from "react";
import "./verMobile.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const VerMobile = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const otpInput = useRef([]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  const handleClick = () => {
   
    navigate('/sucess');
  }
 
  return (
    <>
      <div className="OTP">
        <div style={{ justifyContent: "center" }} className="otp-form">
          <h2 style={{ marginTop: "10px" }}>OTP Verification</h2>
          <p style={{ marginTop: "10px" }}>
            <b>Please Enter the One-Time password to verify your Account</b>
          </p>
          <p>A One-Time password has been send to +94 77 ** ** 535</p>
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
