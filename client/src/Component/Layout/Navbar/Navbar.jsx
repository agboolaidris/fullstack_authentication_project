import React, { useState } from "react";
import { Link } from "react-router-dom";
import Client from "./Client";
import Guset from "./Guset";

function Navbar() {
  const [state, setstate] = useState(false);
  return (
    <nav>
      <Link className="logo" to="/">
        The Logo
      </Link>
      <>{state ? <Client /> : <Guset />}</>
    </nav>
  );
}

export default Navbar;
