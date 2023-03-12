import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Searchbar = (props) => {
  const { store, actions } = useContext(Context);
  const [input, setInput] = useState("");

  return (
    <div class="row mx-4 p-3">
      <div className="col-2"></div>
      <form class="d-flex col-8" role="search">
        <input
          class="form-control"
          type="search"
          placeholder=""
          aria-label="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button class="btn btn-outline-secondary px-4" type="submit">
          <i class="fas fa-search"></i>
        </button>
      </form>
      <div className="col-2"></div>
    </div>
  );
};
