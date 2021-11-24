import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

export const Navbar = () => {
  return (
    <Router>
      <div className="container d-flex align-items-center">
        <Route to="/" exact className="logo me-auto">
          <span>FitMan</span>
        </Route>

        <nav id="navbar">
          <ul>
            <li>
              <Route to="/register">Register</Route>
            </li>
            <li>
              <Route to="/login">Login</Route>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
};
