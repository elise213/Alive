import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/urban_partners_logo.png";
import profilePic from "../../images/urban_partners.png";
import { Context } from "../store/appContext";

export const ResourceCard = (props) => {
  const { store, actions } = useContext(Context);
  const [liked, setLiked] = useState(false);
  function handleClick(e) {
    e.preventDefault();
    console.log(props.name, typeof props.name);
    actions.addFavorite(props.name);
  }
  return (
    <div className="card mx-auto mb-3">
      <Link to="/resource">
        <div className="card-header d-flex">
          <h4 className="card-title col-9">{props.name}</h4>
          <img className="res-thumbnail col-3" src={props.logo} alt="logo" />
          <h4 className="category">{props.category}</h4>
        </div>
        <img className="card-img" src={props.image} alt="profile picture" />
        <div className="card-body">
          <h5 className="card-text">{props.description}</h5>
        </div>
      </Link>
      <button className="btn btn" onClick={(e) => handleClick(e)}>
        Favorite
      </button>
    </div>
  );
};
