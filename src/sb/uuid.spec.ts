import axios from "axios";
import { getUUIDByUsername } from "./uuid";
import { AppConstants } from "../app.constants";

jest.mock("axios");

describe("getUUIDByUsername", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("fetches UUID from Ashcon API", async () => {
    const username = "testuser";
    const mockData = { uuid: "1234567890" };
    const mockedAxios = axios as jest.Mocked<typeof axios>;

    mockedAxios.get.mockResolvedValueOnce({ data: mockData });
    const result = await getUUIDByUsername(username);

    expect(result).toEqual(mockData);
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith(`${AppConstants.ASHCON_ENDPOINT}/user/${username}`);
  });

  it("handles errors gracefully", async () => {
    const username = "testuser";
    const errorMessage = "Network Error";
    const mockedAxios = axios as jest.Mocked<typeof axios>;

    mockedAxios.get.mockRejectedValueOnce(new Error(errorMessage));
    await expect(getUUIDByUsername(username)).rejects.toThrow(errorMessage);

    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith(`${AppConstants.ASHCON_ENDPOINT}/user/${username}`);
  });
});
