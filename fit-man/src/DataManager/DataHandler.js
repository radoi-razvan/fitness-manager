import { apiRoute } from "../DataManager/ApiRoute";
import axios from "axios";

export const dataHandler = {
  getGyms: async function () {
    const response = await axios.get(`${apiRoute}/api/gyms`);
    return response.data;
  },
};
