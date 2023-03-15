import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import GoogleMapReact from "google-map-react";

export const SimpleMap = () => {
  const { store, actions } = useContext(Context);
  let latitude = parseFloat(sessionStorage.getItem("latitude"));
  let longitude = parseFloat(sessionStorage.getItem("longitude"));

  const [city, setCity] = useState({
    center: { lat: latitude, lng: longitude },
  });

  console.log("city is", city);
  console.log(latitude, longitude, "from simple map");

  // Define the Marker component
  const Marker = (props) => (
    <div style={{ color: props.color }}>
      <i class="fa-solid fa-location-dot fa-2xl"></i>
    </div>
  );

  let initialPosition = {
    center: { lat: latitude, lng: longitude },
    zoom: 12,
  };

  console.log("city.center", city.center);

  return (
    <div>
      {/* <!-- Which City? --> */}
      <div className="map-city-buttons">
        <button
          className="btn-sm map-button m-1"
          onClick={() => setCity({ center: { lat: 61.2176, lng: -149.8997 } })}
        >
          Anchorage
        </button>
        <button
          className="btn-sm map-button m-1"
          onClick={() => setCity({ center: { lat: 44.0521, lng: -123.0868 } })}
        >
          Eugene
        </button>
        <button
          className="btn-sm map-button m-1"
          onClick={() => setCity({ center: { lat: 36.1716, lng: -115.1391 } })}
        >
          Las Vegas
        </button>
        <button
          className="btn-sm map-button m-1"
          onClick={() => setCity({ center: { lat: 34.0522, lng: -118.2437 } })}
        >
          Los Angeles
        </button>
        <button
          className="btn-sm map-button m-1"
          onClick={() => setCity({ center: { lat: 25.7617, lng: -80.1918 } })}
        >
          Miami
        </button>
        <button
          className="btn-sm map-button m-1"
          onClick={() => setCity({ center: { lat: 40.7128, lng: -74.006 } })}
        >
          New York
        </button>
        <button
          className="btn-sm map-button m-1"
          onClick={() => setCity({ center: { lat: 32.7157, lng: -117.1611 } })}
        >
          San Diego
        </button>
        <button
          className="btn-sm map-button m-1"
          onClick={() => setCity({ center: { lat: 37.7749, lng: -122.4194 } })}
        >
          San Francisco
        </button>
        <button
          className="btn-sm map-button m-1"
          onClick={() => setCity({ center: { lat: 37.3387, lng: -121.8853 } })}
        >
          San Jose
        </button>

        <button
          className="btn-sm map-button m-1"
          onClick={() => setCity({ center: { lat: 32.0809, lng: -81.0912 } })}
        >
          Savannah
        </button>
        <button
          className="btn-sm map-button m-1"
          onClick={() => setCity({ center: { lat: 47.6062, lng: -122.3321 } })}
        >
          Seattle
        </button>
        {/* <button
          onClick={() => setCity({ center: { lat: 52.52, lng: 13.405 } })}
        >
          Berlin
        </button>
        <button
          onClick={() => setCity({ center: { lat: 45.4642, lng: 9.19 } })}
        >
          Milan
        </button>
        <button
          onClick={() => setCity({ center: { lat: 51.5072, lng: -0.1276 } })}
        >
          London
        </button>
        <button
          onClick={() => setCity({ center: { lat: 13.7563, lng: 100.5018 } })}
        >
          Bangkok
        </button> */}
      </div>

      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          // Put the google API key here!!
          bootstrapURLKeys={{ key: "AIzaSyDOhqYOYIXvrk8lt2HQQLI8cS1O8FnZt9I" }}
          // defaultCenter={initialPosition.center}
          // defaultZoom={initialPosition.zoom}

          center={city.center}
          defaultZoom={12}
        >
          {store.filteredResults[0] || store.checked == true
            ? store.filteredResults.map((result) => {
                return (
                  <Marker
                    lat={result.latitude}
                    lng={result.longitude}
                    color="blue"
                    text={result.name}
                  />
                );
              })
            : store.searchResults.map((result) => {
                console.log(result);
                return (
                  <Marker
                    lat={result.latitude}
                    lng={result.longitude}
                    color="purple"
                    text={result.name}
                    // key={marker.place_id}
                  />
                );
              })}
        </GoogleMapReact>
      </div>
    </div>
  );
};
