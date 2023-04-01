import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Offering = (props) => {
  const { store, actions } = useContext(Context);

  function handleClick(e) {
    e.preventDefault();
    // console.log(props.name, typeof props.name);
    actions.addFavoriteOffering({ name: props.title });
    // ^^this doesn't exist yet.
  }

  return (
    <div className="">
      <div className="offering-card" style={{ maxWidth: "18rem" }}>
        <Link to={"/offering/" + props.id} className="text-decoration-none">
          <div className="card-header d-flex">
            <div className="col-10 card-title-div">
              <h4 className="resource-card-title-name col-9">{props.title}</h4>
            </div>
            <div className="col-2 card-icon">
              {/* <i className={icon} /> */}
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
            // onClick={(e) => handleClick(e)}
          >
            Favorite
          </button>
        </div>
      </div>
    </div>
  );
};
