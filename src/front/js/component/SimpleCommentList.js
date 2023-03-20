import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
// import "./timeFunctions.js";
import "../../styles/custom.css";
const SimpleCommentList = (props) => {
  const { store, actions } = useContext(Context);
  let resource_id = parseInt(props.id);
  console.log("props", props);
  actions.getComments(resource_id);
  let commentList = store.commentsList;
  console.log("comments... ", commentList);
  return (
    <div className="row center text-secondary mt-6">
      {commentList.length > 0 &&
        commentList.map((items) => (
          <div className="mt-2" key={items.comment_id}>
            <label htmlFor="name">
              <h5 className="blueViolet-light">{items.user_id}</h5>
            </label>
            <small className="text-muted float-end">
              {" " + items.created_at}
            </small>
            <div className="input-group mb-3">
              <input
                className="form-control bg-light"
                name="comment"
                type="text"
                value={items.comment_cont}
                readOnly
              ></input>
            </div>
          </div>
        ))}
    </div>
  );
};
export default SimpleCommentList;
