import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import GoogleMapReact from "google-map-react";

export const SimpleMap = () => {
  const { store, actions } = useContext(Context);
  let latitude = parseFloat(sessionStorage.getItem("latitude"));
  let longitude = parseFloat(sessionStorage.getItem("longitude"));
  console.log(latitude, longitude, "from simple map");

  // Define the Marker component
  const Marker = (props) => (
    <div style={{ color: props.color }}>
      <i class="fa-solid fa-location-dot fa-2xl"></i>
    </div>
  );

  let initialPosition = {
    // center: { lat: latitude, lng: longitude },

    // Los Angeles
    center: { lat: 34.0522, lng: -118.2437 },
    zoom: 12,
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        // Put the google API key here!!
        bootstrapURLKeys={{ key: "AIzaSyDOhqYOYIXvrk8lt2HQQLI8cS1O8FnZt9I" }}
        defaultCenter={initialPosition.center}
        defaultZoom={initialPosition.zoom}
      >
        {store.filteredResults[0]
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

        {/* {store.google_resources_list &&
          store.google_resources_list.map((marker) => {
            return (
              <Marker
                color="blue"
                key={marker.place_id}
                lat={marker.geometry.location.lat}
                lng={marker.geometry.location.lng}
                text={marker.name}
              />
            );
          })} */}
        {/* {markersType1
          .filter((item) => item.zipcode == "32822")
          .map((marker) => {
            return (
              <Marker
                color="blue"
                key={marker.id}
                lat={marker.lat}
                lng={marker.lng}
                text={marker.text}
              />
            );
          })}
        {markersType2
          .filter((item) => item.zipcode == "32822")
          .map((marker) => {
            return (
              <Marker
                color="red"
                key={marker.id}
                lat={marker.lat}
                lng={marker.lng}
                text={marker.text}
              />
            );
          })} */}
      </GoogleMapReact>
    </div>
  );
};
