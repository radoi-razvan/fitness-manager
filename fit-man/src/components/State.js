import { atom } from "jotai";
import { dataHandler } from "../DataManager/DataHandler";

export const STATE = {
  GYM_LIST: atom([]),
  GYMS: atom(
    (get) => get(STATE.GYM_LIST),
    async (get, set) => {
      const gyms = await dataHandler.getGyms();
      set(STATE.GYM_LIST, gyms.data);
      set(ownedGymsSetter);
    }
  ),
  COURSE_LIST: atom([]),
  COURSES: atom(
    (get) => get(STATE.COURSE_LIST),
    async (get, set, value) => {
      const courses = await dataHandler.getCourses(value);
      console.log(courses);
      set(STATE.COURSE_LIST, courses.data);
      set(attendedCoursesSetter);
    }
  ),
  EXERCISES: atom([]),
  TRAINERS: atom([]),
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
    if (user) {
      set(USER, user);
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
    if (loggedIn) {
      set(LOGGED_IN, loggedIn);
    } else {
      set(LOGGED_IN, false);
    }
  }
);
