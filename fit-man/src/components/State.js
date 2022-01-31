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
  // USER: atom({}),
  // LOGGED_IN: atom(false),
};

export const OWNED_GYMS = atom([]);

export const ownedGymsSetter = atom(
  (get) => get(OWNED_GYMS),
  async (get, set) => {
    const ownedGyms = await dataHandler.getOwnedGyms();
    if (ownedGyms.data) {
      set(
        OWNED_GYMS,
        ownedGyms.data.map((g) => g.GymId)
      );
    } else {
      set(OWNED_GYMS, []);
    }
  }
);

export const ATTENDED_COURSES = atom([]);

export const attendedCoursesSetter = atom(
  (get) => get(ATTENDED_COURSES),
  async (get, set) => {
    const attendedCourses = await dataHandler.getAttendedCourses();
    if (attendedCourses.data) {
      set(
        ATTENDED_COURSES,
        attendedCourses.data.map((c) => c.CourseId)
      );
    } else {
      set(ATTENDED_COURSES, []);
    }
  }
);

export const USER = atom({});

export const userSetter = atom(
  (get) => get(USER),
  async (get, set) => {
    const user = await dataHandler.getUser();
    //console.log(get(user));
    if (user) {
      set(USER, user);
      //console.log(get(user));
    } else {
      set(USER, {});
    }
  }
);

export const LOGGED_IN = atom(false);

export const loggedInSetter = atom(
  (get) => get(LOGGED_IN),
  async (get, set) => {
    const loggedIn = await dataHandler.checkIfLoggedIn();
    //console.log(get(loggedIn));
    if (loggedIn) {
      set(LOGGED_IN, loggedIn);
      //console.log(get(loggedIn));
    } else {
      set(LOGGED_IN, false);
    }
  }
);