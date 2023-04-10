import React, { useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { OfferingInfo } from "../component/OfferingInfo.js";
const Offering = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  console.log("params=", params);
  let offering = store.offerings[params.id];
  console.log("This one!", offering);

  return (
    <div className="my-5 mx-auto resourcesRow h-100" style={{ maxWidth: 540 }}>
      <div className="row mt-5" key={offering.id}>
        <OfferingInfo
          id={offering.id}
          title={offering.title}
          description={offering.description}
          category={offering.category}
          image={offering.image}
          image2={offering.image2}
        />
      </div>
    </div>
  );
};
export default Offering;
