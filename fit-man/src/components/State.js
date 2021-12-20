import { atom } from "jotai";
//import { dataHandler } from "../DataManager/DataHandler";

export const STATE = {
  GYMS: atom([]),
  COURSES: atom([]),
  EXERCISES: atom([]),
  TRAINERS: atom([]),
  GYM_REVIEWS: atom([]),
  COURSE_REVIEWS: atom([]),
  TRAINER_REVIEWS: atom([]),
  USER: atom({}),
};

// const intializeGyms = async () => {
//   return await dataHandler.getGyms().data;
// };

// intializeGyms();
