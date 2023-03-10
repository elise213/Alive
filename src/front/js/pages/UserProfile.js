import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const userProfile = () => {
  const { store, actions } = useContext(Context);
  let is_org = sessionStorage.getItem("is_org");
  let avatarIndex = parseInt(store.avatarID);
  let link = store.avatarImages[parseInt(store.avatarID)];
  // let name = sessionStorage.getItem("name");
  console.log(store.avatarID);
  let field = null;
  if (is_org == "true") {
    field = <div>Organization</div>;
  } else if (is_org == "false") {
    field = (
      <div>
        <div>
          {/* <h2>Welcome {name}</h2> */}
          <div>
            <img src={link} />
          </div>
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
  } else {
    field = (
      <div>
        <h1>You must be logged in to view this page</h1>
      </div>
    );
  }
  return <div className="userProfileCont">{field}</div>;
};

export default userProfile;
