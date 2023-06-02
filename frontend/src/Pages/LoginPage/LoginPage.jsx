import React, { useState } from "react";
import "./LoginPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
// import validate from "../SignUpPage/SignUpValid";
import Logo from "../../Assets/logo_without_text.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please fill all the fields");
    } else if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi.test(
        username
      )
    ) {
      alert("Invalid Email Address");
    } else {
      console.log(username);
      console.log(password);

      axios
        .post("http://localhost:8800/login", {
          username: username,
          password: password,
        })
        .then((res) => {
          if (res.data === "Success") {
            navigate("/userdashboard/:id");
          } else {
            alert("No record existed");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  // const [formErrors, setFormErrors] = useState({});
  // const [formValues, setFormValues] = useState({
  //   Fname: "",

  //   Pword: "",
  // });
  // const navigate = useNavigate();

  // const handleChange = (e) => {
  //   setFormValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  // };

  // const handleClick = (e) => {
  //   navigate("/userdashboard/:id");
  //   // e.preventDefault();
  //   // setFormErrors({});

  //   //   axios
  //   //     .post("http://localhost:8800/login", formValues)
  //   //     .then((res) => {
  //   //       if(res.data==="Success"){
  //   //         navigate("/userdashboard/:id");
  //   //       }else{
  //   //         alert("No record existed");
  //   //       }

  //   //     })
  //   //     .catch((err) => console.log(err));
  // };
  return (
    <div className="login-page">
      <div className="left-column">
        <div className="logo-img">
          <img className="login_logo" src={Logo} alt="web-logo" />
        </div>
        <p
          style={{
            color: "#85857F",
            fontWeight: "bold",
            fontSize: "31px",
            marginTop: "5vh",
            marginLeft: "25vh",
          }}
        >
          PARKING AT YOUR FINGERTIPS
        </p>
      </div>
      <div className="right-column">
        <div className="login-form">
          <h1 style={{ color: "#FAA41E", fontSize: "50px" }}>Ez Park</h1>
          <h2
            style={{
              color: "white",
              marginTop: "5vh",
              fontSize: "30px",
              textAlign: "center",
            }}
          >
            Welcome to Ez park
          </h2>
          <br />
          <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Control
                type="email"
                placeholder="Username"
                name="username"
                value={username}
                onChange={usernameChangeHandler}
                style={{ borderRadius: "45px", width: "400px" }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={passwordChangeHandler}
                style={{
                  borderRadius: "45px",
                  width: "400px",
                  marginTop: "10px",
                }}
              />
            </Form.Group>
          </Form>
          <p
            style={{ color: "#FAA41E", textAlign: "right", marginTop: "50px" }}
          >
            Forgot password?
          </p>
          <Button
            variant="warning"
            onClick={submitHandler}
            style={{
              backgroundColor: "#FAA41E",
              width: "150px",
              borderRadius: "25px",
              alignItems: "center",
              marginLeft: "150px",
            }}
          >
            Sign in
          </Button>{" "}
          <p
            style={{
              color: "white",
              fontSize: "20px",
              textAlign: "center",
              marginTop: "8vh",
            }}
          >
            New?
            <Link to="/signup" style={{ color: "#FAA41E", fontSize: "15px" }}>
              Create an Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
