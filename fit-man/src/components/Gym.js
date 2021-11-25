import React from "react";

export const Gym = ({ name, address, description }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{address}</p>
      <p>{description}</p>
    </div>
  );
};
