import React, { useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

const SignUpPage = () => {
  const [register, setRegister] = useState({
    Fname:"",
    Lname:"",
    AddFLine:"",
    AddSLine:"",
    Street:"",
    City:"",
    PCode:"",
    MobNum:"",
    FixedNum:"",
    Nic:"",
    Email:"",
    Pword:"",
    CPword:"",
  });

  const navigate = useNavigate();

  const handleChange =(e)=> {
    setRegister((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:8800/user", register)
      console.log("User account has been created successfully");
      navigate("/login")
    } catch (err) {
      console.log(err)
    }
  }
  console.log(register)

  return (
    <>
      <div>
        <NavBar />
        <Footer />
      </div>
      <div className="form">
        <h1>Create New Account</h1>

        <div className="feild">
          <input
            type="text"
            placeholder="FirstName"
            onChange={handleChange}
            name="Fname"
          />
        </div>
        <div className="feild">
          <input
            type="text"
            placeholder="LastName"
            onChange={handleChange}
            name="Lname"
          />

          <div className="feild">
            <input
              type="text"
              placeholder="AddFLine"
              onChange={handleChange}
              name="AddFLine"
            />
          </div>
          <div className="feild">
            <input
              type="text"
              placeholder="AddSLine"
              onChange={handleChange}
              name="addSline"
            />
          </div>
          <div className="feild">
            <input
              type="text"
              placeholder="Street"
              onChange={handleChange}
              name="Street"
            />
          </div>
          <div className="feild">
            <input
              type="text"
              placeholder="City"
              onChange={handleChange}
              name="City"
            />
          </div>
          <div className="feild">
            <input
              type="text"
              placeholder="PostCode"
              onChange={handleChange}
              name="PCode"
            />
          </div>
          <div className="feild">
            <input
              type="text"
              placeholder="MobileNo"
              onChange={handleChange}
              name="MobNum"
            />
          </div>
          <div className="feild">
            <input
              type="text"
              placeholder="FixedLine"
              onChange={handleChange}
              name="FixedNum"
            />
          </div>
          <div className="feild">
            <input
              type="text"
              placeholder="Nic"
              onChange={handleChange}
              name="Nic"
            />
          </div>
          <div className="feild">
            <input
              type="email"
              placeholder="Email"
              onChange={handleChange}
              name="Email"
            />
          </div>
          <div className="feild">
            <input
              type="password"
              placeholder="Password"
              onChange={handleChange}
              name="Pword"
            />
          </div>
          <div className="feild">
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={handleChange}
              name="CPword"
            />
          </div>
        </div>
        <button className="formButton" onClick={handleClick}>
          Register
        </button>
      </div>
    </>
  );
};

export default SignUpPage;
