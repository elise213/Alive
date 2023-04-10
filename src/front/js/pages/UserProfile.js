import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FavoriteCard } from "../component/FavoriteCard";

const userProfile = () => {
  const { store, actions } = useContext(Context);
  let avatar = store.avatarImages[parseInt(store.avatarID)];
  console.log("all favorites", store.favorites);
  console.log("store.favoriteOfferings =", store.favoriteOfferings);

  let newArray = [];

  store.favorites.forEach((fav, i) => {
    store.searchResults.filter((elm) => {
      if (elm.name == fav.name) {
        newArray.push(elm);
      }
    });
  });

  let newArray2 = [];

  store.favoriteOfferings.forEach((fav, i) => {
    store.offerings.filter((elm) => {
      if (elm.title == fav.title) {
        newArray2.push(elm);
      }
    });
  });
  return (
    <div className="profile-container">
      <span className={`${avatar} user-profile-avatar`}></span>
      <div className="user-profile-container">
        <div className="favorites-col">
          <p className="your-favorite-resources">Your Favorite Resources</p>
          <ul className="favorites-list" style={{ listStyleType: "none" }}>
            {newArray.map((fav, i) => {
              return (
                <li key={i}>
                  <FavoriteCard
                    title={fav.name}
                    link={"/resource/" + fav.name}
                    category={fav.category}
                    image={fav.image}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="favorites-col">
          <p className="your-favorite-resources">Your Favorite Free Stuff</p>
          <ul className="favorites-list" style={{ listStyleType: "none" }}>
            {newArray2.map((fav, i) => {
              return (
                <li key={i}>
                  <FavoriteCard
                    title={fav.title}
                    link={"/offering/" + i}
                    category={fav.category}
                    image={fav.image}
                  />
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
