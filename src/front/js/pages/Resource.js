import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

import Comments from "../component/comments/Comments";
import { ResourceInfo } from "../component/ResourceInfo";
import "../../styles/comments.css";

const resource = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  let filteredResults = store.searchResults;

  let resourceId = params.theid;

  let resourceData = filteredResults.filter((elm) => {
    if (elm.id == resourceId) {
      return elm;
    }
  });

  return (
    <div
      className="card mb-3 mt-3 resourceCard h-100"
      Style="max-width: 540px;"
    >
      {resourceData.map((items) => (
        // console.log("printing reource info...", items),
        <ResourceInfo
          id={items.id}
          name={items.name}
          description={items.description}
          address={items.address}
          phone={items.phone}
          category={items.category}
          website={items.website}
          schedule={items.schedule}
          picture={items.picture}
          icon={items.icon}
          image={items.image}
          image2={items.image2}
        />
      ))}
      {/* <ResourceInfo
        id="1"
        name="A nice place"
        address="123 street nice blvd"
        phone="(305)-123-4556"
        type="Food"
        email="email@myfood.com"
        website="www.myfreefood.com"
        rating="4.5"
      /> */}
      <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
    </div>
  );
};

export default resource;
