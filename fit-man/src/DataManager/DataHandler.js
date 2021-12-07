import { apiRoute } from "../DataManager/ApiRoute";
import axios from "axios";

export const dataHandler = {
  getGyms: async function () {
    const response = await axios.get(`${apiRoute}/gyms`);
    return response;
  },

  getCourses: async function(GymId) {
    const response = await axios.get(`${apiRoute}/gyms/${GymId}/courses`);
    return response; 
  }
};
