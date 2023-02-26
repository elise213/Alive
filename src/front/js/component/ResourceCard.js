import React from "react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import logo from "../../images/urban_partners_logo.png";
import profilePic from "../../images/urban_partners.png";

export const ResourceCard = (props) => {
  return (
    <div className="card mx-auto mb-3">
      <Link to="/resourcePage">
        <div className="card-header d-flex">
          <h1 class="card-title col-9">{props.resName}</h1>
          <img className="res-thumbnail col-3" src={logo} alt="resource logo" />
        </div>

        <img
          className="card-img"
          src={profilePic}
          alt="resource profile picture"
        />
        <div className="card-body">
          <h1 className="card-text">{props.resDescription}</h1>
          <div>{/* <StarRating rating={props.rating} /> */}</div>
        </div>
      </Link>
    </div>
  );
};
