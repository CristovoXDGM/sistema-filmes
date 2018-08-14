import React, { Component } from "react";
import SeriesLsit from "../../containers/SeriesList";

class Series extends Component {
  state = {
    series: []
  };
  componentDidMount() {
    fetch("http://api.tvmaze.com/search/shows?q=Avengers")
      .then(response => response.json())
      .then(json => this.setState({ series: json }));
  }
  render() {
    return (
      <div>
        The length of series array - {this.state.series.length}
        <SeriesLsit list={this.state.series} />
      </div>
    );
  }
}

export default Series;
