import React, { Component } from "react";
import "./App.css";
import Intro from "../Intro/Intro.js";

class App extends Component {
  state = {
    series: []
  };

  render() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tv Series List</h1>
        </header>
        <Intro message="here you can find all of your most loved series" />
        The length of series array - {this.state.series.length}
      </div>
    );
  }
}

export default App;
