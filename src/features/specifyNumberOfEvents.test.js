import React from "react";
import App from "../App";
import NumberOfEvents from "../NumberOfEvents";
import { mockData } from "../mock-data";
import { mount } from "enzyme";
import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When user hasn’t specified a number, 50 is the default number.", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given("the web application has been loaded", () => {
      AppWrapper = mount(<App />);
    });

    when("user didnt filter amount of events", () => {});

    then(/default number of events (50) will be displayed to user/, () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event")).toHaveLength(
        mockData.slice(0, 50).length
      );
    });
  });

  test("User can change the number of events they want to see.", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    let NumberOfEventsWrapper;
    given("user specified number of events", () => {
      AppWrapper = mount(<App />);
      NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      const eventObject = { target: { value: 1 } };
      NumberOfEventsWrapper.find(".number").simulate("change", eventObject);
    });

    when("user runs a search", () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event")).toHaveLength(1);
    });

    then("user will receive specified number of events", () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event")).toHaveLength(1);
    });
  });
});
