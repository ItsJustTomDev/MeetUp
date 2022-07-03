import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount } from "enzyme";
import App from "../App";
// import NumberOfEvents from "../NumberOfEvents";

const feature = loadFeature("./src/features/specifyNumberEvents.feature");
let AppWrapper;

defineFeature(feature, (test) => {
  test("When user hasn’t specified a number, 10 is the default number", ({ given, when, then }) => {
    given("the user has not specified a number of events to show", () => {
      AppWrapper = mount(<App />);
    });

    when("the page loads", () => {
      AppWrapper.update();
    });

    then("10 events should be displayed (unless there are less available)", () => {
      expect(AppWrapper.find(".event")).toHaveLength(2);
    });
  });

  test("When the user types a number into the textbox, the number of events displayed should match the input number", ({ given, when, then }) => {
    given("the main page is open", () => {
      AppWrapper = mount(<App />);
    });

    when("the user selects a different amount into the textbox", () => {
      AppWrapper.update();
      AppWrapper.find(".number-of-events").simulate("change", { target: { value: "1" } });
    });

    then("the number of events displayed should match the number", () => {
      // const NumberOfEventsWrapper = mount(<NumberOfEvents />);
      AppWrapper.update();
      expect(AppWrapper.find(".event")).toHaveLength(1);
    });
  });
});
