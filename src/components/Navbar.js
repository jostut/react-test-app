import React from "react";
import { Link } from "react-router-dom";

const links = {
  padding: "10px",
  position: "relative",
};

const Navbar = () => {
  return (
    <div style={links} className="navbar">
      <div className="container">
        <div className="links">
          <Link to="/">Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
