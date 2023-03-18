import React from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      navigate("/userdashboard/:id");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="signIn">
      <h1>Ez Park</h1>
      <p>Welcome to Ez Park</p>
      <div className="form">
       

        <div className="feild">
          <input type="text" placeholder="Username" name="useraname" />
        </div>
        <div className="feild">
          <input type="password" placeholder="Password" name="password" />
        </div>
      </div>
      <button className="loginButton" onClick={handleClick}>
        Sign in
      </button>
    </div>
  );
};

export default LoginPage;
