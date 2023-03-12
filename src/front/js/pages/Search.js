import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { SimpleMap } from "../component/SimpleMap";
import { Link, useParams } from "react-router-dom";
import { Searchbar } from "../component/Searchbar";
import { ResourceCard } from "../component/ResourceCard";
import { Selection } from "../component/Selection";

export const Search = () => {
  let params = useParams();
  console.log("params", params);

  return (
    <div className="grand-container py-4">
      <Searchbar />
      <Selection />
      {/* <!-- Search Results --> */}
      <div className="search-results-full row">
        <div className="search-results-resources col-3">
          <ResourceCard />
          <ResourceCard />
          <ResourceCard />
        </div>
        <div className="col-9">
          <SimpleMap />
        </div>
      </div>
    </div>
  );
};
