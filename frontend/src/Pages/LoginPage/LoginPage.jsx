import React from "react";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="signIn">
      <h1>Ez Park</h1>
      <p>Welcome to Ez Park</p>
      <div className="form">
        <h1>Login</h1>

        <div className="feild">
          <input type="text" placeholder="Username" name="useraname" /></div>
          <div className="feild">
          <input type="password" placeholder="Password" name="password" />
        </div>
      </div>
      <button className="loginButton">Sign in</button>
    </div>
  );
};

export default LoginPage;
