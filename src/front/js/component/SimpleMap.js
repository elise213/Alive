import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

// Define the Marker component
const Marker = (props) => (
  <div style={{ color: props.color }}>
    <i class="fa-solid fa-location-dot fa-2xl"></i>
  </div>
);

let initialPosition = {
  center: { lat: 37.7749, lng: -122.4194 },
  zoom: 12,
};

export const SimpleMap = () => {
  const [markersType1, setMarkersType1] = useState([
    { id: 1, lat: 37.7753, lng: -122.4188, text: "Marker 1", zipcode: "00923" },
    { id: 2, lat: 37.7749, lng: -122.4194, text: "Marker 2", zipcode: "32822" },
    { id: 3, lat: 37.7746, lng: -122.42, text: "Marker 3", zipcode: "34744" },
  ]);
  const [markersType2, setMarkersType2] = useState([
    { id: 1, lat: 38.7753, lng: -122.4188, text: "Marker 1", zipcode: "00923" },
    { id: 2, lat: 38.7749, lng: -122.4194, text: "Marker 2", zipcode: "32822" },
    { id: 3, lat: 38.7746, lng: -122.42, text: "Marker 3", zipcode: "34744" },
  ]);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        // Put the google API key here!!
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={initialPosition.center}
        defaultZoom={initialPosition.zoom}
      >
        {markersType1
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
          })}
      </GoogleMapReact>
    </div>
  );
};
