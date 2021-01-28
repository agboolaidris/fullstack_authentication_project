import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link className="logo" to="/">
        The Logo
      </Link>
    </nav>
  );
}

export default Navbar;
