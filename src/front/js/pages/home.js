import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/search.css";
import { SimpleMap } from "../component/SimpleMap";
import { ResourceCard } from "../component/ResourceCard";
import { Selection } from "../component/Selection";

const Home = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => actions.setSearchResults(), []);

  return (
    <div>
      <div className="grand-container py-4">
        <Selection />

        {/* <!-- Full Search Results --> */}
        <div className="search-results-full row">
          {/* Search Result Cards */}

          <div className="scroll-search-results col-3">
            <ul className="" style={{ listStyleType: "none" }}>
              {store.filteredResults[0] || store.checked == true
                ? store.filteredResults.map((result, i) => {
                    return (
                      <li key={i}>
                        <ResourceCard
                          category={result.category}
                          key={result.id}
                          name={result.name}
                          logo={result.logo}
                          image={result.image}
                          icon={result.icon}
                          description={result.description}
                          id={result.id}
                        />
                      </li>
                    );
                  })
                : store.searchResults.map((result, i) => {
                    return (
                      <li key={i}>
                        <ResourceCard
                          category={result.category}
                          key={result.id}
                          name={result.name}
                          logo={result.logo}
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
    </div>
  );
};

export default Home;
