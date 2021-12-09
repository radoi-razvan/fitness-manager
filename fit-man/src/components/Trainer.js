import React from "react";

export const Trainer = ({ name, experienceYears, dateOfBirth }) => {
  return (
    <div className="trainer-item backdrop-item">
      {/* <img src={`${process.env.REACT_APP_IMG}/${name}.jpg`} alt={name} /> */}
      <span>{name}</span>
      <p>Experience: {experienceYears} years</p>
      <p>{dateOfBirth}</p>
    </div>
  );
};
