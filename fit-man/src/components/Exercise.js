import React from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { dataHandler } from "../DataManager/DataHandler";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const Exercise = ({ exerciseId, name, description }) => {
  let params = useParams();

  const history = useHistory();

  const location = useLocation();

  const deleteEvent = async (e) => {
    e.preventDefault();
    const response = await dataHandler.deleteExercise(params.gymId, params.courseId, exerciseId);

    typeof response !== "undefined" && response.status === 204
      ? history.push(`/gyms/${params.gymId}/courses/${params.courseId}/exercises`)
      : history.push(location);
  };

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
        <button onClick={(e) => deleteEvent(e)}>Delete Exercise</button>
      </div>
    </div>
  );
};
