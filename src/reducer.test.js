import nock from "nock";
import { getItemData } from "./reducer";

describe("getItemData", () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it("should fetch data from the given URL and return it as JSON", async () => {
    const mockData = [];

    const url = "https://example.com/api/goods/";

    nock("https://example.com").get("/api/goods/").reply(200, mockData);

    const data = await getItemData(url);
    expect(data).toEqual(mockData);
  });

  it("should return an empty array if there is an error fetching data", async () => {
    const url = "https://example.com/api/goods/";

    nock("https://example.com")
      .get("/api/goods/")
      .replyWithError("Network error");

    const data = await getItemData(url);
    expect(data).toEqual([]);
  });
});
