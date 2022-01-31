import React from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { dataHandler } from "../DataManager/DataHandler";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { userSetter, loggedInSetter } from "./State";
import { useAtom } from "jotai";

export const Exercise = ({ exerciseId, name, description, owned }) => {
  const [user, ] = useAtom(userSetter);
  const [loggedIn, ] = useAtom(loggedInSetter);

  let params = useParams();

  const history = useHistory();

  const location = useLocation();

  const deleteEvent = async (e) => {
    e.preventDefault();
    const response = await dataHandler.deleteExercise(
      params.gymId,
      params.courseId,
      exerciseId
    );

    typeof response !== "undefined" && response.status === 204
      ? history.go(0)
      : history.push(location);
  };

  return (
    <div className="card-item">
      <div className="card-text">
        <span className="">
          {name}
          <NavLink
            className={`bi bi-pencil-square ms-3 btn-icon ${
              !loggedIn || !("Gyms" in user) || !owned 
                ? "logout-display"
                : ""
            }`}
            exact
            to={`/gyms/${params.gymId}/courses/${params.courseId}/exercises/${exerciseId}/edit`}
          />
          <i
            className={`delete-icon bi bi-trash-fill ms-3 btn-icon ${
              !loggedIn || !("Gyms" in user) || !owned
                ? "logout-display"
                : ""
            }`}
            onClick={(e) => deleteEvent(e)}
          />
        </span>
        <h4 className="">{description}</h4>
      </div>
    </div>
  );
};
