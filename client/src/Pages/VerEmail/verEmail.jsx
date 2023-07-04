import React, { useEffect, useState, useRef, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { SignUpContext } from "../../App";

import "../VerMobile/verMobile";
import { generateOTP, registerUser, vehicleRegister, verifyOTP } from "../../Helper/helper";

export default function VerEmail() {

  const location = useLocation();
  const data = location.state;
  console.log(data)
  const formValues = data.formValues;
  const nextURL = data.nextURL;  const [
    pageNo,
    setPageNo,
    dataSet,
    SetDataSet,
    startDate,
    setStartDate,
    endDate,
    SetendDate,
    startTime,
    setStartTime,
    endTime,
    setEndTime,
  ] = useContext(SignUpContext);
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const otpInput = useRef([]);
  const [displayedEmailString, setDisplayedEmailString] = useState("");

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
    //navigate('/userdashboard/:id');

    const finalOTP = parseInt(otp[0]+otp[1]+otp[2]+otp[3])
    //console.log(typeof(finalOTP));
   verifyOTP(finalOTP)
      .then((res) => {
        //navigate('/sucess');
        //SetPageNo(2)
        alert("Login successful");
        console.log("log in email", pageNo);
        console.log("dataset set", dataSet);
        if(nextURL==="/login"){
          registerUser(formValues).then((res)=>{
            vehicleRegister(formValues).then(res)
            navigate(nextURL);
            
          })

        }
        else{
          registerUser(formValues).then((res))
          navigate(nextURL,{state:{formValues}});

        }

        
        //navigate('/emailverify');
      })
      .catch((err) => console.log(err.response.data));
  };


  useEffect(() => {
    
    // const Email = formValues.Email; 
    const Email=localStorage.getItem("Email");
    let displayedEmailString;

    if (Email.length <= 8) {
      setDisplayedEmailString(Email);
    } else {
      const firstFour = Email.slice(0, 4);
      const lastFour = Email.slice(-4);
      const asterisks = "*".repeat(Email.length - 8);
      displayedEmailString = firstFour + asterisks + lastFour;
      setDisplayedEmailString(displayedEmailString);
      //console.log("test useContext",dataSet);
    }
      generateOTP(Email || formValues.Fname + " " + formValues.Lname, Email, true).then((OTP) => {
        console.log(OTP);
        if (OTP) return console.log("OTP has been send to your email!");
        alert("Problem while generating OTP!");
      });
  }, [formValues]);

  return (
    <div>
      <div className="OTP">
        <div style={{ justifyContent: "center" }} className="otp-form">
          <h2 style={{ marginTop: "10px" }}>OTP Verification</h2>
          <p style={{ marginTop: "10px" }}>
            <b>Please Enter the One-Time password to verify your Account</b>
          </p>
          <p>A One-Time password has been send to {displayedEmailString}</p>
          <div>
            {otp.map((data, index) => (
              <input
                style={{
                  marginLeft: "20px",
                  marginTop: "10px",
                  width: "40px",
                  height: "40px",
                }}
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
              border: "none",
              color: "black",
            }}
          >
            Verify
          </Button>
        </div>
      </div>
    </div>
  );
}
