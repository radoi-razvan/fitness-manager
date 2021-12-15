import React from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export const Exercise = ({ exerciseId, name, description }) => {
  let params = useParams();

  return (
    <div className="card-item">
      <div className="card-text">
        <span className="">{name}</span>
        <h4 className="">{description}</h4>
        <NavLink
          exact
          to={`/gyms/${params.gymId}/courses/${params.courseId}/exercises/${exerciseId}/edit`}
        >
          Edit Exercise
        </NavLink>
      </div>
    </div>
  );
};
