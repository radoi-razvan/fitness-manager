import React from "react";
import { Exercise } from "../Exercise";
import {
  STATE,
  ownedGymsSetter,
  userSetter,
  loggedInSetter,
  attendedCoursesSetter,
} from "../State";
import { useAtom } from "jotai";
import { useAtomValue } from "jotai/utils";
import { useEffect } from "react";
import { dataHandler } from "../../DataManager/DataHandler";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

export const ExerciseList = () => {
  const [exercises, setExercises] = useAtom(STATE.EXERCISES);
  const user = useAtomValue(userSetter);
  const loggedIn = useAtomValue(loggedInSetter);
  const ownedGyms = useAtomValue(ownedGymsSetter);
  let params = useParams();

  useEffect(() => {
    setExercises(params);
  }, []);

  return (
    <div id="trainers" className="grid">
      <NavLink
        className={`btn-1 btn-fixed-left ${
          !loggedIn ||
          !("Gyms" in user) ||
          !ownedGyms.includes(parseInt(params.gymId))
            ? "logout-display"
            : ""
        }`}
        exact
        to={`/gyms/${params.gymId}/courses/${params.courseId}/exercises/add`}
      >
        Add <em>Exercise</em>
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
