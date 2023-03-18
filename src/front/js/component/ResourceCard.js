import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/search.css";

export const ResourceCard = (props) => {
  const { store, actions } = useContext(Context);

  function handleClick(e) {
    e.preventDefault();
    // console.log(props.name, typeof props.name);
    actions.addFavorite({ name: props.name, icon: props.icon });
  }

  return (
    <div className="resource-card mx-auto mb-3 row">
      <Link to={"/resource/" + props.name} className="text-decoration-none">
        <div className="card-header d-flex">
          <div className="col-10 card-title-div">
            <h4 className="card-title col-9">{props.name}</h4>
          </div>
          <div className="col-2 card-icon">
            <i className={`${props.icon}`} />
          </div>
        </div>
        <div classname="row card-body">
          <img className="card-img" src={props.image} alt="profile picture" />
        </div>
      </Link>
      <div className="d-flex favorite-button-container">
        <button
          type="button"
          className="btn-sm card-favorite-button"
          onClick={(e) => handleClick(e)}
        >
          Favorite
        </button>
      </div>
    </div>
  );
};
