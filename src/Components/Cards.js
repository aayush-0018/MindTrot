import React from "react";
import "./Cards.css"; // Don't forget to create and import your CSS file for styling

const Cards = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-text">
          <h3>{props.title}</h3>
          <p>{props.message}</p>
          {props.show && <div className="show">{props.show}</div>}
          {props.discount && (
            <div className="capsule">{`UP TO ${props.discount}% OFF`}</div>
          )}
        </div>
        <div className="card-image">
          <img src={props.img} alt="Placeholder" className="image" />
        </div>
      </div>
    </div>
  );
};

export default Cards;
