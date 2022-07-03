import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 10,
    infoText: "",
  };

  changeNumOfEvents = (e) => {
    let newValue = parseInt(e.target.value);
    if (newValue >= 1 && newValue <= 30) {
      this.setState({
        numberOfEvents: newValue,
        infoText: "",
      });
    } else {
      this.setState({
        numberOfEvents: newValue,
        infoText: "Please enter number between 1 - 30",
      });
    }
    this.props.updateEvents(undefined, newValue);
  };

  render() {
    return (
      <div className="numberOfEvents">
        <label>Number of Events: </label>
        <input className="number-of-events" type="number" onChange={this.changeNumOfEvents} value={this.state.numberOfEvents} />
        <ErrorAlert text={this.state.infoText} />
      </div>
    );
  }
}

export default NumberOfEvents;
