import React from "react";
import { NavLink } from "react-router-dom";
import { dataHandler } from "../../DataManager/DataHandler";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { STATE } from "../State";
import { useAtom } from "jotai";
import { useEffect } from "react";

export const Navbar = () => {
  const [user, setUser] = useAtom(STATE.USER);

  useEffect(() => {
    console.log(user);
    console.log(user.loggedIn);
    setUser({ loggedIn: isLoggedIn() });
  }, []);

  const history = useHistory();

  const location = useLocation();

  const isLoggedIn = async () => {
    const loggedIn = await dataHandler.checkIfLoggedIn();
    console.log(loggedIn.data);
    return loggedIn.data;
  };

  const getCurrentUser = async () => {
    const response = await dataHandler.getUser();
    console.log(response.data);
    console.log(response.data.Email);
    return response.data;
  };

  const logoutEvent = async (e) => {
    e.preventDefault();
    const response = await dataHandler.postLogout();

    typeof response !== "undefined" && response.status === 200
      ? history.go(0)
      : history.push(location);
  };

  return (
    <header id="navbar" className="header-area header-sticky background-header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <NavLink exact to="/" className="logo">
                FITNESS<em>MANAGER</em>
              </NavLink>
              <ul className="nav">
                <li>
                  <NavLink exact to="/gyms">
                    Gyms
                  </NavLink>
                </li>

                <button onClick={(e) => getCurrentUser()}>GetUser</button>
                <button onClick={(e) => logoutEvent(e)}>Logout</button>
                {/* <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li> */}
                {user.loggedIn !== true ? (
                  <>
                    <li>
                      <a href="#">{ getCurrentUser().Email}</a>
                    </li>
                    <li>
                      <button onClick={(e) => logoutEvent(e)}>Logout</button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <NavLink to="/register">Register</NavLink>
                    </li>
                    <li>
                      <NavLink to="/login">Login</NavLink>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
