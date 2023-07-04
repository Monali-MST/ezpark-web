import React from 'react'
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import VerMobile from '../VerMobile/verMobile';

export default function SucessPage() {
  const navigate = useNavigate();
  const handleClick = () => {
   
    navigate('/emailverify');
  }
 
  return (
   
      <div className="OTP">
        <div style={{ justifyContent: "center" }} className="otp-form">
          <p>Sucess!</p>
          <p>Your phone number is successfully verified</p>
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
        <div/>
     
    </div>
  )
}
