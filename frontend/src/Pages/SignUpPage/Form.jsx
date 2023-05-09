import React, { useState } from "react";
import SignUpInfo from "./SignUpOne";
import VehicleInfo from "./Vehicle details";
import Complete from "./Complete";
import NavBar from "../../Components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import myImage from "../../Assets/signup_bg.jpg";
import "./SignUpPage.css"

function Form() {
    const navigate = useNavigate();

  const [page, setPage] = useState(0);
  const [formValues, setFormValues]  = useState({
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
    VehicleNo:"",
    VehicleType:"",
  });


  const FormTitles = ["Basic Information", "Vehicle Details", "Success!"];

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formValues={formValues} setFormValues={setFormValues} />;
    } else if (page === 1) {
      return <VehicleInfo formValues={formValues} setFormValues={setFormValues} />;
    } else {
      return <Complete formValues={formValues} setFormValues={setFormValues} />;
    }
  };

  return (
    <>
    <div>
  
    <NavBar /> </div>
    <div style={{ backgroundImage: `url(${myImage})`,backgroundSize:"cover", height:"100vh" }}> 
   
    

    <div className="form">
   
      <div className="progressbar">
        <div
          style={{ width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%" }}
        ></div>
      </div>
      <div className="form-container">
     
        <div className="header">
          <h1 style={{paddingTop:"10px", fontStyle:"bold"}}>{FormTitles[page] }</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <Button variant="outline-warning" style={{width:"175px"}}
            disabled={page === 0 && page ===2}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </Button>
          <Button variant="outline-warning" style={{width:"175px",Color:"black"}}
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                navigate("/Mobileverify");
                console.log(formValues);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
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