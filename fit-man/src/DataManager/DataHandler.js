import axios from "axios";

export const dataHandler = {
  getGyms: async function () {
    const response = await axios
      .get(`${process.env.REACT_APP_BACKEND}/gyms`)
      .catch((e) => console.error(e));
    return response;
  },

  getCourses: async function (gymId) {
    const response = await axios
      .get(`${process.env.REACT_APP_BACKEND}/gyms/${gymId}/courses`)
      .catch((e) => console.error(e));
    return response;
  },

  getExercises: async function (gymId, courseId) {
    const response = await axios
      .get(
        `${process.env.REACT_APP_BACKEND}/gyms/${gymId}/courses/${courseId}/exercises`
      )
      .catch((e) => console.error(e));
    return response;
  },

  getTrainers: async function (gymId, courseId) {
    const response = await axios
      .get(
        `${process.env.REACT_APP_BACKEND}/gyms/${gymId}/courses/${courseId}/trainers`
      )
      .catch((e) => console.error(e));
    return response;
  },

  getGymReviews: async function (gymId) {
    const response = await axios
      .get(`${process.env.REACT_APP_BACKEND}/gyms/${gymId}/reviews`)
      .catch((e) => console.error(e));
    return response;
  },

  getCourseReviews: async function (gymId, courseId) {
    const response = await axios
      .get(
        `${process.env.REACT_APP_BACKEND}/gyms/${gymId}/courses/${courseId}/reviews`
      )
      .catch((e) => console.error(e));
    return response;
  },

  getTrainerReviews: async function (gymId, courseId, trainerId) {
    const response = await axios
      .get(
        `${process.env.REACT_APP_BACKEND}/gyms/${gymId}/courses/${courseId}/trainers/${trainerId}/reviews`
      )
      .catch((e) => console.error(e));
    return response;
  },

  getAllReviews: async function () {
    const response = await axios
      .get(`${process.env.REACT_APP_BACKEND}/gyms/reviews`)
      .catch((e) => console.error(e));
    return response;
  },

  postRegister: function (regData) {
    axios
      .post(`${process.env.REACT_APP_BACKEND}/register`, {
        name: regData.name,
        userRole: regData.userRole,
        email: regData.email,
        password: regData.password,
      })
      .catch((e) => console.error(e));
  },
  postLogin: function (logData) {
    axios
      .post(`${process.env.REACT_APP_BACKEND}/login`, {
        email: logData.email,
        password: logData.password,
      })
      .catch((e) => console.error(e));
  },
};
