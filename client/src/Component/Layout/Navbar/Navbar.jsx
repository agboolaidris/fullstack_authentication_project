import React, { useState } from "react";
import { Link } from "react-router-dom";
import Profile from "./profile";
import Nav from "./nav";
import Logout from "../../Auth/Logout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faHamburger } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  const [harmburger, setharmburger] = useState(false);
  return (
    <header>
      <nav>
        <div className="harmburger">
          {harmburger ? (
            <FontAwesomeIcon icon={faHamburger} />
          ) : (
            <FontAwesomeIcon icon={faHamburger} />
          )}
        </div>
        <div className="logo">
          <Link to="/">Iris Blog</Link>
          <span className="underline"></span>
        </div>
        <div className="div">
          <Profile />
          <Nav />
          <Logout />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
