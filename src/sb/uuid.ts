import axios from "axios";
import { AppConstants } from "../app.constants";

export const getUUIDByUsername = async (username: string) => {
  try {
    const response = await axios.get(`${AppConstants.ASHCON_ENDPOINT}/user/${username}`);
    return response.data;
  } catch (err) {
    console.error("Error fetching UUID:", err);
    throw err;
  }
};
