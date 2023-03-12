import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const userProfile = () => {
  const { store, actions } = useContext(Context);
  let is_org = sessionStorage.getItem("is_org");
  let avatarIndex = parseInt(store.avatarID);
  let link = store.avatarImages[parseInt(store.avatarID)];
  let name = store.name;
  console.log("name is coming from user profile:" + name);
  let favorites = store.favorites;

  return (
    <div className="userProfileCont">
      <div>
        <p className="profile-greeting">Welcome, {name}!</p>
        <div>
          <img className="userProfilePic" src={link} />
        </div>
      </div>
      <div>
        <p className="favorites-heading">Resources you've liked:</p>
        <ul className="">
          {favorites.map((fav, i) => {
            return (
              <li>
                <a className="favorite" key={i} href="">
                  {fav}
                  <i
                    onClick={() => actions.deleteFavorite(fav)}
                    className="fas fa-trash"
                  ></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* favorites */}
      {/* <div className="ml-auto">
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites
            </button>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton1"
            >
              {store.favorites.map((fav, i) => {
                return (
                  <a className="dropdown-item" key={i}>
                    {fav}{" "}
                    <i
                      onClick={() => actions.deleteFavorite(i)}
                      className="fas fa-trash"
                    ></i>
                  </a>
                );
              })}
            </ul>
          </div>
        </div> */}
    </div>
  );
};

export default userProfile;
