import React from "react";
import { Gym } from "./Gym";
import { GYMS } from "./State";
import { useAtom } from "jotai";
import axios from "axios";
import { useState, useEffect } from "react";

export const GymList = () => {
  const [gyms, setGyms] = useAtom(GYMS);

  useEffect(() => {
    getGyms();
  }, []);

  const getGyms = async () => {
    const response = await axios.get("http://localhost:5000/api/gyms");
    console.log(response.data);
    setGyms(response.data);
  };

  return (
    <div>
      {gyms.map((gym) => (
        <Gym
          name={gym.Name}
          address={gym.Address}
          description={gym.Description}
          key={gym.GymId}
        />
      ))}
    </div>
  );
};
