import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBlog } from "@fortawesome/free-solid-svg-icons";
import Logout from "../../Auth/Logout";

function Nav() {
  return (
    <ul className="nav">
      <li>
        <FontAwesomeIcon icon={faHome} />
        <Link to="/">Home</Link>
      </li>
      <li to="/">
        <FontAwesomeIcon icon={faBlog} />
        <Link>Recent Blog</Link>
      </li>
      <li to="/">
        <FontAwesomeIcon icon={faHome} />
        <Link>Trending Blog</Link>
      </li>
      <li to="/">
        <FontAwesomeIcon icon={faHome} />
        <Link>Favorite Blog</Link>
      </li>
      <li>
        <FontAwesomeIcon icon={faHome} />
        <Link>Post Blog</Link>
      </li>
      <span className="underline"></span>
      <li to="/">
        <FontAwesomeIcon icon={faHome} />
        <Link>Setting</Link>
      </li>
    </ul>
  );
}

export default Nav;
