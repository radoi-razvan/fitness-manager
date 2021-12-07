import React from "react";

export const Review = ({ rating, comment }) => {
  return (
    <div className="trainer-item backdrop-item">
      <p>{rating}</p>
      <p>{comment}</p>
    </div>
  );
};
