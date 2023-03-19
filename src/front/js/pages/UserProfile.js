import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Building from "../../images/Buildtransp.png";
import "../../styles/search.css";

const userProfile = () => {
  const { store, actions } = useContext(Context);
  let is_org = sessionStorage.getItem("is_org");
  let link = store.avatarImages[parseInt(store.avatarID)];
  let name = store.name;
  console.log("name is coming from user profile:" + name);
  let favorites = store.favorites;
  console.log(store.favorites);
  function handleClick(e, fav) {
    e.preventDefault();
    actions.removeFavorite(fav);
  }
  return (
    <div className="profile-container">
      <p className="profile-greeting">Welcome, {name}!</p>
      <div className="user-profile-container">
        <div className="welcome">
          <span className={link}></span>
        </div>
        <div className="favorites-col">
          <img className="building" src={Building}></img>
          <ul className="favorites-list" style={{ listStyleType: "none" }}>
            {store.favorites.map((fav, i) => {
              console.log("fav = ", fav);
              return (
                <li key={i} className="favorite-line-item">
                  <Link className="favorite-a-tag" to={"/resource/" + fav.name}>
                    <span className={fav.icon}> </span>
                    {fav.name}
                  </Link>
                  <a
                    onClick={(e) => handleClick(e, fav)}
                    className="delete-favorite"
                  >
                    x
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default userProfile;
