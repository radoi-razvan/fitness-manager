import { atom } from "jotai";
import { dataHandler } from "../DataManager/DataHandler";

export const STATE = {
  GYMS: atom([]),
  COURSES: atom([]),
  EXERCISES: atom([]),
  TRAINERS: atom([]),
  GYM_REVIEWS: atom([]),
  COURSE_REVIEWS: atom([]),
  TRAINER_REVIEWS: atom([]),
  USER: atom({}),
  LOGGED_IN: atom(false),
  // OWNED_GYMS: atom([]),
};

// export const STATES = atom({
//   // GYMS: atom([]),
//   // COURSES: atom([]),
//   // EXERCISES: atom([]),
//   // TRAINERS: atom([]),
//   // GYM_REVIEWS: atom([]),
//   // COURSE_REVIEWS: atom([]),
//   // TRAINER_REVIEWS: atom([]),
//   // USER: atom({}),
//   // LOGGED_IN: atom(false),
//   OWNED_GYMS: atom([]),
// });

export const OWNED_GYMS = atom([]);

export const ownedGymsSetter = atom(
  (get) => get(OWNED_GYMS),
  async (get, set) => {
    const ownedGyms = await dataHandler.getOwnedGyms();
    if (ownedGyms.data) {
      console.log(get(OWNED_GYMS));
      set(
        OWNED_GYMS,
        ownedGyms.data.map((g) => g.GymId)
      );
      console.log(get(OWNED_GYMS));
    } else {
      set(OWNED_GYMS, []);
    }
  }
);
