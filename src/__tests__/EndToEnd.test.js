import puppeteer from "puppeteer";

describe("show/hide an event details", () => {
  let browser;
  let page;
  beforeAll(async () => {
    jest.setTimeout(30000);
    browser = await puppeteer.launch({
      //   headless: false,
      //   slowMo: 250,
      //   ignoreDefaultArgs: ["--disable-extensions"],
    });
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".event");
  });

  afterAll(() => {
    browser.close();
  });

  test("An event element is collapsed by default", async () => {
    const eventDetails = await page.$(".event .about");
    expect(eventDetails).toBeNull();
  });

  test("User can expand an event to see its details", async () => {
    await page.click(".event .details-button");
    const eventDetails = await page.$(".event .about");
    expect(eventDetails).toBeDefined();
  });

  test("User can collapse an event to hide its details", async () => {
    await page.click(".event .details-button");
    const eventDetails = await page.$(".event .about");
    expect(eventDetails).toBeNull();
  });
});

describe("Filter events by city.", () => {
  let browser;
  let page;
  jest.setTimeout(50000);
  beforeAll(async () => {
    browser = await puppeteer.launch({
      // headless: false,
      // slowMo: 250,
      // ignoreDefaultArgs: ["--disable-extensions"],
    });
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".event");
  });

  afterAll(() => {
    browser.close();
  });

  test("When user hasn't searched for specific city, show upcoming events from all cities.", async () => {
    const countEvents = await page.$(".event");
    expect(countEvents).toBeDefined();
  });

  test("User should see a list of suggestions when they search for city.", async () => {
    await page.type(".city", "Berlin", { delay: 100 });
    const suggestions = await page.$(".suggestions");
    expect(suggestions).toBeDefined();
  });

  test("When the user searches for city, a list of upcoming events in this city should be shown.", async () => {
    await page.click(".suggestions li");
    const eventCount = await page.$$eval(".event", (events) => events.length);
    expect(eventCount).toBe(36);
  });
});
