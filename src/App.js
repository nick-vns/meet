import React, { Component } from "react";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { extractLocations, getEvents, checkToken, getAccessToken } from "./api";
import { WarningAlert } from "./Alert";
import WelcomeScreen from "./WelcomeScreen";
import "./App.css";
import "./nprogress.css";

class App extends Component {
  state = {
    events: [],
    locations: [],
    eventCount: 50,
    selectedLocation: "all",
    showWelcomeScreen: undefined,
  };

  async componentDidMount() {
    this.mounted = true;
    let offlineEvents;
    const accessToken = localStorage.getItem("access_token");
    if (navigator.onLine) {
      const isTokenValid = (await checkToken(accessToken)).error ? false : true;
      const searchParams = new URLSearchParams(window.location.search);
      const code = searchParams.get("code");
      this.setState({ showWelcomeScreen: !(code || isTokenValid) });
      offlineEvents = (code || isTokenValid) && this.mounted;
    } else {
      offlineEvents = accessToken && this.mounted;
      this.setState({ showWelcomeScreen: false });

      if (offlineEvents) {
        getEvents().then((events) => {
          if (this.mounted) {
            this.setState({
              events: events.slice(0, this.state.eventCount),
              locations: extractLocations(events),
            });
          }
        });
      }
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, numberInput) => {
    if (location === undefined) location = this.state.selectedLocation;
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      numberInput =
        numberInput === undefined ? this.state.eventCount : numberInput;
      this.setState({
        events: locationEvents.slice(0, numberInput),
        selectedLocation: location,
        eventCount: numberInput,
      });
    });
  };

  render() {
    if (this.state.showWelcomeScreen === undefined)
      return <div className="App" />;

    return (
      <div className="App">
        {!navigator.onLine && (
          <WarningAlert text="No internet connection, events from cached data have been uploaded" />
        )}
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
        <WelcomeScreen
          showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => {
            getAccessToken();
          }}
        />
      </div>
    );
  }
}

export default App;
