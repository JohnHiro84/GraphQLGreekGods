import React from "react";
import {Route, Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Link to="/">Index</Link>
      <Link to="/new">New</Link>
    </div>
  );
};



export default Nav;
