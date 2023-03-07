import React from "react";

import Comments from "../component/comments/Comments";
import "../../styles/comments.css";

const resource = () => {
  // Resource - Page;
  return (
    <Comments commentsUrl="http://localhost:3004/comments" currentUserId="1" />
  );
};

export default resource;
