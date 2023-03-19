import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

import "../../styles/custom.css";

const SimpleCommentForm = (props) => {
  const [commentCont, setCommentCont] = useState("");
  const [day, setDay] = useState("");

  const { store, actions } = useContext(Context);
  const token = sessionStorage.getItem("token");
  const user_name = store.name;
  const user_name2 = sessionStorage.getItem("name");

  // console.log("hay token? ", token);
  // console.log("user_name session: ", user_name2);
  // console.log("user_name store: ", user_name);

  const params = useParams();
  let resource_id = parseInt(props.id);
  let parentId = null;

  function handleClick(e) {
    e.preventDefault();
    if (actions.createComment(resource_id, commentCont, parentId)) {
      alert("Thank you for your feedback");
      setCommentCont("");
    }
  }
  // console.log(commentCont);
  return (
    <div className="row center text-secondary mt-6">
      {token && (
        <div className="m-4">
          <p>Comment </p>
          <form className="d-flex flex-column">
            <div className="form-group mb-3">
              <textarea
                className="form-control"
                id="comment_cont"
                rows="3"
                value={commentCont}
                onChange={(e) => setCommentCont(e.target.value)}
                placeholder="Enter your comment here..."
              ></textarea>
            </div>
          </form>
          <div className="float-end">
            <button
              type="submit"
              className="btn custom-btn text-white"
              onClick={(e) => handleClick(e)}
              data-toggle="tooltip"
              data-placement="bottom"
              title="Send your comment"
            >
              <i class="fa-solid fa-arrow-right"></i>
            </button>
            {/* <button type="reset" className="btn btn-outline-danger"> 
            Cancel
          </button>*/}
          </div>
        </div>
      )}
    </div>
  );
};

export default SimpleCommentForm;
