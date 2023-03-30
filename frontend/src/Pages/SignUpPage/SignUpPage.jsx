import React, { useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import "./SignUpPage.css";
import validate from "../SignUpPage/SignUpValid";



const SignUpPage = () => {
  const img1 = new URL("../../Assets/parking.avif", import.meta.url);
  const [formErrors, setFormErrors] = useState({});
  const [formValues, setFormValues] = useState({
    Fname: "",
    Lname: "",
    AddFLine: "",
    AddSLine: "",
    Street: "",
    City: "",
    PCode: "",
    MobNum: "",
    FixedNum: "",
    Nic: "",
    Email: "",
    Pword: "",
    CPword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick =  (e) => {
    e.preventDefault();
    // console.log(formValues)
    setFormErrors(validate(formValues));
    // if (
    //   formErrors.Fname === "" &&
    //   formErrors.Lname === "" &&
    //   formErrors.AddFLine === "" &&
    //   formErrors.AddSLine === "" &&
    //   formErrors.Street === "" &&
    //   formErrors.City === "" &&
    //   formErrors.PCode === "" &&
    //   formErrors.MobNum === "" &&
    //   formErrors.FixedNum === "" &&
    //   formErrors.Nic === "" &&
    //   formErrors.Email === "" &&
    //   formErrors.Pword === ""
    // ) {
      console.log(formValues)
      axios
        .post("http://localhost:8800/user", formValues)
        .then((res) => {
          navigate("/login");
        })
        .catch((err) => console.log(err));
    //}
  };

  return (
    <>
      <div>
        <NavBar />
        
        <div className="image-container">
          <img src={img1} alt="parking car" />
        </div>
        <Footer />
      </div>
      <div className="container">
        <form >
          <h1>Create New Account</h1>
          <br />
          <div style={{ display: "flex",justifyContent:"space-between"}}>
            <div className="feild">
              <input
                style={{ width: "150%"}}
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="Fname"
                value={formValues.Fname}
              />
            </div>

            <div className="feild">
              <input
                style={{ width: "100%" }}
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="Lname"
                value={formValues.Lname}
              />
            </div>
          </div>
          <p>{formErrors.Fname}</p>
          <div className="feild">
            <input
              type="text"
              placeholder="Address(First Line)"
              onChange={handleChange}
              name="AddFLine"
              value={formValues.AddFLine}
            />
          </div>
          <p>{formErrors.AddFLine}</p>
          <div className="feild">
            <input
              type="text"
              placeholder="Address(Second Line)"
              onChange={handleChange}
              name="AddSLine"
              value={formValues.AddSLine}
            />
          </div>
          <p>{formErrors.AddSLine}</p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="feild">
              <input
                style={{ width: "95%" }}
                type="text"
                placeholder="Street"
                onChange={handleChange}
                name="Street"
                value={formValues.Street}
              />
            </div>
            <div className="feild">
              <input
                style={{ width: "95%" }}
                type="text"
                placeholder="City"
                onChange={handleChange}
                name="City"
                value={formValues.City}
              />
            </div>

            <div className="feild">
              <input
                style={{ width: "100%" }}
                type="text"
                placeholder="Postal Code"
                onChange={handleChange}
                name="PCode"
                value={formValues.PCode}
              />
            </div>
          </div>
          <p>{formErrors.City}</p>
          <p>{formErrors.PCode}</p>
          <div className="feild">
            <input
              type="text"
              placeholder="Mobile Number"
              onChange={handleChange}
              name="MobNum"
              value={formValues.MobNum}
            />
          </div>
          <p>{formErrors.MobNum}</p>
          <div className="feild">
            <input
              type="text"
              placeholder="Fixed Line"
              onChange={handleChange}
              name="FixedNum"
              value={formValues.FixedNum}
            />
          </div>
          <p>{formErrors.FixedNum}</p>
          <div className="feild">
            <input
              type="text"
              placeholder="NIC"
              onChange={handleChange}
              name="Nic"
              value={formValues.Nic}
            />
          </div>
          <p>{formErrors.Nic}</p>
          <div className="feild">
            <input
              type="email"
              placeholder="Email"
              onChange={handleChange}
              name="Email"
              value={formValues.Email}
            />
          </div>
          <p>{formErrors.Email}</p>
          <div className="feild">
            <input
              type="password"
              placeholder="Password"
              onChange={handleChange}
              name="Pword"
              value={formValues.Pword}
            />
          </div>

          <div className="feild">
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={handleChange}
              name="CPword"
              value={formValues.CPword}
            />
          </div>
          <p>{formErrors.CPword}</p>
          <button className="formButton" onClick={handleClick}><strong>submit</strong>
            
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUpPage;
