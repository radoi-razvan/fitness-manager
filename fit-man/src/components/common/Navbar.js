import React from "react";
import { NavLink } from "react-router-dom";


export const Navbar = () => {
  return (
           
        <header id="navbar" className="header-area header-sticky background-header">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="main-nav">
                  <NavLink exact to="/" className="logo">FITNESS<em>MANAGER</em></NavLink>
                  <ul className="nav">
                    <li>
                      <NavLink exact to="/gyms">Gyms</NavLink >   
                    </li>
                    <li>
                      <NavLink to="/register">Register</NavLink>   
                    </li>
                    <li>
                      <NavLink to="/login">Login</NavLink>   
                    </li>

                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
          );
};