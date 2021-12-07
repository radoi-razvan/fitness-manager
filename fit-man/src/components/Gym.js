import React from "react";
import { NavLink } from "react-router-dom";

export const Gym = ({ gymId, name, address, description }) => {
  return (
    <div className="trainer-item backdrop-item">
      <span className=""><NavLink to={`/gyms/${gymId}/courses`}>{name}</NavLink></span>
      <p className="">{address}</p>
      <h4 className="">{description}</h4>
    </div>
  );
};
