import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import "./Forgotpassword.css";
import Header from "./Header";
import Input from "./Input";

function Forgotpassword() {
  const AuthCredentials = {
    username: "nike",
    password: "nike123",
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if (
      username === AuthCredentials.username &&
      password === AuthCredentials.password
    ) {
      alert("correct credentials");
      navigate("/excelkiddies");
    } else {
      alert("incorrect login credentials");
    }
    setUsername("");
    setPassword("");
  };
  return (
    <div className="forgotpass">
      <Header />
      <div className="forgotpass__container">
        <form className="forgotpass__form">
          <h2>Let's Help You </h2>
          <h3>Recover Your Password!</h3>
          <div className="login__control">
            <select className="login__role">
              <option>Select Your Role</option>
              <option>Head Master</option>
              <option>Teacher</option>
            </select>
          </div>
          <Input
            type="email"
            value={email}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Email Address"
          />
          <Button
            className="forgotpass__btn"
            name="RECOVER"
            onClick={handleLogin}
          />
        </form>
        <div className="form__footer">
          <Link to="/">
            <span>Now I remember, let me login ?</span>
          </Link>
          <Link to="/Register">
            <h2>New User? Enroll here</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Forgotpassword;
