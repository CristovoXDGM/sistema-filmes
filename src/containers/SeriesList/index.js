import React from "react";
import Series from "../Series";

const SeriesList = props => {
  return (
    <div>
      <ul className="list-group">
        {props.list.map(series => (
          <li key={series.show.id} className="list-group-item">
            {series.show.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SeriesList;
