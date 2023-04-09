import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FavoriteCard } from "../component/FavoriteCard";

const userProfile = () => {
  const { store, actions } = useContext(Context);
  let avatar = store.avatarImages[parseInt(store.avatarID)];
  console.log("all favorites", store.favorites);

  return (
    <div className="profile-container">
      <span className={`${avatar} user-profile-avatar`}></span>
      <div className="user-profile-container">
        <div className="favorites-col">
          <p className="your-favorite-resources">Your Favorite Resources</p>
          <ul className="favorites-list" style={{ listStyleType: "none" }}>
            {store.favorites.map((fav, i) => {
              console.log("fav = ", fav);
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
      </div>
      <div className="user-profile-container">
        <div className="favorites-col">
          <p className="your-favorite-resources">Your Favorite Offerings</p>
          <ul className="favorites-list" style={{ listStyleType: "none" }}>
            {store.favoriteOfferings.map((offer, i) => {
              console.log("fav = ", offer);
              return (
                <li key={i}>
                  <FavoriteCard
                    title={offer.title}
                    link={"/resource/" + offer.title}
                    category={offer.category}
                    image={offer.image}
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
