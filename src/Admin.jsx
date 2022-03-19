import React from "react";
import "./Admin.css";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "./Header";
function Admin() {
  return (
    <div className="admin">
      <Header />
      <div className="admincontainer">
        <div className="adminleft">
          <div className="adminleft__header">
            <Avatar src="me.jpg" fontSize={30} />
            <h2>Oluwadamilare Eni</h2>
            <span>Head of Tech</span>
            <p>damilare@yahoo.com</p>
          </div>
          <div className="adminleft__nav">
            <Link to="/studentmgt">
              <div className="navtab">Student Mgts</div>
            </Link>
            <div className="navtab"> Staffs Mgts</div>
            <div className="navtab">Set Themes</div>
            <div className="navtab">Set Profiles</div>
            <div className="navtab">Academic</div>
            <div className="navtab">Report Card</div>
          </div>
        </div>
        <div className="adminCenter">MainContent</div>
      </div>
    </div>
  );
}

export default Admin;
