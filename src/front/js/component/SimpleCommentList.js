import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/custom.css";

const SimpleCommentList = (props) => {
  const { store, actions } = useContext(Context);

  let resource_id = parseInt(props.id);

  let commentList = [];
  actions.getComments(resource_id);

  //   let handleSubmit = (event) => {
  //     event.preventDefault();
  //   };
  //   function handleClick(e) {
  //     e.preventDefault();
  //     actions.createComment(
  //       // user_id,
  //       resource_id,
  //       commentCont
  //       // created_at
  //       //  parentId request_body[""],
  //     );
  //   }

  return (
    <div className="row center text-secondary mt-6">
      {commentList.length > 0 &&
        commentList.map((items) => (
          <div className="m-4" key={items.comment_id}>
            <label htmlFor="name">
              <h5 className="tex-info"></h5>
              {items.user_id}
            </label>
            <small className="text-muted">{items.created_at}</small>
            <div className="input-group mb-3">
              <input
                className="form-control"
                name="comment"
                type="text"
                value={items.comment_cont}
                readonly
              ></input>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SimpleCommentList;
