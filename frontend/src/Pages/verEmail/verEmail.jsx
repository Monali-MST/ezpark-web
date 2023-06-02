import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import VerMobile from '../VerMobile/verMobile'
import { generateOTP } from '../../Helper/helper';

export default function VerEmail() {
 const { OTP, SetOTP} = useState();
 const username= "Udaya";

  useEffect(() => {
    generateOTP(username).then((OTP) => {
      console.log(OTP)
      if(OTP) return alert('OTP has been send to your email!');
      alert('Problem while generating OTP!')
    })
  }, [username]);
  return (
    <div>
      <VerMobile/>
      
     
    </div>
  )
}
