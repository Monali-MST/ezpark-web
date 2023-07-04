import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit:", email);
     axios.post("http://localhost:8800/api/user/verifyEmail",{email}).then((res)=>{
      const formValues = {Email:email, Fname:null, Lname:null}
      navigate("/emailverify",{state: {formValues, nextURL:"/reset"}});
     }).catch((err)=>{

      alert("Email doesn't exist")

     });
    
    
    // Handle the form submission, e.g., send a reset password email
  };

  return (
    <div>
      <Header />
      <div style={styles.container}>
        <h2 style={{ marginLeft: "40px", paddingTop: "8vh" }}>
          Forgot your password?
        </h2>
        <h3 style={{ fontSize: "16px", marginLeft: "40px" }}>
          Please enter the email you use to sign in to acme
        </h3>
        <form style={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="email" style={styles.label}>
            Your Work Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Continue
          </button>
          <Link
            to="/login"
            style={{
              color: "#FAA41E",
              fontSize: "15px",
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            Back to Sign in
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
