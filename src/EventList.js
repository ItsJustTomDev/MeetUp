import React, { Component } from "react";
import Event from "./Event";

class EventList extends Component {
  render() {
    const { events } = this.props;

    const numbafilter = events.filter((item, index) => {
      return index < this.props.numba;
    });

    return (
      <ul className="EventList">
        {numbafilter.map((event) => (
          <li key={event.id}>
            <Event event={event} />
          </li>
        ))}
      </ul>
    );
  }
}

export default EventList;
