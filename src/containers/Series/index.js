import React, { Component } from "react";
import SeriesLsit from "../../containers/SeriesList";
import Loader from '../../Components/Loader';
import Intro from '../../Components/Intro/Intro.js';


class Series extends Component {

  state = {
    series: [],
    seriesName: '',
    isFetching: false
  }

  onSeriesInputChange = e => {


    this.setState({ seriesName: e.target.value, isFetching: true });

    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then(response => response.json())
      .then(json => this.setState({ series: json, isFetching: false }));

  }




  render() {
    const { series, seriesName, isFetching } = this.state;

    return (
      <div className="card">
        <Intro message="Ta precisando de alguma informação sobre alguma série? O seu lugar é aqui" />
        <div className="container">
          <input
            value={seriesName}
            type="text"
            onChange={this.onSeriesInputChange} />
        </div>
        {
          series.length === 0 && seriesName.trim() == ''
          &&
          <p>Por favor digite o nome de alguma serie</p>
        }
        {
          !isFetching && series.length === 0 && seriesName.trim() !== ''
          &&
          <p>Não foi possivel encontrar alguma serie com este nome</p>
        }
        {
          isFetching && <Loader />
        }
        {
          !isFetching && <SeriesLsit list={this.state.series} />
        }

      </div>
    )

  }
}

export default Series;
