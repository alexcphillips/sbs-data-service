import axios from "axios";
import { getUUIDByUsername } from "./uuid";
import { getProfilesByUsername } from "./profiles";
import { AppConstants } from "../app.constants";

jest.mock("axios");
jest.mock("./uuid");

describe("getProfilesByUsername", () => {
  const mockUsername = "testuser";
  const mockUUID = "1234567890";
  const mockData = { profiles: [{ id: 1, name: "testProfile" }] };

  beforeEach(() => {
    jest.clearAllMocks();
    process.env.HYPIXEL_API_KEY = "test-api-key";
  });

  it("should fetch profiles for a given username", async () => {
    (getUUIDByUsername as jest.Mock).mockResolvedValue(mockUUID);
    (axios.get as jest.Mock).mockResolvedValue({ data: mockData });

    const result = await getProfilesByUsername(mockUsername);

    expect(getUUIDByUsername).toHaveBeenCalledWith({ username: mockUsername, removeDashes: true });
    expect(axios.get).toHaveBeenCalledWith(`${AppConstants.HYPIXEL_URL}/v2/skyblock/profiles?uuid=${mockUUID}`, { headers: { "API-Key": "test-api-key" } });
    expect(result).toEqual(mockData);
  });

  it("should throw an error if no UUID is found", async () => {
    (getUUIDByUsername as jest.Mock).mockResolvedValue(null);

    await expect(getProfilesByUsername(mockUsername)).rejects.toThrow(`No UUID found for username: ${mockUsername}`);
  });

  it("should throw an error if the axios request fails", async () => {
    (getUUIDByUsername as jest.Mock).mockResolvedValue(mockUUID);
    (axios.get as jest.Mock).mockRejectedValue(new Error("Network Error"));

    await expect(getProfilesByUsername(mockUsername)).rejects.toThrow("Network Error");
  });
});
