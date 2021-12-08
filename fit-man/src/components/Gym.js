import React from "react";
import { NavLink } from "react-router-dom";
import { GymReviewList } from "./GymReviewList";

export const Gym = ({ gymId, name, address, description }) => {
  return (
    <div className="trainer-item backdrop-item">
      <span className="">
        <NavLink to={`/gyms/${gymId}/courses`}>{name}</NavLink>
      </span>
      {/* <img src={`${process.env.REACT_APP_IMG}/${name}.jpg`} alt={name} /> */}
      <p className="">{address}</p>
      <h4 className="">{description}</h4>
      {/* <GymReviewList gymId={gymId} /> */}
    </div>
  );
};
