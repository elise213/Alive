import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { OfferingCard } from "../component/OfferingCard.js";

const Offerings = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.setOfferings();
  }, []);

  return (
    <div className="row">
      <div className="alert alert-success" role="alert">
        Do you have something you'd like to give to someone in need? Post an
        offering <Link to="/offeringPost"> here.</Link>
      </div>

      {/* Link to register as a drop-off pick-up location */}
      <div className="alert alert-success" role="alert">
        Register a drop-off/pick-up location{" "}
        <Link to="/registerAsDrop"> here.</Link>
      </div>

      <div className="col-6">
        <ul style={{ listStyleType: "none" }}>
          {store.offerings.map((result, index) => {
            return (
              <li key={index}>
                <OfferingCard
                  category={result.offering_type}
                  id={index}
                  title={result.title}
                  image={result.image}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="col-6">Map</div>
    </div>
  );
};

export default Offerings;
