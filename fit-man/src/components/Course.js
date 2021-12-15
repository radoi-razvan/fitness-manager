import React from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { dataHandler } from "../DataManager/DataHandler";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const Course = ({
  name,
  defaultPrice,
  description,
  schedule,
  courseId,
}) => {
  let params = useParams();

  const history = useHistory();

  const location = useLocation();

  const deleteEvent = async (e) => {
    e.preventDefault();
    const response = await dataHandler.deleteCourse(params.gymId, courseId);

    typeof response !== "undefined" && response.status === 204
      ? history.push(`/gyms/${params.gymId}/courses`)
      : history.push(location);
  };


  return (
    <div className="card-item course">
      <img
        src={`${process.env.REACT_APP_BASEIMGURL}${process.env.REACT_APP_COURSEIMG}/${name}.png`}
        alt={name}
      />
      <div className="card-text">
        <span>{name}</span>
        <p>$ {defaultPrice}/month</p>
        <h4>{description}</h4>
        <p>Monday to Sunday: {schedule}</p>
        <p>
          <NavLink to={`/gyms/${params.gymId}/courses/${courseId}/exercises`}>
            Exercises
          </NavLink>
        </p>
        <p>
          <NavLink to={`/gyms/${params.gymId}/courses/${courseId}/trainers`}>
            Trainers
          </NavLink>
        </p>
        <NavLink exact to={`/gyms/${params.gymId}/courses/${courseId}/edit`}>
          Edit Course
        </NavLink>
        <button onClick={(e) => deleteEvent(e)}>Delete Course</button>
      </div>
    </div>
  );
};
