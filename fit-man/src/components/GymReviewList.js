import React from "react";
import { Review } from "./Review";
import { STATE } from "./State";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { dataHandler } from "../DataManager/DataHandler";

export const GymReviewList = ({ gymId }) => {
  const [gymReviews, setGymReviews] = useAtom(STATE.GYM_REVIEWS);

  useEffect(() => {
    getGymReviews();
  }, []);

  const getGymReviews = async () => {
    const response = await dataHandler.getGymReviews(gymId);
    console.log(response.data);
    setGymReviews(response.data);
  };

  return (
    <div>
      {gymReviews.map((gymReview, index) => (
        <Review
          rating={gymReview.Rating}
          comment={gymReview.Comment}
          key={index}
        />
      ))}
    </div>
  );
};
