import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Offering } from "../component/Offering.js";

const Offerings = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="row">
      <div class="alert alert-success" role="alert">
        Do you have something you'd like to give to someone in need? Post an
        offering <Link to="/offeringPost"> here.</Link>
      </div>
      <div className="col-6">
        <ul style={{ listStyleType: "none" }}>
          {/* {store.offerings.map((result) => { */}

          <li>
            <Offering
              // category={result.category}
              category="cooking"
              // key={result.id}
              // title={result.title}
              title="propane stove"
              // image={result.image}
              image="https://cdn.thewirecutter.com/wp-content/media/2021/09/campingstove-2048px-19.jpg"
              // description={result.description}
            />
            <Offering
              // category={result.category}
              category="sleeping"
              // key={result.id}
              // title={result.title}
              title="tent and sleepingbag"
              // image={result.image}
              image="https://bearfoottheory.com/wp-content/uploads/2020/02/California_Trans-Catalina-Trail-Day-4-GoPro-15-Gear.jpg"
              // description={result.description}
            />
          </li>

          {/* })} */}
        </ul>
      </div>
      <div className="col-6">Map</div>
    </div>
  );
};

export default Offerings;
