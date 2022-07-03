import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
  });

  test("render text input", () => {
    expect(NumberOfEventsWrapper.find(".number-of-events")).toHaveLength(1);
  });
  // test('renders text input correctly', () => {
  //   const numberOfEvents = NumberOfEventsWrapper.prop('numberOfEvents');
  //   expect(NumberOfEventsWrapper.find('.number-of-events').prop('value')).toBe(numberOfEvents);
  // });
  test("react to state change", () => {
    NumberOfEventsWrapper.setState({ numberOfEvents: 10 });
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toEqual(10);
  });
  test("change numberOfEvents state when number input changes", () => {
    NumberOfEventsWrapper.setState({ numberOfEvents: 10 });
    NumberOfEventsWrapper.find(".number-of-events").simulate("change", { target: { value: 5 } });
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toEqual(5);
  });
});
