import axios from "axios";
import { getUUIDByUsername } from "./uuid";
import { AppConstants } from "../app.constants";

export const getProfilesByUsername = async (username: string) => {
  try {
    const uuid = await getUUIDByUsername({ username, removeDashes: true });
    if (!uuid) {
      throw new Error(`No UUID found for username: ${username}`);
    }

    const res = await axios.get(`${AppConstants.HYPIXEL_URL}/v2/skyblock/profiles?uuid=${uuid}`, {
      headers: {
        "API-Key": process.env.HYPIXEL_API_KEY,
      },
    });
    return res.data;
  } catch (error) {
    console.error(`Error fetching profiles for username ${username}:`, error);
    throw error;
  }
};

export const getProfile = async () => {};
