import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { useNavigate } from "react-router-dom";
import baseUrl from "../../Apis/baseUrl";

const styles = {
  container: {
    width: "70vh",
    height: "50vh",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 0 15px 1px rgba(0, 0, 0, 0.4)",
    marginTop: "20vh",
    marginLeft: "70vh",
  },
  form: {
    margin: "40px",
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
  },
  label: {
    marginBottom: "5px",
  },
  input: {
    padding: "5px",
    marginBottom: "10px",
    width: "400px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#faa41e",
    color: "white",

    cursor: "pointer",
    width: "400px",
  },
};

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState();
  const [cpassword, setcPassword] = useState();
  const location = useLocation();
  const data = location.state;
  console.log(data)
  const formValues = data.formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit:");
    baseUrl.put("resetPassword",{Email:formValues.Email ,password}).then((res)=>{
      navigate("/login");

    }).catch((err)=>{
      console.log(err)
    })
    // Handle the form submission, e.g., send a reset password email
  };

  return (
    <div>
      <Header />
      <div style={styles.container}>
        <h2 style={{ marginLeft: "40px", paddingTop: "5vh" }}>
          Reset Password
        </h2>
       
          
     
        <form style={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="email" style={styles.label}>
           New Password:
          </label>
          <input
            type="password"
            id="psw"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
           <label htmlFor="email" style={styles.label}>
            Confirm Password:
          </label>
          <input
            type="password"
            id="cpsw"
            value={cpassword}
            onChange={(e) => setcPassword(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Reset Password
          </button>
         
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
