import React from "react";

export const Exercise = ({ name, description }) => {

  return (
    <div className="card-item">
      <div className="card-text">
        <span className="">{name}</span>
        <h4 className="">{description}</h4>
      </div>
    </div>
  );
};
