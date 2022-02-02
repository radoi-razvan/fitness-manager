import axios from "axios";

export const dataHandler = {
  //Gyms
  getGyms: async function () {
    const response = await axios
      .get(`${process.env.REACT_APP_BACKEND}/gyms`)
      .catch((e) => console.error(e));
    return response;
  },

  getLastGymId: async function () {
    const response = await axios
      .get(`${process.env.REACT_APP_BACKEND}/gyms/last`)
      .catch((e) => console.error(e));
    return response;
  },

  getGym: async function (gymId) {
    const response = await axios
      .get(`${process.env.REACT_APP_BACKEND}/gyms/${gymId}`)
      .catch((e) => console.error(e));
    return response;
  },

  getOwnedGyms: async function () {
    const response = await axios
      .get(`${process.env.REACT_APP_BACKEND}/gyms/owned`, {
        withCredentials: true,
      })
      .catch((e) => console.error(e));
    return response;
  },

  postGym: async function (formData) {
    const response = await axios
      .post(
        `${process.env.REACT_APP_BACKEND}/gyms`,
        {
          name: formData.name,
          address: formData.address,
          description: formData.description,
        },
        { withCredentials: true }
      )
      .catch((e) => console.error(e));
    return response;
  },

  putGym: async function (gymId, formData) {
    const response = await axios
      .put(
        `${process.env.REACT_APP_BACKEND}/gyms/${gymId}`,
        {
          name: formData.name,
          address: formData.address,
          description: formData.description,
        },
        { withCredentials: true }
      )
      .catch((e) => console.error(e));
    return response;
  },

  deleteGym: async function (gymId) {
    const response = await axios
      .delete(`${process.env.REACT_APP_BACKEND}/gyms/${gymId}`, {
        withCredentials: true,
      })
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

  getCourse: async function (gymId, courseId) {
    const response = await axios
      .get(`${process.env.REACT_APP_BACKEND}/gyms/${gymId}/courses/${courseId}`)
      .catch((e) => console.error(e));
    return response;
  },

  getLastCourseId: async function (gymId) {
    const response = await axios
      .get(`${process.env.REACT_APP_BACKEND}/gyms/${gymId}/courses/last`)
      .catch((e) => console.error(e));
    return response;
  },

  postCourse: async function (gymId, formData) {
    const response = await axios
      .post(
        `${process.env.REACT_APP_BACKEND}/gyms/${gymId}/courses`,
        {
          name: formData.name,
          defaultPrice: formData.defaultPrice,
          description: formData.description,
          schedule: formData.schedule,
        },
        { withCredentials: true }
      )
      .catch((e) => console.error(e));
    return response;
  },

  putCourse: async function (gymId, courseId, formData) {
    const response = await axios
      .put(
        `${process.env.REACT_APP_BACKEND}/gyms/${gymId}/courses/${courseId}`,
        {
          name: formData.name,
          defaultPrice: formData.defaultPrice,
          description: formData.description,
          schedule: formData.schedule,
        },
        { withCredentials: true }
      )
      .catch((e) => console.error(e));
    return response;
  },

  deleteCourse: async function (gymId, courseId) {
    const response = await axios
      .delete(
        `${process.env.REACT_APP_BACKEND}/gyms/${gymId}/courses/${courseId}`,
        { withCredentials: true }
      )
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

  getExercise: async function (gymId, courseId, exerciseId) {
    const response = await axios
      .get(
        `${process.env.REACT_APP_BACKEND}/gyms/${gymId}/courses/${courseId}/exercises/${exerciseId}`
      )
      .catch((e) => console.error(e));
    return response;
  },

  postExercise: async function (gymId, courseId, formData) {
    const response = await axios
      .post(
        `${process.env.REACT_APP_BACKEND}/gyms/${gymId}/courses/${courseId}/exercises`,
        {
          name: formData.name,
          description: formData.description,
        },
        { withCredentials: true }
      )
      .catch((e) => console.error(e));
    return response;
  },

  putExercise: async function (gymId, courseId, exerciseId, formData) {
    const response = await axios
      .put(
        `${process.env.REACT_APP_BACKEND}/gyms/${gymId}/courses/${courseId}/exercises/${exerciseId}`,
        {
          name: formData.name,
          description: formData.description,
        },
        { withCredentials: true }
      )
      .catch((e) => console.error(e));
    return response;
  },

  deleteExercise: async function (gymId, courseId, exerciseId) {
    const response = await axios
      .delete(
        `${process.env.REACT_APP_BACKEND}/gyms/${gymId}/courses/${courseId}/exercises/${exerciseId}`,
        { withCredentials: true }
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

  getLastTrainerId: async function (gymId, courseId) {
    const response = await axios
      .get(
        `${process.env.REACT_APP_BACKEND}/gyms/${gymId}/courses/${courseId}/trainers/last`
      )
      .catch((e) => console.error(e));
    return response;
  },

  getTrainer: async function (gymId, courseId, trainerId) {
    const response = await axios
      .get(
        `${process.env.REACT_APP_BACKEND}/gyms/${gymId}/courses/${courseId}/trainers/${trainerId}`
      )
      .catch((e) => console.error(e));
    return response;
  },

  postTrainer: async function (gymId, courseId, formData) {
    const response = await axios
      .post(
        `${process.env.REACT_APP_BACKEND}/gyms/${gymId}/courses/${courseId}/trainers`,
        {
          name: formData.name,
          experienceYears: formData.experienceYears,
          dateOfBirth: formData.dateOfBirth,
        },
        { withCredentials: true }
      )
      .catch((e) => console.error(e));
    return response;
  },

  putTrainer: async function (gymId, courseId, trainerId, formData) {
    const response = await axios
      .put(
        `${process.env.REACT_APP_BACKEND}/gyms/${gymId}/courses/${courseId}/trainers/${trainerId}`,
        {
          name: formData.name,
          experienceYears: formData.experienceYears,
          dateOfBirth: formData.dateOfBirth,
        },
        { withCredentials: true }
      )
      .catch((e) => console.error(e));
    return response;
  },

  deleteTrainer: async function (gymId, courseId, trainerId) {
    const response = await axios
      .delete(
        `${process.env.REACT_APP_BACKEND}/gyms/${gymId}/courses/${courseId}/trainers/${trainerId}`,
        { withCredentials: true }
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
      .post(
        `${process.env.REACT_APP_BACKEND}/login`,
        {
          email: logData.email,
          password: logData.password,
        },
        { withCredentials: true }
      )
      .catch((e) => console.error(e));
    return response;
  },

  postLogout: async function () {
    const response = await axios
      .post(`${process.env.REACT_APP_BACKEND}/logout`, "", {
        withCredentials: true,
      })
      .catch((e) => console.error(e));
    return response;
  },

  getUser: async function () {
    const response = await axios
      .get(`${process.env.REACT_APP_BACKEND}/user`, { withCredentials: true })
      .catch((e) => console.error(e));
    return response.data;
  },

  checkIfLoggedIn: async function () {
    const response = await axios
      .get(`${process.env.REACT_APP_BACKEND}/user/check`, {
        withCredentials: true,
      })
      .catch((e) => console.error(e));
    return response.data;
  },

  // Participants
  postParticipant: async function (gymId, courseId) {
    const response = await axios
      .post(
        `${process.env.REACT_APP_BACKEND}/gyms/${gymId}/courses/${courseId}/participants`,
        "",
        { withCredentials: true }
      )
      .catch((e) => console.error(e));
    return response;
  },

  // Participants
  deleteParticipant: async function (gymId, courseId) {
    const response = await axios
      .delete(
        `${process.env.REACT_APP_BACKEND}/gyms/${gymId}/courses/${courseId}/participants`,
        { withCredentials: true }
      )
      .catch((e) => console.error(e));
    return response;
  },

  getAttendedCourses: async function () {
    const response = await axios
      .get(`${process.env.REACT_APP_BACKEND}/gyms/courses/participants`, {
        withCredentials: true,
      })
      .catch((e) => console.error(e));
    return response;
  },

  getGymsMembers: async function () {
    const response = await axios
      .get(`${process.env.REACT_APP_BACKEND}/gyms/total/participants`, {
        withCredentials: true,
      })
      .catch((e) => console.error(e));
    return response;
  },

  getCoursesMembers: async function () {
    const response = await axios
      .get(`${process.env.REACT_APP_BACKEND}/courses/total/participants`, {
        withCredentials: true,
      })
      .catch((e) => console.error(e));
    return response;
  },
};
