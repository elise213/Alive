import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Building from "../../images/Buildtransp.png";
import "../../styles/search.css";

const userProfile = () => {
  const { store, actions } = useContext(Context);
  let is_org = sessionStorage.getItem("is_org");
  let avatarIndex = parseInt(store.avatarID);
  let link = store.avatarImages[parseInt(store.avatarID)];
  let name = store.name;
  console.log("name is coming from user profile:" + name);
  let favorites = store.favorites;

  function handleClick(e, fav) {
    e.preventDefault();
    actions.removeFavorite(fav);
  }
  return (
    <div className="userProfileCont row">
      <div className="col-6">
        <p className="profile-greeting">Welcome, {name}!</p>
        <img className="userProfilePic" src={link} />
      </div>
      <div className="col-6 favorite-list">
        <img className="building" src={Building}></img>
        {/* <p className="favorites-heading">Here are your favorite resources:</p> */}
        <ul className="">
          {favorites.map((fav, i) => {
            console.log("fav = ", fav);
            return (
              <li key={i}>
                <a className="favorite" href="">
                  {fav}
                </a>
                <i
                  onClick={(e) => handleClick(e, fav)}
                  className="fas fa-trash"
                ></i>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default userProfile;
