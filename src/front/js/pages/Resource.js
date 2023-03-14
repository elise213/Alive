import React from "react";

import Comments from "../component/comments/Comments";
import { ResourceInfo } from "../component/ResourceInfo";
import "../../styles/comments.css";

const resource = () => {
  // Resource - Page;
  return (
    <div className="card mb-3 mt-3 resourceCard" Style="max-width: 540px;">
      <ResourceInfo
        id="1"
        name="A nice place"
        address="123 street nice blvd"
        phone="(305)-123-4556"
        type="Food"
        email="email@myfood.com"
        website="www.myfreefood.com"
        rating="4.5"
      />
      <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
    </div>
  );
};

export default resource;
