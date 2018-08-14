import React, { Component } from "react";
import "./App.css";
import Intro from "../Intro/Intro.js";
import Main from '../Main/index.js';
import "whatwg-fetch";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-light alert-success ">

          <a className="navbar-brand " href="/">
            Séries de Tv
          </a>
          <a className="navbar-brand " href="/">
            Clique aqui para buscar uma nova Séries
          </a>

        </nav>
        <Main />
      </div>
    );
  }


}

export default App;
