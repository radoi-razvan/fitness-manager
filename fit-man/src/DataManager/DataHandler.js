import axios from "axios";

export const dataHandler = {
  //Gyms
  getGyms: async function () {
    const response = await axios
      .get(`${process.env.REACT_APP_BACKEND}/gyms`)
      .catch((e) => console.error(e));
    return response;
  },

  getGym: async function (gymId) {
    const response = await axios
      .get(`${process.env.REACT_APP_BACKEND}/gyms/${gymId}`)
      .catch((e) => console.error(e));
    return response;
  },

  postGym: async function () {
    const response = await axios
      .post(`${process.env.REACT_APP_BACKEND}/gyms`)
      .catch((e) => console.error(e));
    return response;
  },

  putGym: async function (gymId) {
    const response = await axios
      .put(`${process.env.REACT_APP_BACKEND}/gyms/${gymId}`)
      .catch((e) => console.error(e));
    return response;
  },

  deleteGym: async function (gymId) {
    const response = await axios
      .delete(`${process.env.REACT_APP_BACKEND}/gyms/${gymId}`)
      .catch((e) => console.error(e));
    return response;
  },

  // Courses
  getCourses: async function (gymId) {
    const response = await axios
      .get(`${process.env.REACT_APP_BACKEND}/gyms/${gymId}/courses`)
      .catch((e) => console.error(e));
    return response;
  },

  // Exercises
  getExercises: async function (gymId, courseId) {
    const response = await axios
      .get(
        `${process.env.REACT_APP_BACKEND}/gyms/${gymId}/courses/${courseId}/exercises`
      )
      .catch((e) => console.error(e));
    return response;
  },

  // Trainers
  getTrainers: async function (gymId, courseId) {
    const response = await axios
      .get(
        `${process.env.REACT_APP_BACKEND}/gyms/${gymId}/courses/${courseId}/trainers`
      )
      .catch((e) => console.error(e));
    return response;
  },

  // Reviews
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

  //  Authentication
  postRegister: async function (regData) {
    const response = await axios
      .post(`${process.env.REACT_APP_BACKEND}/register`, {
        name: regData.name,
        userRole: regData.userRole,
        email: regData.email,
        password: regData.password,
      })
      .catch((e) => console.error(e));
    return response;
  },

  postLogin: async function (logData) {
    const response = await axios
      .post(`${process.env.REACT_APP_BACKEND}/login`, {
        email: logData.email,
        password: logData.password,
      })
      .catch((e) => console.error(e));
    return response;
  },

  postLogout: async function () {
    const response = await axios
      .post(`${process.env.REACT_APP_BACKEND}/logout`)
      .catch((e) => console.error(e));
    return response;
  },
};
