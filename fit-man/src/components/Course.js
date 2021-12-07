import React from "react";
import { useParams } from "react-router";

export const Course = ({ name, address, description }) => {
  let gymId = useParams();
  return (
    <div className="trainer-item backdrop-item">

      <span className="">{name}</span>
      <p className="">{address}</p>
      <h4 className="">{description}</h4>
    </div>
  );
};
