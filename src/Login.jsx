import React, { useState } from "react";
// import Header from "./Header";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import "./Login.css";

function Login() {
  const role = useParams();
  const AuthCredentials = {
    username: "nike",
    password: "nike123",
  };
  console.log(role);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
    <div className="login">
      <div className="login__container">
        <form className="login__form">
          <h2>Login Here </h2>
          <div className="login__control">
            <select className="login__role">
              <option>Select Your Role</option>
              <option>Head Master</option>
              <option>Teacher</option>
            </select>
          </div>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Ed-name"
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="password"
          />
          <Button className="login__btn" name="Login" onClick={handleLogin} />
        </form>
        <div className="form__footer">
          <Link to="/passwordrecovery">
            <span>Forgot Password ?</span>
          </Link>
          <Link to="/Register">
            <h2>New User? Enroll here</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
