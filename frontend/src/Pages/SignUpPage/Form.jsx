import React, { useState } from "react";
import SignUpInfo from "./SignUpOne";
import VehicleInfo from "./VehicleDetails";

import Complete from "./Complete";
import axios from "axios";
import NavBar from "../../Components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import myImage from "../../Assets/signup_bg.jpg";
import "./SignUpPage.css";

function Form() {
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(false);
  const [page, setPage] = useState(0);
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
    Vehical: [
      {
        VehicleNo: "",
        VehicleType: "",
      },
    ],
    AgreeTerms: false,
  });

  const FormTitles = ["Basic Information", "Vehicle Details", "Success!"];

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <SignUpInfo formValues={formValues} setFormValues={setFormValues} />
      );
    } else if (page === 1) {
      return (
        <VehicleInfo formValues={formValues} setFormValues={setFormValues} />
      );
    } else {
      return <Complete formValues={formValues} setFormValues={setFormValues} />;
    }
  };

  const checkValidate = () => {
    if (page === 0) {
      if (
        !formValues.Fname ||
        !formValues.Lname ||
        !formValues.AddFLine ||
        !formValues.Street ||
        !formValues.City ||
        !formValues.PCode ||
        !formValues.MobNum ||
        !formValues.FixedNum ||
        !formValues.Nic ||
        !formValues.Email ||
        !formValues.Pword ||
        !formValues.CPword ||
        !formValues.AgreeTerms
      ) {
        alert("Please fill all the fields");
        setIsValid(false);
      } else if (formValues.PCode < 0) {
        alert("Invalid Postal Code");
        setIsValid(false);
      } else if (
        !/\d/.test(formValues.MobNum) ||
        !/\d/.test(formValues.FixedNum)
      ) {
        alert("Invalid Phone Number");
        setIsValid(false);
      } else if (
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi.test(
          formValues.Email
        )
      ) {
        alert("Invalid Email Address");
        setIsValid(false);
      } else if (formValues.Pword !== formValues.CPword) {
        alert("Confirm Password is not matching");
        setIsValid(false);
      } else {
        setIsValid(true);
        if (page === FormTitles.length - 1) {
          alert("FORM SUBMITTED");
          navigate("/Mobileverify");
          console.log(formValues);
        } else {
          setPage((currPage) => currPage + 1);
        }
      }
    } else if (page === 1) {
      console.log(formValues);
      if (
        !formValues.Vehical[formValues.Vehical.length - 1].VehicleNo ||
        !formValues.Vehical[formValues.Vehical.length - 1].VehicleType
      ) {
        alert(
          "Please enter at least one vehical details or Fill all the fields"
        );
        setIsValid(false);
      } else {
        setIsValid(true);
        if (page === FormTitles.length - 1) {
          alert("FORM SUBMITTED");
          navigate("/Mobileverify");
          console.log(formValues);
        } else {
          setPage((currPage) => currPage + 1);
        }
      }
    } else {
      // if (page === FormTitles.length - 1) {
      //   const userPostPromise = axios.post("http://localhost:8800/user", formValues);
      //   const vehiclePostPromise = axios.post("http://localhost:8800/vehicle", formValues);
      
      //   Promise.all([userPostPromise, vehiclePostPromise])
      //     .then((res) => {
      //       const userResponse = res[0].data;
      //       const vehicleResponse = res[1].data;
      
      //       console.log(userResponse);
      //       console.log(vehicleResponse);
      
      //       if (userResponse === "Success" && vehicleResponse === "Success") {
      //         alert("FORM SUBMITTED");
      //         navigate("/Mobileverify");
      //       } else {
      //         alert("Something went wrong");
      //       }
      //     })
      //     .catch((error) => {
      //       console.error(error);
      //     });
      // } else {
      //   setPage((currPage) => currPage + 1);
      // }
      
      if (page === FormTitles.length - 1) {
        axios.post("http://localhost:8800/user", formValues)
          // .post("http://localhost:8800/vehical", formValues)
          .then((res) => {
            if (res.data === "Success") {
              // alert("FORM SUBMITTED");
              axios.post("http://localhost:8800/generateOTP", {"MobNum":formValues.MobNum})
              .then((res) => {
                if(res.data === 200){
                  localStorage.setItem("MobNum",formValues.MobNum);
                  navigate("/Mobileverify")
                }else{
                  alert("Something wrong");
                }
              }
              )
            } else {
              alert("Something wrong");
            }
          })
          .catch((err) => console.log(err));
      } else {
        setPage((currPage) => currPage + 1);
      }
    }
  };

  return (
    <>
      <div>
        <NavBar />{" "}
      </div>
      <div
        style={{
          backgroundImage: `url(${myImage})`,
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <div className="form">
          <div className="progressbar">
            <div
              style={{
                width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%",
              }}
            ></div>
          </div>
          <div className="form-container">
            <div className="header">
              <h1 style={{ paddingTop: "10px", fontStyle: "bold" }}>
                {FormTitles[page]}
              </h1>
            </div>
            <div className="body">{PageDisplay()}</div>
            <div className="footer">
              <Button
                variant="outline-warning"
                style={{ width: "175px" }}
                disabled={page === 0 && page === 2}
                onClick={() => {
                  setPage((currPage) => currPage - 1);
                }}
              >
                Prev
              </Button>
              <Button
                variant="outline-warning"
                style={{ width: "175px", Color: "black", marginLeft: "45px" }}
                onClick={checkValidate}
                // onClick={() => {
                //   <SignUpValid
                //     page={page}
                //     formValues={formValues}
                //     isValid={isValid}
                //     setIsValid={setIsValid}
                //   />;
                //   if (isValid) {
                //     if (page === FormTitles.length - 1) {
                //       alert("FORM SUBMITTED");
                //       navigate("/Mobileverify");
                //       console.log(formValues);
                //     } else {
                //       setPage((currPage) => currPage + 1);
                //     }
                //   } else {
                //     alert("Something is wrong");
                //   }
                // }}
              >
                {page === FormTitles.length - 1 ? "Submit" : "Next"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;


