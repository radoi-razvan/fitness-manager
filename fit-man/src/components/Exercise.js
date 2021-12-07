import React from "react";

export const Exercise = ({ name, description }) => {

  return (
    <div className="trainer-item backdrop-item">
      <span className="">{name}</span>
      <h4 className="">{description}</h4>
    </div>
  );
};
