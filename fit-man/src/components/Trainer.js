import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { dataHandler } from "../DataManager/DataHandler";
import { userSetter, loggedInSetter, STATE } from "./State";
import { useAtomValue, useUpdateAtom } from "jotai/utils";
import { FitManStorage, getDownloadURL, ref } from "../Firebase/firebaseConfig";

export const Trainer = ({
  trainerId,
  name,
  experienceYears,
  dateOfBirth,
  owned,
}) => {
  const user = useAtomValue(userSetter);
  const loggedIn = useAtomValue(loggedInSetter);
  const setTrainers = useUpdateAtom(STATE.TRAINERS);

  let params = useParams();

  useEffect(() => {
    getImage();
  }, []);

  const deleteEvent = (e) => {
    e.preventDefault();
    dataHandler
      .deleteTrainer(params.gymId, params.courseId, trainerId)
      .then(() => setTrainers(params));
  };

  const getImage = () => {
    let storageRef = ref(FitManStorage, "/images/trainer" + trainerId + ".png");
    getDownloadURL(storageRef).then((response) => {
      const imgElement = document.getElementById("trainerImage" + trainerId);
      imgElement.setAttribute("src", response);
    });
  };

  return (
    <div className="card-item">
      <img id={`trainerImage${trainerId}`} alt={name} />
      <div className="card-text">
        <span>
          {name},{" "}
          {new Date().getFullYear() - parseInt(dateOfBirth.split("-")[0])}
          <NavLink
            className={`bi bi-pencil-square ms-3 btn-icon ${
              loggedIn === false || "Gyms" in user === false || owned === false
                ? "logout-display"
                : ""
            }`}
            exact
            to={`/gyms/${params.gymId}/courses/${params.courseId}/trainers/${trainerId}/edit`}
          />
          <i
            className={`delete-icon bi bi-trash-fill ms-3 btn-icon ${
              loggedIn === false || "Gyms" in user === false || owned === false
                ? "logout-display"
                : ""
            }`}
            onClick={(e) => deleteEvent(e)}
          />
        </span>
        <p>Experience: {experienceYears} years</p>
      </div>
    </div>
  );
};
