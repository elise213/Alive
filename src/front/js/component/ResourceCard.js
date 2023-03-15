import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ResourceCard = (props) => {
  const { store, actions } = useContext(Context);

  function handleClick(e) {
    e.preventDefault();
    console.log(props.name, typeof props.name);
    actions.addFavorite(props.name);
  }

  return (
    <div className="card mx-auto mb-3 row">
      <Link to={"/resource/" + props.id} className="text-decoration-none">
        <div className="card-header d-flex">
          <div className="col-10 head-2">
            <h4 className="card-title col-9">{props.name}</h4>
          </div>
          <div className="col-2 icon">
            <i className={`${props.icon}`} />
          </div>
        </div>
        <div classname="row">
          <img className="card-img" src={props.image} alt="profile picture" />
          <div className="card-body">
            {/* <h5 className="card-text">{props.description}</h5> */}
          </div>
        </div>
      </Link>
      <div className="d-flex favorite-container">
        <button
          type="button"
          className="btn-sm card-favorite-button"
          onClick={(e) => handleClick(e)}
        >
          <i className=" "> Favorite </i>
        </button>
      </div>
    </div>
  );
};
