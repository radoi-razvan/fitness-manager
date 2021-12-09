import React from "react";
import { NavLink } from "react-router-dom";
import { GymReviewList } from "./GymReviewList";

export const Gym = ({ gymId, name, address, description }) => {
  return (
    <div className="trainer-item backdrop-item">
      <div className="image-thumb">
        <img className="gym-logo" src={`${process.env.REACT_APP_GYM_IMG}/${name}.png`} alt={name}/>
      </div>
      <div className="down-content">
        <span className="">
          <NavLink to={`/gyms/${gymId}/courses`}>{name}</NavLink>
        </span>
        <p className="">{address}</p>
        <h4 className="">{description}</h4>
        {/* <GymReviewList gymId={gymId} /> */}
        <ul className="social-icons">
          <li><a href="#"><i className="fa fa-facebook"></i></a></li>
          <li><a href="#"><i className="fa fa-instagram"></i></a></li>
          <li><a href="#"><i className="fa fa-twitter"></i></a></li>
        </ul>
      </div>
    </div>
  );
};
