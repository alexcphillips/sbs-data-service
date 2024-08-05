import axios from "axios";
import { AppConstants } from "../app.constants";
import logger from "../logger";

export const getUUIDByUsername = async (username: string, removeDashes: boolean): Promise<string> => {
  try {
    const response = await axios.get(`${AppConstants.ASHCON_ENDPOINT}/user/${username}`);
    const result = removeDashes ? response.data.uuid.replace(/-/g, "") : response.data.uuid;
    logger.info(`UUID: ${result}`);
    return result;
  } catch (err) {
    logger.error("Error fetching UUID: " + err);
    throw err;
  }
};
