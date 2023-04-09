import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/search.css";
import AliveLogo from "../../images/HDLOGOTRANSP2.png";

export const ResourceCard = (props) => {
  const { store, actions } = useContext(Context);

  function handleClick(e) {
    e.preventDefault();
    // console.log(props.name, typeof props.name);
    actions.addFavorite({ name: props.name, icon: { icon } });
  }

  let icon = "";
  if (props.category == "health") {
    icon = "fa-solid fa-stethoscope";
  } else if (props.category == "food") {
    icon = "fa-solid fa-bowl-rice";
  } else if (props.category == "hygiene") {
    icon = "fa-solid fa-soap";
  } else {
    icon = "fa-solid fa-person-shelter";
  }

  let image = "";
  if (props.image == "") {
    image = { AliveLogo };
  } else {
    image = props.image;
  }

  return (
    <div className="resource-card mx-auto mb-3 row">
      <Link to={"/resource/" + props.name} className="text-decoration-none">
        <div className="card-header d-flex">
          <div className="col-10 card-title-div">
            <h4 className="resource-card-title-name col-9">{props.name}</h4>
          </div>
          <div className="col-2 card-icon">
            <i className={icon} />
          </div>
        </div>
        <div className="row card-body">
          <img className="card-img" src={image} alt="profile picture" />
        </div>
      </Link>
      <div className="d-flex favorite-button-container">
        <button
          type="button"
          className="btn-sm maras-button"
          onClick={(e) => handleClick(e)}
        >
          Favorite
        </button>
      </div>
    </div>
  );
};
