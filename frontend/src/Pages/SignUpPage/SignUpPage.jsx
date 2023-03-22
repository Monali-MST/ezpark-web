import React, { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import '../SignUpPage/SignUpPage.css';

function SignUpPage() {
  const initialValues = {
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
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    try {
      await axios.post("http://localhost:8800/user", formValues);
      console.log("User account has been created successfully");
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.Fname) {
      errors.Fname = "First Name is required!";
    }
    if (!values.Lname) {
      errors.Lname = "Last Name is required";
    }
    if (!values.AddFLine) {
      errors.AddFLine = "Address  is required";
    }
    if (!values.City) {
      errors.City = "City is required";
    }
    if (!values.MobNum) {
      errors.MobNum = "Mobile Number is required";
    } else if (values.MobNum.length > 10) {
      errors.MobNum = "Mobile Number cannot exceed more than 10 characters";
    }
    if (!values.Nic) {
      errors.Nic = "NIC is required";
    }
    if (!values.Email) {
      errors.Email = "Last Name is required!";
    } else if (!regex.test(values.Email)) {
      errors.Email = "This is not a valid email format!";
    }
    if (!values.Pword) {
      errors.Pword = "Password is required";
    } else if (values.Pword.length < 4) {
      errors.Pword = "Password must be more than 4 characters";
    } else if (values.Pword.length > 10) {
      errors.Pword = "Password cannot exceed more than 10 characters";
    }
    if (!values.CPword) {
      errors.CPword = "Confirm Passsword is required";
    } else if (values.CPword !== values.CPword) {
      errors.CPword = "Password does not match";
    }
    return errors;
  };

  return (
    <>
      <NavBar />
     
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Create Account</h1>
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="field">
              <input
                type="text"
                name="Fname"
                placeholder="First name"
                value={formValues.Fname}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.Fname}</p>
            <div className="field">
              <input
                type="text"
                name="Lname"
                placeholder="Last Name"
                value={formValues.Lname}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.Lname}</p>
            <div className="field">
              <input
                type="text"
                name="AddFLine"
                placeholder="Address(First line)"
                value={formValues.AddFLine}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.AddFLine}</p>
            <div className="field">
              <input
                type="text"
                name="AddSLine"
                placeholder="Address(Second line)"
                value={formValues.AddSLine}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.AddSLine}</p>
            <div className="field">
              <input
                type="text"
                name="Street"
                placeholder="Street"
                value={formValues.Street}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.Street}</p>
            <div className="field">
              <input
                type="text"
                name="City"
                placeholder="City"
                value={formValues.City}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.City}</p>
            <div className="field">
              <input
                type="text"
                name="  PCode"
                placeholder="Postal code"
                value={formValues.PCode}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.PCode}</p>
            <div className="field">
              <input
                type="text"
                name="MobNum"
                placeholder="Mobile Number"
                value={formValues.MobNum}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.MobNum}</p>
            <div className="field">
              <input
                type="text"
                name="FixedNum"
                placeholder="Fixed Line"
                value={formValues.FixedNum}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.FixedNum}</p>
            <div className="field">
              <input
                type="text"
                name=" Nic"
                placeholder="NIC"
                value={formValues.Nic}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.Nic}</p>
            <div className="field">
              <input
                type="text"
                name="Email"
                placeholder="Email"
                value={formValues.Email}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.Email}</p>
            <div className="field">
              <input
                type="text"
                name="Pword"
                placeholder="Password"
                value={formValues.Pword}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.Pword}</p>

            <div className="field">
              <input
                type="password"
                security="true"
                name=" CPword"
                placeholder="Confifrm Password"
                value={formValues.CPword}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.CPword}</p>
            <button className="fluid ui button blue">Register</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUpPage;
