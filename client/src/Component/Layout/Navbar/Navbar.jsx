import React, { useState } from "react";
import { Link } from "react-router-dom";
import Profile from "./profile";
import Nav from "./client";
import Logout from "../../Auth/Logout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  const [harmburger, setharmburger] = useState(true);
  const handleHarmburger = () => {
    if (harmburger) {
      setharmburger(false);
    } else {
      setharmburger(true);
    }
  };
  return (
    <header>
      <nav>
        <div className="harmburger" onClick={handleHarmburger}>
          {harmburger ? (
            <FontAwesomeIcon icon={faBars} />
          ) : (
            <FontAwesomeIcon icon={faTimes} />
          )}
        </div>
        <div className="logo">
          <Link to="/">Iris Blog</Link>
          <span className="underline"></span>
        </div>
        <div className={harmburger ? "div" : "div div-mobile"}>
          <Profile />
          <Nav handleHarmburger={handleHarmburger} />
          <Logout />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
