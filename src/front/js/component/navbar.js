import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import LogRegBtn from "./LogRegBtn";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const token = sessionStorage.getItem("token");
  let is_org = store.is_org;
  return (
    <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
      <div className="container-fluid">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          <span className="navbar-brand" style={{ color: "white" }}>
            AliveInLA.
          </span>
        </Link>
        <span className="nav-item">
          <Link to="/search/all">
            <span className="btn nav-btn">
              Search <i class="fa-solid fa-magnifying-glass-location"></i>
            </span>
          </Link>
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={{ flexGrow: "0" }}
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {token && is_org ? (
              <div>
                <span className="nav-item">
                  <Link to="/createResource">
                    <span className="btn nav-btn">Create Resource</span>
                  </Link>
                </span>

                <span className="nav-item">
                  <span
                    className="btn nav-btn"
                    onClick={() => actions.logout()}
                  >
                    Logout
                  </span>
                </span>
                <span className="nav-item">
                  <Link to="/userProfile">
                    <span className="btn nav-btn">
                      <i className="fa-solid fa-circle-user p-2 text-info"></i>
                    </span>
                  </Link>
                </span>
              </div>
            ) : (
              <li className="nav-item">
                <LogRegBtn />
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
