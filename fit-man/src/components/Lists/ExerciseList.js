import React from "react";
import { Exercise } from "../Exercise";
import { STATE, ownedGymsSetter, userSetter, loggedInSetter} from "../State";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { dataHandler } from "../../DataManager/DataHandler";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

export const ExerciseList = () => {
  const [exercises, setExercises] = useAtom(STATE.EXERCISES);
  const [user, ] = useAtom(userSetter);
  const [loggedIn, ] = useAtom(loggedInSetter);
  const [ownedGyms, ] = useAtom(ownedGymsSetter);
  let params = useParams();

  useEffect(() => {
    getExercises();
  }, []);

  const getExercises = async () => {
    const response = await dataHandler.getExercises(
      params.gymId,
      params.courseId
    );
    setExercises(response.data);
  };

  return (
    <div id="trainers">
      <NavLink
        className={`btn-1 btn-fixed-left ${
          !loggedIn || !("Gyms" in user) || !ownedGyms.includes(parseInt(params.gymId)) ? "logout-display" : ""
        }`}
        exact
        to={`/gyms/${params.gymId}/courses/${params.courseId}/exercises/add`}
      >
        Add Exercise
      </NavLink>
      {exercises.map((exercise, index) => (
        <Exercise
          exerciseId={exercise.ExerciseId}
          name={exercise.Name}
          description={exercise.Description}
          key={index}
          owned={ownedGyms.includes(parseInt(params.gymId))}
        />
      ))}
    </div>
  );
};
