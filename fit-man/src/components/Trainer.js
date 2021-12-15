import React from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export const Trainer = ({ trainerId, name, experienceYears, dateOfBirth }) => {
  let params = useParams();

  return (
    <div className="card-item">
      <img src={`${process.env.REACT_APP_BASEIMGURL}${process.env.REACT_APP_TRAINERIMG}/${name}.png`} alt={name} />
      <div className="card-text">
        <span>{name}</span>
        <p>Experience: {experienceYears} years</p>
        {/* <p>{dateOfBirth}</p> */}
        <NavLink
          exact
          to={`/gyms/${params.gymId}/courses/${params.courseId}/trainers/${trainerId}/edit`}
        >
          Edit Trainer
        </NavLink>
      </div>
    </div>
  );
};
