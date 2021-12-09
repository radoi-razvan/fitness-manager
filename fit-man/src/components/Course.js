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
      <div className="image-thumb">
        <img className="gym-logo" src={`${process.env.REACT_APP_BASEIMGURL}${process.env.REACT_APP_COURSEIMG}/${name}.png`} alt={name}/>
      </div>
      <div className="down-content">
        <span className="">{name}</span>
        <p className="">$ {defaultPrice}</p>
        <h4 className="">{description}</h4>
        <p>{schedule}</p>
        <p><NavLink to={`/gyms/${params.gymId}/courses/${courseId}/exercises`}>
          Exercises
        </NavLink></p>
        <p><NavLink to={`/gyms/${params.gymId}/courses/${courseId}/trainers`}>
          Trainers
        </NavLink></p>
      </div>
    </div>
  );
};
