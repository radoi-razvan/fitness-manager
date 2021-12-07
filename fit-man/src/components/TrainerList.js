import React from "react";
import { Trainer } from "./Trainer";
import { STATE } from "./State";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { dataHandler } from "../DataManager/DataHandler";
import { useParams } from "react-router";

export const TrainerList = () => {
  const [trainers, setTrainers] = useAtom(STATE.TRAINERS);
  let params = useParams();

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
    <div>
      {trainers.map((trainer, index) => (
        <Trainer
          name={trainer.Name}
          experienceYears={trainer.ExperienceYears}
          dateOfBirth={trainer.DateOfBirth}
          key={index}
        />
      ))}
    </div>
  );
};
