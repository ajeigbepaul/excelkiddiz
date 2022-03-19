import React from "react";
import Header from "./Header";
import Login from "./Login";
import "./School.css";
function School() {
  return (
    <div className="school">
      <Header />
      <div className="school__headerinfo">
        <h2>2021/2022 ACADEMIC SESSION</h2>
      </div>
      <div className="school__login">
        <Login />
      </div>
    </div>
  );
}

export default School;
