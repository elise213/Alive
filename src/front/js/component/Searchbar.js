import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
export const Searchbar = ({ query, setQuery }) => {
  const [inputValue, setInputValue] = useState("");
  const { store, actions } = useContext(Context);
  const { radius, setRadius } = useState(10000);
  const [coordinates, setCoordinates] = useState({
    lat: 34.0522,
    long: -118.2437,
  });
  return (
    <div class="row mx-4 p-3">
      <div className="col-2"></div>
      <form class="d-flex col-8" role="search">
        <input
          onChange={(e) => setInputValue(e.target.value)}
          class="form-control"
          type="search"
          placeholder=""
          aria-label="Search"
          value={inputValue}
        />
        <button
          onClick={() =>
            actions.searchGoogleResources(radius, query, coordinates)
          }
          class="btn btn-outline-secondary px-4"
          type="submit"
        >
          <i class="fas fa-search"></i>
        </button>
      </form>
      <div className="col-2"></div>
    </div>
  );
};
