import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const OfferingCard = (props) => {
  const { store, actions } = useContext(Context);

  function handleClick(e) {
    e.preventDefault();
    actions.addFavoriteOffering(props.title);
  }

  return (
    <div className="">
      <div className="offering-card" style={{ maxWidth: "18rem" }}>
        <Link to={"/offering/" + props.title} className="text-decoration-none">
          <div className="card-header d-flex">
            <div className="col-10 card-title-div">
              <h4 className="resource-card-title-name col-9">{props.title}</h4>
            </div>
            <div className="col-2 card-icon"></div>
          </div>
          <div className="row card-body">
            <img className="card-img" src={props.image} alt="profile picture" />
          </div>
        </Link>
        <div className="d-flex favorite-button-container">
          <button
            type="button"
            value={props.title}
            className="btn-sm card-favorite-button"
            onClick={(e) => handleClick(e)}
          >
            Favorite
          </button>
        </div>
      </div>
    </div>
  );
};
