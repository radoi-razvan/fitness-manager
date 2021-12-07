import { apiRoute } from "../DataManager/ApiRoute";
import axios from "axios";

export const dataHandler = {
  getGyms: async function () {
    const response = await axios.get(`${apiRoute}/gyms`);
    return response;
  },

  getCourses: async function (gymId) {
    const response = await axios.get(`${apiRoute}/gyms/${gymId}/courses`);
    return response;
  },

  getExercises: async function (gymId, courseId) {
    const response = await axios.get(
      `${apiRoute}/gyms/${gymId}/courses/${courseId}/exercises`
    );
    return response;
  },

  getTrainers: async function (gymId, courseId) {
    const response = await axios.get(
      `${apiRoute}/gyms/${gymId}/courses/${courseId}/trainers`
    );
    return response;
  },

  getGymReviews: async function (gymId) {
    const response = await axios.get(`${apiRoute}/gyms/${gymId}/reviews`);
    return response;
  },

  getCourseReviews: async function (gymId, courseId) {
    const response = await axios.get(
      `${apiRoute}/gyms/${gymId}/courses/${courseId}/reviews`
    );
    return response;
  },

  getTrainerReviews: async function (gymId, courseId, trainerId) {
    const response = await axios.get(
      `${apiRoute}/gyms/${gymId}/courses/${courseId}/trainers/${trainerId}/reviews`
    );
    return response;
  },
};
