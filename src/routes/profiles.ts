import { getProfiles, getProfileNetworth } from "../sb";

export const getUserProfiles = async (req, res) => {
  const data = await getProfiles(req.params.username);
  return res.status(200).json(data);
};

export const getNetworth = async (req, res) => {
  const data = await getProfileNetworth(req.params.username, req.params.profileName);
  return res.status(200).json(data);
};
