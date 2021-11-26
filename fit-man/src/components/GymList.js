import React from "react";
import { Gym } from "./Gym";
import { STATE } from "./State";
import { useAtom } from "jotai";
import axios from "axios";
import { apiRoute } from "../DataManager/ApiRoute";
import { useState, useEffect } from "react";
import { dataHandler } from "../DataManager/DataHandler";

export const GymList = () => {
  const [gyms, setGyms] = useAtom(STATE.GYMS);

  useEffect(() => {
    // axios
    //   .get(`http://localhost:5000/api/gyms`)
    //   .then((response) => {
    //     console.log(response.data);
    //     setGyms(response.data);
    //   })
    //   .catch((e) => console.error(e));

    //getGyms();
    getGymsFromDataHandler();

  }, []);

  // const getGyms = async () => {
  //   const response = await axios.get(`${apiRoute}/api/gyms`);
  //   setGyms(response.data);
  // };

  const getGymsFromDataHandler = async () => {
    const data = await dataHandler.getGyms();
    setGyms(data);
  };

  return (
    <div>
      {gyms.map((gym, index) => (
        <Gym
          name={gym.Name}
          address={gym.Address}
          description={gym.Description}
          gymId={gym.GymId}
          key={index}
        />
      ))}
    </div>
  );
};
