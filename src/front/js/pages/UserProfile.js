import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FavoriteCard } from "../component/FavoriteCard";

const userProfile = () => {
  const { store, actions } = useContext(Context);
  let is_org = sessionStorage.getItem("is_org");
  let link = store.avatarImages[parseInt(store.avatarID)];
  console.log(store.favorites);
  function handleClick(e, fav) {
    e.preventDefault();
    actions.removeFavorite(fav);
  }
  return (
    <div className="profile-container">
      <span className={`${link} user-profile-avatar`}></span>
      <div className="user-profile-container">
        <div className="favorites-col">
          <p className="your-favorite-resources">Your Favorite Resources</p>
          <ul className="favorites-list" style={{ listStyleType: "none" }}>
            {store.favorites.map((fav, i) => {
              // console.log("fav = ", fav);

              <FavoriteCard
                key={i}
                title={fav.title}
                image="https://contents.mediadecathlon.com/p1832107/k$df2ffc7e6748a8264eb4b474f7473828/sq/tienda-de-campaa-2-personas-quechua-mh100.jpg?format=auto&f=800x0"
              />;

              // <li key={i} className="favorite-line-item">
              //   <Link className="favorite-a-tag" to={"/resource/" + fav.name}>
              //     {/* <span className={`${fav.icon} user-profile-fav-icon`}></span> */}
              //     {fav.name}
              //   </Link>
              //   <a
              //     onClick={(e) => handleClick(e, fav.name)}
              //     className="delete-favorite"
              //   >
              //     x
              //   </a>
              // </li>
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default userProfile;
