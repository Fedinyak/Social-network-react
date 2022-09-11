import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="list navbar__list">
      <li className="navbar__item">
        <NavLink to="/dialogs">Messages</NavLink>
      </li>
      <li className="navbar__item">
        <NavLink to="/profile">Profile</NavLink>
      </li>
      <li className="navbar__item">
        <NavLink to="/users">Users</NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
