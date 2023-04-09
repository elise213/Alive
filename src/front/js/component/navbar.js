import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import LogRegBtn from "./LogRegBtn";
import AliveLogo from "../../images/HDLOGOTRANSP2.png";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const token = sessionStorage.getItem("token");
  let is_org = sessionStorage.getItem("is_org");

  return (
    <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
      {/* Navbar Brand Logo - Link to Home - Always Visible*/}
      <div className="container-fluid">
        <Link to="/">
          <span className="navbar-brand">
            <img className="navbar-logo" src={AliveLogo}></img>
          </span>
        </Link>

        {/* Dynamic Navbar collapse-expand */}
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
          {/* Link to general resource search - Always visible */}
          <span className="nav-item">
            <Link to="/">
              <span className="btn nav-btn">Free Resource Map</span>
            </Link>
          </span>
          <span className="nav-item">
            <Link to="/offerings">
              <span className="btn nav-btn">Free Stuff</span>
            </Link>
          </span>

          {/* DONATE - Always visible */}

          <span className="nav-item">
            <Link to="/donate">
              <span className="btn nav-btn">Donate</span>
            </Link>
          </span>

          {/* Link to Create Resource - Only visible when logged in as an Organization */}
          {token && is_org == "true" ? (
            <span className="nav-item">
              <Link to="/createResource">
                <span className="btn nav-btn">Create Resource</span>
              </Link>
            </span>
          ) : (
            ""
          )}
          {/* Logout- Only visible when logged in */}
          {/* Login/ Register- Only visible when NOT logged in */}
          {token ? (
            <span className="nav-item">
              <span className="btn nav-btn" onClick={() => actions.logout()}>
                Logout
              </span>
            </span>
          ) : (
            <span className="nav-item">
              <LogRegBtn />
            </span>
          )}
          {/* Link to profile page - Only visible when logged in as a regular user*/}
          {token && is_org == "false" ? (
            <span className="nav-item">
              <Link to="/userProfile">
                <span className="nav-btn nav-profile-icon">
                  <i className="fa-solid fa-circle-user"></i>
                </span>
              </Link>
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
};

// testing merge branch
