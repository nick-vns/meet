import React, { Component } from "react";

class Event extends Component {
  state = { collapsed: true };

  handleClickedDetails = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };
  render() {
    const { event } = this.props;
    return (
      <div className="event">
        <h2 className="summary">{event.summary}</h2>
        <div className="event-time">
          {new Date(event.start.dateTime).toString()}
        </div>
        <div className="location">
          @{event.summary} | {event.location}
        </div>
        <button className="details-button" onClick={this.handleClickedDetails}>
          {this.state.collapsed === true ? "show details" : "hide details"}
        </button>
        {this.state.collapsed === false && (
          <>
            <h3 className="about">About</h3>
            <a href={event.htmlLink} className="link">
              See details
            </a>
            <p className="description">{event.description}</p>
          </>
        )}
      </div>
    );
  }
}

export default Event;
