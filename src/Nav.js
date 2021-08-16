import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <span> <Link to="/dogs/whiskey"> Whiskey </Link> </span>
      <span> <Link to="/dogs/perry"> Perry </Link> </span>
      <span> <Link to="/dogs/duke"> Duke </Link> </span>
      <span> <Link to="/dogs/tubby"> Tubby </Link> </span>
    </div>
  );
}

export default Nav;