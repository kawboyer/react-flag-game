import React from "react";
import "./FlagCard";

const FlagCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.country} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Country:</strong> {props.name}
        </li>
        <li>
          <strong>Capital:</strong> {props.capital}
        </li>
      </ul>
    </div>
    <span onClick={() => props.shuffleFlag(props.id)} className="shuffle">
    </span>
  </div>
);

// TODO figure out what to do with the shuffle feature (not remove feature as in example)

export default FlagCard;