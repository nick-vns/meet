import React from "react";
import App from "../App";
import { loadFeature, defineFeature } from "jest-cucumber";
import { mockData } from "../mock-data";
import { mount } from "enzyme";

const feature = loadFeature("./src/features/showHideAnEventDetails.feature");

defineFeature(feature, (test) => {
  test("An event element is collapsed by default.", ({ given, when, then }) => {
    let AppWrapper;
    given("an event info has been displayed", () => {
      AppWrapper = mount(<App />);
    });

    when("user receives a list of uncoming events", () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event")).toHaveLength(
        mockData.slice(0, 50).length
      );
    });

    then("the event will show a block with general info", () => {
      expect(AppWrapper.find(".description")).toHaveLength(0);
      expect(
        AppWrapper.find(".event").at(0).find(".details-button").text()
      ).toBe("show details");
    });
  });

  test("User can expand an event to see its details.", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given("user saw a block with general details about an event", async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      expect(AppWrapper.find(".event")).toHaveLength(
        mockData.slice(0, 50).length
      );
    });

    when("user opens a module with expanded info", () => {
      AppWrapper.find(".event").at(0).find(".details-button").simulate("click");
    });

    then("all info about an event will be displayed", () => {
      expect(AppWrapper.find(".event").at(0).find(".description")).toHaveLength(
        1
      );
    });
  });

  test("User can collapse an event to hide its details.", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given("an event's block showed all info", async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      expect(AppWrapper.find(".event")).toHaveLength(
        mockData.slice(0, 50).length
      );
    });

    when("user interacts with a module show/hide", () => {
      AppWrapper.find(".event").at(0).find(".details-button").simulate("click");
      expect(AppWrapper.find(".event").at(0).find(".description")).toHaveLength(
        1
      );
      AppWrapper.find(".event").at(0).find(".details-button").simulate("click");
    });

    then("all info will be hidden, user will have general info", () => {
      expect(AppWrapper.find(".event .event-details").at(0)).toHaveLength(0);
    });
  });
});
