import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <ul>
      <li><Link to="whiskey">Whiskey</Link></li>
      <li><Link to="perry">Perry</Link></li>
      <li><Link to="duke">Duke</Link></li>
      <li><Link to="tubby">Tubby</Link></li>
    </ul>
  );
}

export default Nav;