import React from "react";
import { Gym } from "../Gym";
import { ownedGymsSetter, STATE, userSetter, loggedInSetter } from "../State";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { dataHandler } from "../../DataManager/DataHandler";
import { NavLink } from "react-router-dom";

export const GymList = () => {
  const [gyms, setGyms] = useAtom(STATE.GYMS);
  const [user, ] = useAtom(userSetter);
  const [loggedIn, ] = useAtom(loggedInSetter);
  const [, setOwnedGyms] = useAtom(ownedGymsSetter);

  useEffect(() => {
    getGyms();
  }, []);

  const getGyms = async () => {
    dataHandler.getGyms().then((response) => {
      setGyms(response.data);
      if (loggedIn && user) {
        setOwnedGyms();
      }
    });
  };

  return (
    <div id="trainers">
      <NavLink
        className={`btn-1 btn-fixed-left ${
          !loggedIn || !("Gyms" in user) ? "logout-display" : ""
        }`}
        exact
        to="/gyms/add"
      >
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
