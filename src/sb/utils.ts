import { ProfileName } from "src/models/hypixel/profile.model";

export const formatProfileName = (profileName: ProfileName): string => profileName.charAt(0).toUpperCase() + profileName.slice(1);
