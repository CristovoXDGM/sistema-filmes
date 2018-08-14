import React, { Component } from "react";
import "./App.css";
import Intro from "../Intro/Intro.js";
import Series from "../../containers/Series";
import "whatwg-fetch";

class App extends Component {
  render() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
      </div>
    );

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tv Series List</h1>
        </header>
        <Intro message="here you can find all of your most loved series" />

        <Series />
      </div>
    );
  }
}

export default App;
