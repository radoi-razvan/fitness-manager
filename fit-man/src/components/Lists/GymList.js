import React from "react";
import { Gym } from "../Gym";
import { STATE } from "../State";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { dataHandler } from "../../DataManager/DataHandler";
import { NavLink } from "react-router-dom";

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
    getGyms();
  }, []);

  const getGyms = async () => {
    const response = await dataHandler.getGyms();
    setGyms(response.data);
  };

  return (
    <div id="trainers">
      <NavLink exact to="/gyms/add">
        Add Gym
      </NavLink>
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
