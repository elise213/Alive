import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { SimpleMap } from "../component/SimpleMap";
import { Link, useParams } from "react-router-dom";
import { Searchbar } from "../component/Searchbar";
import { ResourceCard } from "../component/ResourceCard";
import { Selection } from "../component/Selection";

export const Search = () => {
  const { store, actions } = useContext(Context);

  // let params = useParams();
  // console.log("params", params);

  useEffect(() => actions.setSearchResults(), []);

  return (
    <div className="grand-container py-4">
      <Searchbar />
      <Selection />

      {/* <!-- Full Search Results --> */}
      <div className="search-results-full row">
        {/* Search Result Cards */}
        <div className="search-results-resources col-3">
          <ul className="">
            {store.searchResults &&
              store.searchResults.map((result) => {
                return (
                  <li>
                    <ResourceCard
                      category={result.category}
                      key={result.id}
                      name={result.name}
                    />
                  </li>
                );
              })}
          </ul>
        </div>

        {/* Search Result Map */}
        <div className="col-9">
          <SimpleMap />
        </div>
      </div>
    </div>
  );
};
