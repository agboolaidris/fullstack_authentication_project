import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBlog,
  faHeart,
  faChartLine,
  faCog,
  faPencilAlt,
} from "@fortawesome/free-solid-svg-icons";

function Client({ handleHarmburger }) {
  return (
    <ul className={"nav"}>
      <li onClick={handleHarmburger} onClick={handleHarmburger}>
        <FontAwesomeIcon icon={faHome} />
        <Link to="/">Home</Link>
      </li>
      <li onClick={handleHarmburger}>
        <FontAwesomeIcon icon={faBlog} />
        <Link to="/user/blogs">My Blogs</Link>
      </li>

      <li onClick={handleHarmburger}>
        <FontAwesomeIcon icon={faHeart} />
        <Link to="/favourite">Save Blog</Link>
      </li>
      <li onClick={handleHarmburger}>
        <FontAwesomeIcon icon={faPencilAlt} />
        <Link to="/post">Post Blog</Link>
      </li>
      <span className="underline"></span>
      <li onClick={handleHarmburger}>
        <FontAwesomeIcon icon={faCog} />
        <Link to="/profile">Setting</Link>
      </li>
    </ul>
  );
}

export default Client;
