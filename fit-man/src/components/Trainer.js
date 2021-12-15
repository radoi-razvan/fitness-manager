import React from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { dataHandler } from "../DataManager/DataHandler";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const Trainer = ({ trainerId, name, experienceYears, dateOfBirth }) => {
  let params = useParams();

  const history = useHistory();

  const location = useLocation();

  const deleteEvent = async (e) => {
    e.preventDefault();
    const response = await dataHandler.deleteTrainer(params.gymId, params.courseId, trainerId);

    typeof response !== "undefined" && response.status === 204
      ? history.push(`/gyms/${params.gymId}/courses/${params.courseId}/trainers`)
      : history.push(location);
  };

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
        <button onClick={(e) => deleteEvent(e)}>Delete Trainer</button>
      </div>
    </div>
  );
};
