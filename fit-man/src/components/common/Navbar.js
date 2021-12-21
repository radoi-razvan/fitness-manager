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
  const [loggedIn, setloggedIn] = useAtom(STATE.LOGGED_IN);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const userResponse = await dataHandler.getUser();
    const loggedResponse = await dataHandler.checkIfLoggedIn();
    setUser(userResponse);
    loggedResponse && setloggedIn(true);
  };

  const history = useHistory();

  const location = useLocation();

  const logoutEvent = async (e) => {
    e.preventDefault();
    const response = await dataHandler.postLogout();
    setUser({});
    setloggedIn(false);

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
                {loggedIn ? (
                  <>
                    <li>
                      <a href="#">{user.Email}</a>
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
