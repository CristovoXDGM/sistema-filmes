import React, { Component } from "react";
import "./App.css";
import Intro from "../Intro/Intro.js";
import Main from '../Main/index.js';
import "whatwg-fetch";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Séries de Tv</h1>
        </header>

        <Main />
      </div>
    );
  }
}

export default App;
