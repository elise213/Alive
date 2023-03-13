import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/urban_partners_logo.png";
import profilePic from "../../images/urban_partners.png";
import { Context } from "../store/appContext";

export const ResourceCard = (props) => {
  const { store, actions } = useContext(Context);
  const [liked, setLiked] = useState(false);

  let image = props.image;

  function handleClick(e) {
    e.preventDefault();
    console.log(props.name, typeof props.name);
    actions.addFavorite(props.name);
  }

  store.favorites.forEach((name) => {
    if (name == props.name) {
      document.querySelector(".favoriteButton").classList.add("fas fa-heart");
    } else {
      document.querySelector(".favoriteButton").classList.add("far fa-heart");
    }
    console.log(name, props.name);
  });

  return (
    <div className="card mx-auto mb-3 row">
      <Link to="/resource">
        <div className="card-header d-flex">
          <div className="col-9">
            <h4 className="card-title col-9">{props.name}</h4>
            <span className="category">{props.category}</span>
          </div>
          <div className="col-3">
            <img className="res-thumbnail col-3" src={props.logo} alt="logo" />
          </div>
        </div>
        <div classname="row">
          <img className="card-img" src={image} alt="profile picture" />
          <div className="card-body">
            <h5 className="card-text">{props.description}</h5>
          </div>
        </div>
      </Link>
      <button
        type="button"
        className="btn btn-outline-warning"
        onClick={(e) => handleClick(e)}
      >
        <i className="favoriteButton "></i>
      </button>
    </div>
  );
};

// if (props.cateogry == "health") {
// <i class="fa-light fa-notes-medical"></i>
// }
// if (props.cateogry == "hygiene") {
// <i class="fa-light fa-soap"></i>
// }
// if (props.cateogry == "health") {
// <i class="fa-light fa-plate-utensils"></i>
// }
// if (props.cateogry == "shelter"){
// <i class="fa-light fa-person-shelter"></i>
// }
