import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test("render default number", () => {
    expect(NumberOfEventsWrapper.state("number")).toBe(32);
  });

  test("renders user's input", () => {
    expect(NumberOfEventsWrapper.find(".number")).toHaveLength(1);
  });

  test("renders input label", () => {
    expect(NumberOfEventsWrapper.find(".input-label")).toHaveLength(1);
  });

  test("renders input correctly", () => {
    const number = NumberOfEventsWrapper.state("number");
    expect(NumberOfEventsWrapper.find(".number").prop("value")).toBe(number);
  });

  test("change state when input changes", () => {
    NumberOfEventsWrapper.setState({ number: 32 });
    const eventObject = { target: { value: 10 } };
    NumberOfEventsWrapper.find(".number").simulate("change", eventObject);
    expect(NumberOfEventsWrapper.state("number")).toBe(10);
  });
});
