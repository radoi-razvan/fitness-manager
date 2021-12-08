import React from "react";

export const Trainer = ({ name, experienceYears, dateOfBirth }) => {
  return (
    <div className="trainer-item backdrop-item">
      {/* <img src={`${process.env.REACT_APP_IMG}/${name}.jpg`} alt="test" /> */}
      <p>{name}</p>
      <p>{experienceYears}</p>
      <p>{dateOfBirth}</p>
    </div>
  );
};
