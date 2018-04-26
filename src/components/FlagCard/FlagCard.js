import React from "react";
import "../../styles/FlagCard.css";

const FlagCard = props => (
  <div className="card">
    <div className="img-container">
      <img 
      className = "click-item img-fluid"
      alt={props.country} 
      src={props.image}
      />
    </div>
  </div>
);

export default FlagCard;