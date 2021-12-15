import React from "react";
import { NavLink } from "react-router-dom";
// import { GymReviewList } from "./GymReviewList";
import { dataHandler } from "../DataManager/DataHandler";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const Gym = ({ gymId, name, address, description }) => {
  const history = useHistory();

  const location = useLocation();

  const deleteEvent = async (e) => {
    e.preventDefault();
    const response = await dataHandler.deleteGym(gymId);

    typeof response !== "undefined" && response.status === 204
      ? history.push("/gyms")
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
        </span>
        <p>{address}</p>
        <h4>{description}</h4>
        {/* <GymReviewList gymId={gymId} /> */}
        <NavLink exact to={`/gyms/${gymId}/edit`}>
          Edit Gym
        </NavLink>
        
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
          <li>
            <i className="icon bi bi-trash-fill ms-5" onClick={(e) => deleteEvent(e)}/>
          </li>
        </ul>
      </div>
    </div>
  );
};
