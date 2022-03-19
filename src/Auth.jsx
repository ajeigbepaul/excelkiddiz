import React from "react";
import "./Auth.css";
import Header from "./Header";
import Login from "./Login";
import Register from "./Register";

function Auth() {
  return (
    <div className="auth">
      <div className="auth__container">
        <Header />
        <h2>Welcome to Excel Kiddiz</h2>
        <div className="auth__reg_sigin">
          <Register />
          <Login />
        </div>
      </div>
    </div>
  );
}

export default Auth;
