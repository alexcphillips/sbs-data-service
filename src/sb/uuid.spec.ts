import axios from "axios";
import { getUUIDByUsername } from "./uuid";
import { AppConstants } from "../app.constants";
import logger from "../logger";

jest.mock("axios");
jest.mock("../logger");

describe("getUUIDByUsername", () => {
  const mockUsername = "testuser";
  const mockUUIDWithDashes = "1234-5678-9012-3456-7890";
  const mockUUIDWithoutDashes = "12345678901234567890";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch UUID and remove dashes if specified", async () => {
    (axios.get as jest.Mock).mockResolvedValue({ data: { uuid: mockUUIDWithDashes } });

    const result = await getUUIDByUsername({ username: mockUsername, removeDashes: true });

    expect(axios.get).toHaveBeenCalledWith(`${AppConstants.ASHCON_ENDPOINT}/user/${mockUsername}`);
    expect(result).toBe(mockUUIDWithoutDashes);
    expect(logger.info).toHaveBeenCalledWith(`UUID: ${mockUUIDWithoutDashes}`);
  });

  it("should fetch UUID and keep dashes if not specified", async () => {
    (axios.get as jest.Mock).mockResolvedValue({ data: { uuid: mockUUIDWithDashes } });

    const result = await getUUIDByUsername({ username: mockUsername, removeDashes: false });

    expect(axios.get).toHaveBeenCalledWith(`${AppConstants.ASHCON_ENDPOINT}/user/${mockUsername}`);
    expect(result).toBe(mockUUIDWithDashes);
    expect(logger.info).toHaveBeenCalledWith(`UUID: ${mockUUIDWithDashes}`);
  });

  it("should throw an error if axios request fails", async () => {
    const mockError = new Error("Network Error");
    (axios.get as jest.Mock).mockRejectedValue(mockError);

    await expect(getUUIDByUsername({ username: mockUsername, removeDashes: true })).rejects.toThrow("Network Error");
    expect(logger.error).toHaveBeenCalledWith("Error fetching UUID:", mockError);
  });
});
