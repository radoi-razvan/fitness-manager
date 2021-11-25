import React from "react";

export const Gym = ({ name, address, description, gymId }) => {
  return (
    <div className="mycard">
      <p className="mytitle">{name}</p>
      <p className="myinfo">{address}</p>
      <p className="mydescription">{description}</p>
    </div>
  );
};
