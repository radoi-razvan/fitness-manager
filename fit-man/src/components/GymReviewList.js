import React from "react";
import { Review } from "./Review";
import { STATE } from "./State";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { dataHandler } from "../DataManager/DataHandler";
import { splitAtom } from "jotai/utils";

export const GymReviewList = ({ gymId }) => {
  const [gymReviews, setGymReviews] = useAtom(STATE.GYM_REVIEWS);
  // const gymReviewAtomsAtom = splitAtom(STATE.GYM_REVIEWS);
  // const [gymReviewAtoms, setGymReviews] = useAtom(gymReviewAtomsAtom);

  useEffect(() => {
    getGymReviews();
  }, []);

  const getGymReviews = async () => {
    const response = await dataHandler.getGymReviews(gymId);
    console.log(response.data);
    setGymReviews(response.data);
  };

  // return (
  //   <div>
  //     {gymReviewAtoms.map((gymReviewAtom, index) => (
  //       <Review
  //         rating={gymReviewAtom[0].Rating}
  //         comment={gymReviewAtom[0].Comment}
  //         key={index}
  //       />
  //     ))}
  //   </div>
  // );

  console.log(gymReviews[0]);

  return (
    <div>
      {/* {gymReviews.map((gymReview, index) => (<Review
            rating={gymReview.Rating}
            comment={gymReview.Comment}
            key={index}
          />))} */}
        <Review
            rating={gymReviews[0]?.Rating}
            comment={gymReviews[0]?.Comment}
            key={0}
          />

      {/* {gymReviews.map((gymReview, index) => {
        (gymReview.GymId === gymId ?
          (<Review
            rating={gymReview.Rating}
            comment={gymReview.Comment}
            key={index}
          />
          ) : (<span></span>)
        )} 
          // console.log("gymReview.Rating", gymReview.Rating);
          // console.log("gymReview.Comment", gymReview.Comment);
        // console.log("gymReview.GymId", gymReview.GymId);
        // console.log("gymId", gymId);
      )} */}
    </div>
  );
};
