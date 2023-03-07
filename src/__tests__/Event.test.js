import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe("<Event /> component", () => {
  let event, EventWrapper;
  beforeAll(() => {
    event = mockData[0];
    EventWrapper = shallow(<Event event={event} />);
  });

  test("render event summary", () => {
    expect(EventWrapper.find(".summary")).toHaveLength(1);
    expect(EventWrapper.find(".summary").text()).toBe(event.summary);
  });

  test("render event's time", () => {
    expect(EventWrapper.find(".event-time")).toHaveLength(1);
    expect(EventWrapper.find(".event-time").text()).toBe(
      new Date(event.start.dateTime).toString()
    );
  });

  test("render show details button default", () => {
    EventWrapper.setState({ collapsed: true });
    expect(EventWrapper.find(".details-button")).toHaveLength(1);
    expect(EventWrapper.find(".details-button").text()).toBe("show details");
  });

  test("render show details when button is clicked", () => {
    EventWrapper.setState({ collapsed: true });
    EventWrapper.find(".details-button").simulate("click");
    expect(EventWrapper.state("collapsed")).toBe(false);
    expect(EventWrapper.find(".about")).toHaveLength(1);
    expect(EventWrapper.find(".link")).toHaveLength(1);
    expect(EventWrapper.find(".description")).toHaveLength(1);
  });

  test("render hide details button default", () => {
    EventWrapper.setState({ collapsed: false });
    expect(EventWrapper.find(".details-button")).toHaveLength(1);
    expect(EventWrapper.find(".details-button").text()).toBe("hide details");
  });

  test("render hide details when button is clicked", () => {
    EventWrapper.setState({ collapsed: false });
    EventWrapper.find(".details-button").simulate("click");
    expect(EventWrapper.state("collapsed")).toBe(true);
  });
});
