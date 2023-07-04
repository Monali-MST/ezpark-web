import React, { useState, useContext } from "react";
import SignUpInfo from "./SignUpOne";
import VehicleInfo from "./VehicleDetails";
import Complete from "./Complete";
import axios from "axios";
import NavBar from "../../Components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import myImage from "../../Assets/signup_bg.jpg";
import "./SignUpPage.css";
import { SignUpContext } from "../../App";

function Form() {
  const [
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

  const char = "v";

  const PageDisplay = () => {
    if (pageNo === 0) {
      return (
        <SignUpInfo formValues={formValues} setFormValues={setFormValues} />
      );
    } else if (pageNo === 1) {
      return (
        <VehicleInfo formValues={formValues} setFormValues={setFormValues} />
      );
    } else {
      return <Complete formValues={formValues} setFormValues={setFormValues} />;
    }
  };

  const checkValidate = () => {
    if (pageNo === 0) {
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
      } else if (
        !/^[a-zA-Z]+$/.test(formValues.Fname) ||
        !/^[a-zA-Z]+$/.test(formValues.Lname)
      ) {
        alert("First Name and Last Name should only contain letters");
        setIsValid(false);
      } else if (!/^[a-zA-Z0-9]+$/.test(formValues.PCode)) {
        alert("Invalid Postal Code");
        setIsValid(false);
      } else if (
        formValues.Nic.toLowerCase().includes(char.toLowerCase()) &&
        formValues.Nic.length !== 10
      ) {
        alert("Nic Not Valid");
        setIsValid(false);
      } else if (formValues.Pword.length < 8) {
        alert("Password should min 8 charactors");
        setIsValid(false);
      } else if (formValues.CPword.length < 8) {
        alert("Password should min 8 charactors");
        setIsValid(false);
      } else if (!formValues.MobNum.startsWith("+94")) {
        alert("Mobile No should start with +94");
        setIsValid(false);
      } else if (formValues.MobNum.length != 12) {
        alert("Mobile No not valide");
        setIsValid(false);
      } else if (
        !formValues.Nic.toLowerCase().includes(char.toLowerCase()) &&
        formValues.Nic.length != 12
      ) {
        alert("Nic Not Valid");
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
        if (pageNo === FormTitles.length - 1) {
          alert("FORM SUBMITTED");
          navigate("/Mobileverify");
        } else {
          setPage((currPage) => currPage + 1);
          setPageNo((currPage) => currPage + 1);
          console.log("test context", pageNo);
        }
      }
    } else if (pageNo === 1) {
      
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
        if (pageNo === FormTitles.length - 1) {
          alert("FORM SUBMITTED");
          navigate("/Mobileverify");
        } else {
          SetDataSet(formValues);
          navigate("/Mobileverify", {
            state: { formValues, nextURL: "/emailverify" },
          });
        }
      }
    } else {
      if (pageNo === FormTitles.length - 1) {
        axios
          .post("http://localhost:8800/api/user/user", dataSet)
          .then((res) => {
            if (res.status === 200) {
              axios
                .post("http://localhost:8800/api/user/vehicles", dataSet)
                .then((res) => {
                  console.log(res.status);

                  if (res.status == 200) {
                    alert("submitted successfully");
                    axios
                      .get(
                        `http://localhost:8800/api/user/getUserId/${dataSet.Email}`
                      )
                      .then((res) => {
                        const userID = res.data;
                        console.log(res.data);
                        navigate(`/userdashboard?id=${userID}`);
                      })
                      .catch((err) => {
                        alert(err.message);
                      });
                  }
                })
                .catch((err) => {
                  alert(err.response.data);
                });
            }
          })
          .catch((err) => {
            alert(err.response.data);
          });
      } else {
        setPage((currPage) => currPage + 1);
        setPageNo((currPage) => currPage + 1);
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
                width: pageNo === 0 ? "33.3%" : pageNo === 1 ? "66.6%" : "100%",
              }}
            ></div>
          </div>
          <div className="form-container">
            <div className="header">
              <h1 style={{ paddingTop: "10px", fontStyle: "bold" }}>
                {FormTitles[pageNo]}
              </h1>
            </div>
            <div className="body">{PageDisplay()}</div>
            <div className="footer">
              <Button
                variant="outline-warning"
                style={{ width: "175px" }}
                disabled={pageNo === 0 && pageNo === 2}
                onClick={() => {
                  setPage((currPage) => currPage - 1);
                  setPageNo((currPage) => currPage - 1);
                }}
              >
                Prev
              </Button>
              <Button
                variant="outline-warning"
                style={{ width: "175px", Color: "black", marginLeft: "45px" }}
                onClick={checkValidate}
              >
                {pageNo === FormTitles.length - 1 ? "Submit" : "Next"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
