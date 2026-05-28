import axios from "axios";
import Env from "../env.js";

const API_BASE_URL = Env().url;

export const PostAPI = {
  getByComp: async(id) => {
    const response = await axios.get(`${API_BASE_URL}/posts/getByCompId/${id}`);
    return response.data;
  },
  get: async(id) => {
    const response = await axios.get(`${API_BASE_URL}/posts/get/${id}`);
    return response.data;
  },
  ifWin: async(id) => {
    const response = await axios.get(`${API_BASE_URL}/posts/get/${id}`);
    return response.data[0]
  }
}