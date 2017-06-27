import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import initMap from './services/map';


class App extends Component {
  componentDidMount() {
    initMap()
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3>My Google Maps Demo</h3>
        </div>

        <div id="map"></div>
      </div>
    );

  }
}

export default App;
