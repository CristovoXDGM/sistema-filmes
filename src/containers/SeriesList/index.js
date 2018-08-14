import React from "react";
import "../SeriesList/index.css";
import { Link } from 'react-router-dom';

const SeriesListItem = ({ series }) => (
  <li>
    <Link to={`/series/${series.show.id}`} >
      {series.show.name}
    </Link>
  </li>

);

const SeriesList = props => {
  return (
    <div >
      <ul  >
        {props.list.map(series => (
          <SeriesListItem series={series} key={series.show.id} />
        ))}
      </ul>
    </div>
  );
};

export default SeriesList;
