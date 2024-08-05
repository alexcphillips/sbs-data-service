import { getNetworth } from "skyhelper-networth";
import { getProfile } from "./profiles";
import { ProfileName } from "src/models/hypixel/profile.model";
import logger from "../logger";
import { getUUIDByUsername } from "./uuid";
import { getMuseum } from "./museum";

export const getProfileNetworth = async (username: string, profileName: ProfileName) => {
  const uuid = await getUUIDByUsername(username, true);
  const profile = await getProfile(username, profileName);
  console.log(profile.profile_id);
  const museumData = await getMuseum(profile.profile_id);

  const testingabc = profile.members[uuid];

  const bank = profile.banking?.balance;
  const networth: any = await getNetworth(testingabc, bank, { v2Endpoint: true, cache: false });
  const coins = networth.bank + networth.purse + networth.personalBank;
  console.log(networth.bank, networth.purse, networth.personalBank);
  return networth;
};
