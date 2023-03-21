import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

const LogRegBtn = () => {
  const [log, setLog] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [name, setName] = useState("");
  const [is_org, setIs_org] = useState("");
  const { store, actions } = useContext(Context);
  // console.log(password);
  // console.log(email);
  function handleLogin(e) {
    e.preventDefault();
    actions.login(email, password);
  }
  function handleRegister(e) {
    e.preventDefault();
    actions.createUser(is_org, name, email, password, userAvatar);
    setLog(true);
  }
  function handleSelectImage(id) {
    store.avatarImages.forEach((i, idx) => {
      let img = document.querySelector(`#avatar${idx}`);
      img.classList.remove("avatarImageSelected");
    });
    let newselect = document.querySelector(`#avatar${id}`);
    newselect.classList.add("avatarImageSelected");
    setUserAvatar(id);
  }
  // console.log(userAvatar);
  let field = null;
  if (log == false) {
    field = (
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Register
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={() => setLog(true)}
          ></button>
        </div>
        <div className="modal-body">
          <form>
            <h6>Are you and Organization</h6>
            <div className="d-flex">
              <div className="form-check m-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="orgRadio"
                  id="orgRadio1"
                  value={is_org}
                  onChange={() => setIs_org("true")}
                />
                <label className="form-check-label" for="exampleRadios1">
                  Yes
                </label>
              </div>

              <div className="form-check m-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="orgRadio"
                  id="orgRadio2"
                  value={is_org}
                  onChange={() => setIs_org("false")}
                />
                <label className="form-check-label" for="exampleRadios1">
                  No
                </label>
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Name
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              {/* <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                </div> */}
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div className="mb-3">
              <p>pick your avatar</p>
              {store.avatarImages.map((i, idx) => {
                return (
                  <span
                    className={`${i} avatarImages`}
                    id={"avatar" + idx}
                    onClick={() => handleSelectImage(idx)}
                  />
                );
              })}
            </div>
            <div style={{ width: "100%", textAlign: "center", height: "3rem" }}>
              <a className="logReggobackbtn" onClick={() => setLog(true)}>
                Go Back to login
              </a>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              style={{ width: "100%" }}
              onClick={(e) => handleRegister(e)}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    );
  } else {
    field = (
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Please Login
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                // aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              {/* <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div> */}
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <div className="forgot-password mt-3">
                <span>Forgot your Password?</span>
              </div>
            </div>
            <div className="logRegBtnModalCont">
              <button
                type="submit"
                className="btn custom-btn"
                data-bs-dismiss="modal"
                onClick={(e) => handleLogin(e)}
                style={{ color: "white" }}
              >
                Submit
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => setLog(false)}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  return (
    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
      <span
        type="button"
        className="btn nav-btn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Login
      </span>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">{field}</div>
      </div>
    </div>
  );
};
export default LogRegBtn;
