import React from "react";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <div className="header">
      <p>LOGO</p>
      {props.isAuth ? (
        <div>
          {props.login} - <button onClick={props.logout}>Log out</button>
        </div>
      ) : (
        <NavLink to={"/login"} style={{ fontWeight: "bold" }}>
          Login
        </NavLink>
      )}
    </div>
  );
};

export default Header;
