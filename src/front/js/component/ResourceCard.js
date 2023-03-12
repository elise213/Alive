import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/urban_partners_logo.png";
import profilePic from "../../images/urban_partners.png";
import { Context } from "../store/appContext";

export const ResourceCard = (props) => {
  const { store, actions } = useContext(Context);
  const [liked, setLiked] = useState(false);
  let title = props.resName;
  let category = props.category;
  let logo = props.logo;
  let profilePic = props.profilePic;
  let description = props.description;

  return (
    <div className="card mx-auto mb-3">
      <Link to="/resource">
        <div className="card-header d-flex">
          <h4 className="card-title col-9">{title}</h4>
          <img className="res-thumbnail col-3" src={logo} alt="logo" />
          <h4 className="category">{category}</h4>
        </div>
        <img className="card-img" src={profilePic} alt="profile picture" />
        <div className="card-body">
          <h5 className="card-text">{description}</h5>
        </div>
      </Link>
    </div>
  );
};
