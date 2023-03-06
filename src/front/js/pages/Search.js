import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { SimpleMap } from "../component/SimpleMap";
import { Link } from "react-router-dom";
import { Searchbar } from "../component/Searchbar";
import { ResourceCard } from "../component/ResourceCard";
import { Selection } from "../component/Selection";

export const Search = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="grand-container py-4">
      <Searchbar query={query} setQuery={setQuery} />
      <Selection query={query} setQuery={setQuery} />

      {/* <!-- Search Results --> */}
      <div className="search-results-full row">
        <div className="search-results-resources col-3">
          <ResourceCard
            resName="Resource1"
            resDescription="Open Saturdays 9am-2pm"
            resWebsite="555-5555"
            rating="3"
            profilePic="https://ibb.co/1Xjw9RS"
            about="Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Hic deleniti minus ducimus
            illo, iure earum enim labore cum! Labore neque sapiente
            temporibus praesentium! Velit, asperiores voluptatem possimus
            nulla excepturi ipsa.."
          />

          <ResourceCard
            resName="Resource2"
            resDescription="Open Tuesday and Thursday 7am-6pm"
            rating="2"
          />

          <ResourceCard
            resName="Resource3"
            resDescription="Open M-F 9am-5pm"
            rating="1.5"
          />
        </div>
        <div className="col-9">
          <SimpleMap />
        </div>
      </div>
    </div>
  );
};
