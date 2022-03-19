import React from "react";
import "./Studentmgt.css";
import { Avatar } from "@mui/material";
import Header from "./Header";
function Studentmgt() {
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
            <div className="navtab active">Student Mgts</div>
            <div className="navtab"> Staffs Mgts</div>
            <div className="navtab">Set Themes</div>
            <div className="navtab">Set Profiles</div>
            <div className="navtab">Academic</div>
            <div className="navtab">Report Card</div>
          </div>
        </div>
        <div className="adminCenter">
          <div className="adminCenter__container">
            <div className="manageitem">
              <h2>Upload</h2>{" "}
            </div>
            <div className="manageitem">
              <h2>Add</h2>{" "}
            </div>
            <div className="manageitem">
              {" "}
              <h2>Edit</h2>
            </div>
            <div className="manageitem">
              {" "}
              <h2>Delete</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Studentmgt;
