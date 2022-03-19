import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div className="header__left">
          <h2 className="logo">ExcelKiddiez</h2>
        </div>
      </Link>
      <div className="header__center">
        <ul>
          <li>About</li>
          <li>Help</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="header__right">
        <Link to="/admin">
          <h2>Admin</h2>
        </Link>
      </div>
    </div>
  );
}

export default Header;
