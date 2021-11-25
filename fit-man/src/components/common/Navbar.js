import React from "react";
import { NavLink } from "react-router-dom";


export const Navbar = () => {
  return (
           
        <nav id="navbar" className="mynavbar">
          <div className="nav-ulist">
            <div className="mynavtitle">
              <NavLink exact to="/">FitMan</NavLink >
            </div>
            <div className="mynavitem">
              <NavLink exact to="/api/gyms">Gyms</NavLink >             
            </div>
            <div className="mynavitem myaccountitem">
              <NavLink  to="/api/register">Register</NavLink>
            </div>
            <div className="mynavitem">
              <NavLink  to="/api/login">Login</NavLink>
            </div>
          </div>
        </nav>
          );
};