import React, { useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

const SignUpPage = () => {
  const [register, setRegister] = useState({
    Fname: "",
    Lname: "",
    AddFLine: "",
    AddSLine: "",
    street: "",
    city: "",
    PCode: "",
    MobNum: "",
    FixedNum: "",
    Nic: "",
    Email: "",
    Pword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setRegister((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/user", register);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  console.log(register);

  return (
    <div className="form">
      <h1>Create New Account</h1>

      <div className="feild">
        <input
          type="text"
          placeholder="FirstName"
          onChange={handleChange}
          name="firstName"
        />
      </div>
      <div className="feild">
        <input
          type="text"
          placeholder="LastName"
          onChange={handleChange}
          name="lastName"
        />

        <div className="feild">
          <input
            type="text"
            placeholder="AddFLine"
            onChange={handleChange}
            name="addFline"
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
            name="street"
          />
        </div>
        <div className="feild">
          <input
            type="text"
            placeholder="City"
            onChange={handleChange}
            name="city"
          />
        </div>
        <div className="feild">
          <input
            type="text"
            placeholder="PostCode"
            onChange={handleChange}
            name="postCode"
          />
        </div>
        <div className="feild">
          <input
            type="text"
            placeholder="MobileNo"
            onChange={handleChange}
            name="mobileNumber"
          />
        </div>
        <div className="feild">
          <input
            type="text"
            placeholder="FixedLine"
            onChange={handleChange}
            name="fixedLine"
          />
        </div>
        <div className="feild">
          <input
            type="text"
            placeholder="Nic"
            onChange={handleChange}
            name="NIC"
          />
        </div>
        <div className="feild">
          <input
            type="email"
            placeholder="Email"
            onChange={handleChange}
            name="email"
          />
        </div>
        <div className="feild">
          <input
            type="password"
            placeholder="Password"
            onChange={handleChange}
            name="password"
          />
        </div>
      </div>
      <button className="formButton" onClick={handleClick}>
        Submit
      </button>
    </div>
  );
};

export default SignUpPage;
