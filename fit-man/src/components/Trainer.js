import React from "react";

export const Trainer = ({ name, experienceYears, dateOfBirth }) => {
  return (
    <div className="trainer-item backdrop-item">
      <img className="gym-logo" src={`${process.env.REACT_APP_BASEIMGURL}${process.env.REACT_APP_TRAINERIMG}/${name}.png`} alt={name} />
      <span>{name}</span>
      <p>Experience: {experienceYears} years</p>
      <p>{dateOfBirth}</p>
    </div>
  );
};
