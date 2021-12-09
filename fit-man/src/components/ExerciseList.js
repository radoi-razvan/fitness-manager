import React from "react";
import { Exercise } from "./Exercise";
import { STATE } from "./State";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { dataHandler } from "../DataManager/DataHandler";
import { useParams } from "react-router";

export const ExerciseList = () => {
  const [exercises, setExercises] = useAtom(STATE.EXERCISES);
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
      {exercises.map((exercise, index) => (
        <Exercise
          name={exercise.Name}
          description={exercise.Description}
          key={index}
        />
      ))}
    </div>
  );
};
