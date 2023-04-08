import React, { useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
// import Comments from "../component/comments/Comments";
import { ResourceInfo } from "../component/ResourceInfo";
import SimpleCommentForm from "../component/SimpleCommentForm.js";
import SimpleCommentList from "../component/SimpleCommentList.js";
const resource = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  // console.log(params);
  let resourceName = params.name;
  let resourceData = store.searchResults.filter((elm) => {
    if (elm.name == resourceName) {
      return elm;
    }
  });
  // console.log("resourceData is", resourceData[0].id);
  return (
    <div className="my-5 mx-auto resourcesRow h-100" style={{ maxWidth: 540 }}>
      {resourceData.map((items) => (
        // console.log("printing reource info...", items),
        <div className="row mt-5" key={items.id}>
          <ResourceInfo
            id={items.id}
            name={items.name}
            description={items.description}
            address={items.address}
            phone={items.phone}
            category={items.category}
            website={items.website}
            picture={items.picture}
            image={items.image}
            image2={items.image2}
          />
        </div>
      ))}

      <div className="row mt-5">
        {/* {console.log("id: ", resourceData[0].id)} */}
        {/* <SimpleCommentList id={resourceData[0].id} /> */}
      </div>
      <div className="row">
        {/* <SimpleCommentForm id={resourceData[0].id} /> */}
      </div>
    </div>
  );
};
export default resource;
