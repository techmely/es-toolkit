import { describe, expect, it } from "vitest";
import { getUtmSourceUrl } from ".";

describe("getUtmSourceUrl", () => {
  it("throws an error when basePath is invalid", () => {
    expect(() =>
      getUtmSourceUrl("", {
        utmSource: "source",
        utmMedium: "medium",
        utmCampaign: "campaign",
        utmContent: "content",
      }),
    ).toThrow("Invalid basePath: ");
  });

  it("throws an error when required UTM parameters are missing", () => {
    expect(() =>
      getUtmSourceUrl("https://example.com", {
        utmSource: "",
        utmMedium: "medium",
        utmCampaign: "campaign",
        utmContent: "content",
      }),
    ).toThrow(
      "Invalid params! Source, medium, and campaign are required fields, please pass correct params.",
    );

    expect(() =>
      getUtmSourceUrl("https://example.com", {
        utmSource: "source",
        utmMedium: "",
        utmCampaign: "campaign",
        utmContent: "content",
      }),
    ).toThrow(
      "Invalid params! Source, medium, and campaign are required fields, please pass correct params.",
    );

    expect(() =>
      getUtmSourceUrl("https://example.com", {
        utmSource: "source",
        utmMedium: "medium",
        utmCampaign: "",
        utmContent: "content",
      }),
    ).toThrow(
      "Invalid params! Source, medium, and campaign are required fields, please pass correct params.",
    );
  });

  it("returns a valid URL when all required UTM parameters are provided", () => {
    const url = getUtmSourceUrl("https://example.com", {
      utmSource: "source",
      utmMedium: "medium",
      utmCampaign: "campaign",
      utmContent: "content",
    });
    expect(url).toBe(
      "https://example.com/?utm_source=source&utm_medium=medium&utm_campaign=campaign&utm_content=content",
    );
  });

  it("includes optional UTM parameters when provided", () => {
    const url = getUtmSourceUrl("https://example.com", {
      utmSource: "source",
      utmMedium: "medium",
      utmCampaign: "campaign",
      utmContent: "content",
      utmTerm: "term",
    });
    expect(url).toBe(
      "https://example.com/?utm_source=source&utm_medium=medium&utm_campaign=campaign&utm_content=content&utm_term=term",
    );
  });

  it("returns an empty string when URL construction fails", () => {
    const url = getUtmSourceUrl("invalid-url", {
      utmSource: "source",
      utmMedium: "medium",
      utmCampaign: "campaign",
      utmContent: "content",
    });
    expect(url).toBe("");
  });

  // Edge cases for invalid data
  it("throws an error when basePath contains spaces", () => {
    expect(() =>
      getUtmSourceUrl("https:// example.com", {
        utmSource: "source",
        utmMedium: "medium",
        utmCampaign: "campaign",
        utmContent: "content",
      }),
    ).toThrow();
  });

  it("throws an error when basePath contains special characters", () => {
    expect(() =>
      getUtmSourceUrl("https://example.com/<>", {
        utmSource: "source",
        utmMedium: "medium",
        utmCampaign: "campaign",
        utmContent: "content",
      }),
    ).toThrow();
  });

  it("returns a valid URL when UTM parameters contain special characters", () => {
    const url = getUtmSourceUrl("https://example.com", {
      utmSource: "source@#",
      utmMedium: "medium$%",
      utmCampaign: "campaign^&",
      utmContent: "content*()",
    });
    expect(url).toBe(
      "https://example.com/?utm_source=source%40%23&utm_medium=medium%24%25&utm_campaign=campaign%5E%26&utm_content=content%2A%28%29",
    );
  });

  it("returns a valid URL when UTM parameters contain spaces", () => {
    const url = getUtmSourceUrl("https://example.com", {
      utmSource: "source with spaces",
      utmMedium: "medium with spaces",
      utmCampaign: "campaign with spaces",
      utmContent: "content with spaces",
    });
    expect(url).toBe(
      "https://example.com/?utm_source=source%20with%20spaces&utm_medium=medium%20with%20spaces&utm_campaign=campaign%20with%20spaces&utm_content=content%20with%20spaces",
    );
  });
});
