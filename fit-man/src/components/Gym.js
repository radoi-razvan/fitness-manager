import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { dataHandler } from "../DataManager/DataHandler";
import { ownedGymsSetter, userSetter, loggedInSetter } from "./State";
import { useUpdateAtom, useAtomValue } from "jotai/utils";
import { STATE } from "./State.js";
import {
  firebaseApp,
  FitManStorage,
  getDownloadURL,
  ref,
} from "../Firebase/firebaseConfig.js";

export const Gym = ({ gymId, name, address, description }) => {
  const user = useAtomValue(userSetter);
  const loggedIn = useAtomValue(loggedInSetter);
  const ownedGyms = useAtomValue(ownedGymsSetter);
  const setGyms = useUpdateAtom(STATE.GYMS);
  const totalGymsMembers = useAtomValue(STATE.GYMS_MEMBERS);

  const deleteEvent = (e) => {
    e.preventDefault();
    dataHandler.deleteGym(gymId).then(() => setGyms());
  };

  useEffect(() => {
    getImage();
  }, []);

  const getImage = () => {
    let storageRef = ref(FitManStorage, "/images/gym" + gymId + ".png");
    getDownloadURL(storageRef).then((response) => {
      const imgElement = document.getElementById("gymImage" + gymId);
      imgElement.setAttribute("src", response);
    });
  };

  return (
    <div className="card-item">
      <img
        id={`gymImage${gymId}`}
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
              />
              <i
                className={`delete-icon bi bi-trash-fill ms-3 btn-icon ${
                  !loggedIn || !("Gyms" in user) ? "logout-display" : ""
                }`}
                onClick={(e) => deleteEvent(e)}
              />
            </>
          )}
        </span>
        <p className="address">
          <span>
            <i className="bi bi-people-fill"></i>{" "}
            {totalGymsMembers.map(
              (o) => o.GymId === gymId && o.TotalGymMembers
            )}
          </span>
          {address}
        </p>
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
