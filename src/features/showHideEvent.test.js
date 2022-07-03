import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount } from "enzyme";
import App from "../App";

const feature = loadFeature("./src/features/showHideEvent.feature");

defineFeature(feature, (test) => {
  let AppWrapper;

  test("An event element is collapsed by default", ({ given, when, then }) => {
    given("a user is on the homepage", () => {
      AppWrapper = mount(<App />);
    });

    when("there hasn't been any interaction yet", () => {
      AppWrapper.update();
    });

    then("all the events are collapsed", () => {
      expect(AppWrapper.find(".extra-details")).toHaveLength(0);
    });
  });

  test("User can expand an event to see its details", ({ given, when, then }) => {
    given("the list of events in the homepage", async () => {
      AppWrapper = await mount(<App />);
    });

    when("the user clicks on one of them", () => {
      AppWrapper.update();
      AppWrapper.find(".details-button").at(0).simulate("click");
    });

    then("the element expands showing the details", () => {
      expect(AppWrapper.find(".extra-details")).toHaveLength(0);
    });
  });

  test("User can collapse an event to hide its details", ({ given, when, then }) => {
    given("an expanded element", async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      AppWrapper.find(".details-button").at(0).simulate("click");
    });

    when("the user clicks on Hide Event", () => {
      AppWrapper.find(".details-button").at(0).simulate("click");
    });

    then("the element collapses", () => {
      expect(AppWrapper.find(".extra-details")).toHaveLength(0);
    });
  });
});
