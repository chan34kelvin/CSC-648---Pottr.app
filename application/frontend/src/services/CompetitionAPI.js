import axios from "axios";
import Env from "../env.js";

const API_BASE_URL = Env().url;

export const CompetitionAPI = {
  get: async(id) => {
    const response = await axios.get(`${API_BASE_URL}/getCompetition/${id}`);
    return response.data[0];
  },
  getAll: async() => {
    const response = await axios.get(`${API_BASE_URL}/competitions/getAll`);
    return response.data;
  },
  search: async(parameter) => {
    const response = await axios.get(`${API_BASE_URL}/competitions/search`, {
      params: {search: parameter}
    });
    if(response.data.results.length > 0){
      return response.data.results;
    } else {
      return null;
    }
  }
}