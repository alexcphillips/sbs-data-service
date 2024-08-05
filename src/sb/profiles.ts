import axios from "axios";
import { getUUIDByUsername } from "./uuid";
import { AppConstants } from "../app.constants";
import logger from "../logger";
import { formatProfileName } from "./utils";
import { Profile, ProfileName } from "src/models/hypixel/profile.model";

export const getProfiles = async (username: string, uuid?: string): Promise<Profile[]> => {
  try {
    if (!uuid) {
      uuid = await getUUIDByUsername(username, true);
      if (!uuid) {
        throw new Error(`No UUID found for username: ${username}`);
      }
    }

    const res = await axios.get(`${AppConstants.HYPIXEL_URL}/v2/skyblock/profiles?uuid=${uuid}`, {
      headers: {
        "API-Key": process.env.HYPIXEL_API_KEY,
      },
    });
    console.log(res.headers);
    return res.data.profiles;
  } catch (error) {
    logger.error(`Error fetching profiles for username ${username}:`, error);
    throw error;
  }
};

export const getProfile = async (username: string, profileName: ProfileName): Promise<Profile> => {
  const profiles = await getProfiles(username);
  const formattedName = formatProfileName(profileName);

  for (const profile of profiles) {
    if (profile.cute_name === formattedName) {
      logger.info(`Found user ${username}'s ${formattedName} profile.`);
      return profile;
    }
  }

  logger.info(`User ${username} has no profile named ${formattedName}`);
  return null;
};
