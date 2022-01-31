import React from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { dataHandler } from "../DataManager/DataHandler";
import { userSetter, loggedInSetter, STATE } from "./State";
import { useAtomValue, useUpdateAtom } from "jotai/utils";

export const Exercise = ({ exerciseId, name, description, owned }) => {
  const user = useAtomValue(userSetter);
  const loggedIn = useAtomValue(loggedInSetter);
  const setExercises = useUpdateAtom(STATE.EXERCISES);

  let params = useParams();

  const deleteEvent = (e) => {
    e.preventDefault();
    dataHandler
      .deleteExercise(params.gymId, params.courseId, exerciseId)
      .then(() => setExercises(params));
  };

  return (
    <div className="card-item">
      <div className="card-text">
        <span className="">
          {name}
          <NavLink
            className={`bi bi-pencil-square ms-3 btn-icon ${
              !loggedIn || !("Gyms" in user) || !owned ? "logout-display" : ""
            }`}
            exact
            to={`/gyms/${params.gymId}/courses/${params.courseId}/exercises/${exerciseId}/edit`}
          />
          <i
            className={`delete-icon bi bi-trash-fill ms-3 btn-icon ${
              !loggedIn || !("Gyms" in user) || !owned ? "logout-display" : ""
            }`}
            onClick={(e) => deleteEvent(e)}
          />
        </span>
        <h4 className="">{description}</h4>
      </div>
    </div>
  );
};
