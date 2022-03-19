import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import "./Enrol.css";
import Input from "./Input";

function Enrol() {
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
      <div className="forgotpass__container">
        <form className="forgotpass__form">
          <h2>Let's Help You </h2>
          <h3>Get Started!</h3>
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
            name="Enroll"
            onClick={handleLogin}
          />
        </form>
      </div>
    </div>
  );
}

export default Enrol;
