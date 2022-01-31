import React from "react";
import { NavLink } from "react-router-dom";
import { dataHandler } from "../DataManager/DataHandler";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ownedGymsSetter, userSetter, loggedInSetter } from "./State";
import { useAtom } from "jotai";

export const Gym = ({ gymId, name, address, description }) => {
  const [user, ] = useAtom(userSetter);
  const [loggedIn, ] = useAtom(loggedInSetter);
  const [ownedGyms, setOwnedGyms] = useAtom(ownedGymsSetter);

  const history = useHistory();

  const location = useLocation();

  const deleteEvent = async (e) => {
    e.preventDefault();
    setOwnedGyms();
    const response = await dataHandler.deleteGym(gymId);

    typeof response !== "undefined" && response.status === 204
      ? history.go(0)
      : history.push(location);
  };

  return (
    <div className="card-item">
      <img
        src={`${process.env.REACT_APP_BASEIMGURL}${process.env.REACT_APP_GYMIMG}/${name}.png`}
        alt={name}
      />
      <div className="card-text">
        <span>
          <NavLink to={`/gyms/${gymId}/courses`}>{name}</NavLink>
          {ownedGyms.includes(gymId) && (
            <>
              <NavLink
                className={`bi bi-pencil-square ms-3 btn-icon ${
                  !loggedIn || !("Gyms" in user) ? "logout-display" : ""
                }`}
                exact
                to={`/gyms/${gymId}/edit`}
              >
                <i />
              </NavLink>
              <i
                className={`delete-icon bi bi-trash-fill ms-3 btn-icon ${
                  !loggedIn || !("Gyms" in user) ? "logout-display" : ""
                }`}
                onClick={(e) => deleteEvent(e)}
              />
            </>
          )}
        </span>
        <p>{address}</p>
        <h4>{description}</h4>

        <ul className="social-icons">
          <li>
            <a className="icon" href={`${process.env.REACT_APP_FRONTEND}`}>
              <i className="bi bi-facebook"></i>
            </a>
          </li>
          <li>
            <a className="icon" href={`${process.env.REACT_APP_FRONTEND}`}>
              <i className="bi bi-instagram"></i>
            </a>
          </li>
          <li>
            <a className="icon" href={`${process.env.REACT_APP_FRONTEND}`}>
              <i className="bi bi-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
