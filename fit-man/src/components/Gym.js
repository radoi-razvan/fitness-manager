import React from "react";

export const Gym = ({ name, address, description }) => {
  return (
    <div className="trainer-item backdrop-item">
      <span className="">{name}</span>
      <p className="">{address}</p>
      <h4 className="">{description}</h4>
    </div>
  );
};
