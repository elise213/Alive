import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

const userProfile = () => {
  const { store, actions } = useContext(Context);
  let is_org = sessionStorage.getItem("is_org");
  let avatarIndex = parseInt(store.avatarID);
  let link = store.avatarImages[parseInt(store.avatarID)];
  console.log(store.avatarID);
  let field = null;
  if (is_org == "true") {
    field = <div>Organization</div>;
  } else if (is_org == "false") {
    field = (
      <div>
        regular user
        <h2>Welcome "user's name"</h2>
        <div>
          <img src={link} />
        </div>
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
