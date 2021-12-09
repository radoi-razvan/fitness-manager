import React from "react";
import { NavLink } from "react-router-dom";
import { GymReviewList } from "./GymReviewList";

export const Gym = ({ gymId, name, address, description }) => {
  return (
    <div className="card-item">
      <img src={`${process.env.REACT_APP_BASEIMGURL}${process.env.REACT_APP_GYMIMG}/${name}.png`} alt={name}/>
      <div className="card-text">
        <span>
          <NavLink to={`/gyms/${gymId}/courses`}>{name}</NavLink>
        </span>
        <p>{address}</p>
        <h4>{description}</h4>
        {/* <GymReviewList gymId={gymId} /> */}
        <ul className="social-icons">
          <li><a href="#"><i className="bi bi-facebook"></i></a></li>
          <li><a href="#"><i className="bi bi-instagram"></i></a></li>
          <li><a href="#"><i className="bi bi-twitter"></i></a></li>
        </ul>
      </div>
    </div>

  );
};
{/* <div className="card">
<div className="card-image">
  <img className="gym-logo" src={`${process.env.REACT_APP_BASEIMGURL}${process.env.REACT_APP_GYMIMG}/${name}.png`} alt={name} />
  <NavLink to={`/gyms/${gymId}/courses`}>{name} </NavLink>
</div>
<div className="card-text">
     <p className="">{address}</p>
    <h4 className="">{description}</h4>
</div>
</div> */}