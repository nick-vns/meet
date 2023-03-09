import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    number: 50,
  };

  handleNumberInput = (event) => {
    const value = event.target.value;
    this.props.updateEvents(undefined, value);
    this.setState({ number: value });
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <label className="input-label">Number of events</label>
        <input
          type="number"
          className="number"
          value={this.state.number}
          onChange={this.handleNumberInput}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
