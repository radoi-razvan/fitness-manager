import React from "react";
import { Gym } from "../Gym";
import { STATE, userSetter, loggedInSetter, ownedGymsSetter } from "../State";
import { useAtom } from "jotai";
import { useAtomValue, useUpdateAtom } from "jotai/utils";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export const GymList = () => {
  const [gyms, setGyms] = useAtom(STATE.GYMS);
  const [user] = useAtom(userSetter);
  const [loggedIn] = useAtom(loggedInSetter);
  const ownedGyms = useAtomValue(ownedGymsSetter);
  const setTotalGymsMembers = useUpdateAtom(STATE.GYMS_MEMBERS);
  const [myGymsCheck, setMyGymsCheck] = useAtom(STATE.GYMS_CHECKER);

  useEffect(() => {
    setGyms();
    setTotalGymsMembers();
  }, []);

  const setCheckText = (isChecked) => {
    const label = document.getElementById("checkboxLabel");
    label.innerHTML = isChecked ? `My <em>Gyms</em>` : `All <em>Gyms</em>`;
  };

  return (
    <div id="trainers">
      {loggedIn && "Gyms" in user ? (
        <>
          <NavLink className="btn-1 btn-fixed-left" exact to="/gyms/add">
            Add <em>Gym</em>
          </NavLink>
          <div className="area-fixed-right">
            <input
              type="checkbox"
              className="btn-check"
              id="btn-check-outlined"
              autoComplete="off"
              onClick={(e) => {
                setMyGymsCheck(e.target.checked);
                setCheckText(e.target.checked);
              }}
            />
            <label
              className="btn btn-outline-primary styled-outline-btn"
              htmlFor="btn-check-outlined"
              id="checkboxLabel"
            >
              All <em>Gyms</em>
            </label>
          </div>
        </>
      ) : (
        ""
      )}

      {myGymsCheck
        ? gyms
            .filter((gym) => ownedGyms.includes(gym.GymId))
            .map((gym, index) => (
              <Gym
                name={gym.Name}
                address={gym.Address}
                description={gym.Description}
                gymId={gym.GymId}
                key={index}
              />
            ))
        : gyms.map((gym, index) => (
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
