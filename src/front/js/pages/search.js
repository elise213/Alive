import React, { useEffect, useState, useContext } from "react";
import "../../styles/home.css";

import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Search = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  let zipcode = parseInt(params.zipcode);
  let resourceType = params.resourceType;

  return (
    <div className="card-dark bg-dark mb-3 text-white">
      Searching for {resourceType} in zipcode: {zipcode}
    </div>
  );
};
