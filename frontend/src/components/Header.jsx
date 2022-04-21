/** @format */
import React from "react";
import { FaUser, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">Goal Setter</Link>
      </div>
      <div className="nav_items">
        <Link to="/login">
          {" "}
          <FaSignInAlt />
          Login
        </Link>
        <Link to="/register">
          <FaUser />
          Register
        </Link>
      </div>
    </header>
  );
}

export default Header;
