import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Offering } from "../component/Offering.js";

const Offerings = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.setOfferings();
  }, []);

  console.log(store.offerings);
  return (
    <div className="row">
      <div className="alert alert-success" role="alert">
        Do you have something you'd like to give to someone in need? Post an
        offering <Link to="/offeringPost"> here.</Link>
      </div>
      <div className="col-6">
        <ul style={{ listStyleType: "none" }}>
          {store.offerings.map((result, index) => {
            return (
              <li key={index}>
                <Offering
                  category={result.offering_type}
                  // category="cooking"

                  id={index}
                  title={result.title}
                  // title="propane stove"
                  image={result.image}
                  // image="https://cdn.thewirecutter.com/wp-content/media/2021/09/campingstove-2048px-19.jpg"
                  // description={result.description}
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
