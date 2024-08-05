import axios from "axios";

export const getGarden = async (uuid) => {
  const res = await axios.get(`https://api.hypixel.net/v2/skyblock/garden?uuid=${uuid}`, {
    headers: {
      "API-Key": process.env.HYPIXEL_API_KEY,
    },
  });
};
