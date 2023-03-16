import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test("render default number", () => {
    expect(NumberOfEventsWrapper.state("eventCount")).toBe(50);
  });

  test("renders user's input", () => {
    expect(NumberOfEventsWrapper.find(".number")).toHaveLength(1);
  });

  test("renders input label", () => {
    expect(NumberOfEventsWrapper.find(".input-label")).toHaveLength(1);
  });

  test("change state when input changes", () => {
    const eventObject = { target: { value: 50 } };
    NumberOfEventsWrapper.find(".input-label").simulate("change", eventObject);
    expect(NumberOfEventsWrapper.state("eventCount")).toBe(50);
  });
});
