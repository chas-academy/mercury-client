import React, { Component } from "react";
import { Link } from "react-router";
import { Button } from "../Button";

const GlobalNav = () => (
  <nav className="navbarMenu">
    <Button>
      <Link to="/">Home</Link>
    </Button>
    <Button>
      <Link to="/add">Add</Link>
    </Button>
    <Button>
      <Link to="/settings">Settings</Link>
    </Button>
  </nav>
);

export default GlobalNav;
