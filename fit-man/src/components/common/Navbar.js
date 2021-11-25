import React, { useState } from "react";
import { BrowserRouter, Route, NavLink, Link } from "react-router-dom";
import { GymList } from "../GymList";

export const Navbar = () => {
  return (
      <div className="container d-flex align-items-center">
        <NavLink exact to="/">FitMan</NavLink >
        <nav id="navbar">
          <ul>
            <li>
              <NavLink exact to="/api/gyms">Gyms</NavLink >             
            </li>
            <li>
              <NavLink  to="/api/register">Register</NavLink>
            </li>
            <li>
              <NavLink  to="/api/login">Login</NavLink>
            </li>
          </ul>
        </nav>
      </div>
  );
};