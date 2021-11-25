import React from "react";

export const Gym = ({ name, address, description, gymId }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{address}</p>
      <p>{description}</p>
    </div>
  );
};
