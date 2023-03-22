import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    eventCount: 50,
    errorText: "",
  };

  handleNumberInput = (event) => {
    const value = event.target.value;
    if (value > 0 && value < 60) {
      this.props.updateEvents(undefined, value);
      this.setState({ eventCount: value, errorText: "" });
    } else {
      this.setState({
        errorText: "Select a number from 1 to 50",
      });
    }
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <label className="input-label">Number of events</label>
        <input
          type="number"
          className="number"
          value={this.state.eventCount}
          onChange={this.handleNumberInput}
          style={
            this.state.errorText && this.state.errorText.length > 0
              ? { borderColor: "red" }
              : {}
          }
        />
        <ErrorAlert text={this.state.errorText} />
      </div>
    );
  }
}

export default NumberOfEvents;
