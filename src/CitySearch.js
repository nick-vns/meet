import React, { Component } from "react";
import { InfoAlert } from "./Alert";

class CitySearch extends Component {
  state = {
    query: "",
    suggestions: [],
    showSuggestions: undefined,
    infoText: "",
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ showSuggestions: true });
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });

    if (suggestions.length === 0) {
      this.setState({
        query: value,
        suggestions: [],
        infoText:
          "We can't find the city you're looking for. Please try another city.",
      });
    } else {
      return this.setState({ query: value, suggestions, infoText: "" });
    }
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      suggestions: [],
      showSuggestions: false,
      infoText: "",
    });

    this.props.updateEvents(suggestion);
  };

  render() {
    return (
      <div className="CitySearch">
        <label htmlFor="city-search">Search for city:</label>
        <input
          type="text"
          className="city"
          placeholder="Enter city"
          value={this.state.query}
          onChange={this.handleInputChanged}
          style={
            this.state.infoText && this.state.infoText.length > 0
              ? { borderColor: "blue" }
              : {}
          }
          onBlur={() => {
            this.setState({ showSuggestions: false });
          }}
        />
        <InfoAlert text={this.state.infoText} />
        <ul
          className="suggestions"
          style={
            this.state.showSuggestions && this.state.suggestions.length !== 0
              ? {}
              : { display: "none" }
          }
        >
          {this.state.suggestions.map((suggestion) => (
            <li
              key={suggestion}
              onMouseDown={() => this.handleItemClicked(suggestion)}
            >
              {suggestion}
            </li>
          ))}
          <li key="all" onMouseDown={() => this.handleItemClicked("all")}>
            <b>See all cities</b>
          </li>
        </ul>
      </div>
    );
  }
}

export default CitySearch;
