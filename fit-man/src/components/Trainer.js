import React from "react";

export const Trainer = ({ name, experienceYears, dateOfBirth }) => {
  return (
    <div className="trainer-item backdrop-item">
      <p>{name}</p>
      <p>{experienceYears}</p>
      <p>{dateOfBirth}</p>
    </div>
  );
};
