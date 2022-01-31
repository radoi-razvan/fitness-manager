import React from "react";
import { Trainer } from "../Trainer";
import { STATE, ownedGymsSetter, userSetter, loggedInSetter } from "../State";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { dataHandler } from "../../DataManager/DataHandler";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

export const TrainerList = () => {
  const [trainers, setTrainers] = useAtom(STATE.TRAINERS);
  const [user, ] = useAtom(userSetter);
  const [loggedIn, ] = useAtom(loggedInSetter);
  let params = useParams();
  const [ownedGyms, ] = useAtom(ownedGymsSetter);

  useEffect(() => {
    getTrainers();
  }, []);

  const getTrainers = async () => {
    const response = await dataHandler.getTrainers(
      params.gymId,
      params.courseId
    );
    setTrainers(response.data);
  };

  return (
    <div id="trainers">
      <NavLink
        className={`btn-1 btn-fixed-left ${
          !loggedIn || !("Gyms" in user) || !ownedGyms.includes(parseInt(params.gymId)) ? "logout-display" : ""
        }`}
        exact
        to={`/gyms/${params.gymId}/courses/${params.courseId}/trainers/add`}
      >
        Add Trainer
      </NavLink>
      {trainers.map((trainer, index) => (
        <Trainer
          trainerId={trainer.TrainerId}
          name={trainer.Name}
          experienceYears={trainer.ExperienceYears}
          dateOfBirth={trainer.DateOfBirth}
          key={index}
          owned={ownedGyms.includes(parseInt(params.gymId))}
        />
      ))}
    </div>
  );
};
