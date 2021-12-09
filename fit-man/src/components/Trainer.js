import React from "react";

export const Trainer = ({ name, experienceYears, dateOfBirth }) => {
  return (
    <div className="card-item">
      <img src={`${process.env.REACT_APP_BASEIMGURL}${process.env.REACT_APP_TRAINERIMG}/${name}.png`} alt={name} />
      <div className="card-text">
        <span>{name}</span>
        <p>Experience: {experienceYears} years</p>
        {/* <p>{dateOfBirth}</p> */}
      </div>
    </div>
  );
};
