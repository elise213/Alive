import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/search.css";
import { SimpleMap } from "../component/SimpleMap";
// import { Link, useParams } from "react-router-dom";
import { ResourceCard } from "../component/ResourceCard";
import { Selection } from "../component/Selection";

export const Search = () => {
  const { store, actions } = useContext(Context);

  // let params = useParams();
  // console.log("params", params);

  useEffect(() => actions.setSearchResults(), []);

  return <div className="grand-container py-4"></div>;
};
