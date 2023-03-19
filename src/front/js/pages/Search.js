import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/search.css";
import { SimpleMap } from "../component/SimpleMap";
import { Link, useParams } from "react-router-dom";
import { ResourceCard } from "../component/ResourceCard";
import { Selection } from "../component/Selection";

export const Search = () => {
  const { store, actions } = useContext(Context);
  console.log("Lat: ", store.latitude);
  console.log("Lng: ", store.longitude);
  // let params = useParams();
  // console.log("params", params);

  useEffect(() => actions.setSearchResults(), []);

  return (
    <div className="grand-container py-4">
      {/* <Searchbar /> */}

      <Selection />

      {/* <!-- Full Search Results --> */}
      <div className="search-results-full row">
        {/* Search Result Cards */}

        <div className="scroll-search-results col-3">
          <ul className="" style={{ listStyleType: "none" }}>
            {store.filteredResults[0] || store.checked == true
              ? store.filteredResults.map((result) => {
                  return (
                    <li>
                      <ResourceCard
                        category={result.category}
                        key={result.id}
                        name={result.name}
                        logo={result.logo}
                        schedule={result.schedule}
                        image={result.image}
                        icon={result.icon}
                        description={result.description}
                        id={result.id}
                      />
                    </li>
                  );
                })
              : store.searchResults.map((result) => {
                  return (
                    <li>
                      <ResourceCard
                        category={result.category}
                        key={result.id}
                        name={result.name}
                        logo={result.logo}
                        schedule={result.schedule}
                        image={result.image}
                        icon={result.icon}
                        description={result.description}
                        id={result.id}
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
