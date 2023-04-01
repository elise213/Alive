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
  // let latitude = "";
  // let longitude = "";

  function geoFindMe() {
    function success(position) {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      actions.updateLocation(latitude, longitude);
      sessionStorage.setItem("latitude", latitude);
      sessionStorage.setItem("longitude", longitude);
      console.log("Aquí: " + latitude + " Long: " + longitude);
      console.log("Allá: " + store.latitude + " Long: " + store.longitude);
    }
    function error() {
      alert("Unable to retrieve your location");
    }
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
    } else {
      console.log("Locating…");
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }
  useEffect(() => {
    geoFindMe();
  }, []);

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
                ? store.filteredResults.map((result) => {
                    return (
                      <li>
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
                : store.searchResults.map((result) => {
                    return (
                      <li>
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
