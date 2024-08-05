import axios from "axios";
import logger from "../logger";

export const getMuseum = async (uuid: string) => {
  console.log("uuid", uuid);
  try {
    const res = await axios.get(`https://api.hypixel.net/v2/skyblock/museum?uuid=${uuid}`, {
      headers: {
        "API-Key": process.env.HYPIXEL_API_KEY,
      },
    });
    return res.data;
  } catch (err: any) {
    logger.error("*****an error: " + JSON.stringify(err));
  }
};
