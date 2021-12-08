import React from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

export const Course = ({
  name,
  defaultPrice,
  description,
  schedule,
  courseId,
}) => {
  let params = useParams();

  return (
    <div className="trainer-item backdrop-item">
      <span className="">{name}</span>
      {/* <img src={`${process.env.REACT_APP_IMG}/${name}.jpg`} alt={name} /> */}
      <p className="">$ {defaultPrice}</p>
      <h4 className="">{description}</h4>
      <p>{schedule}</p>
      <NavLink to={`/gyms/${params.gymId}/courses/${courseId}/exercises`}>
        Exercises
      </NavLink>
      <NavLink to={`/gyms/${params.gymId}/courses/${courseId}/trainers`}>
        Trainers
      </NavLink>
    </div>
  );
};
