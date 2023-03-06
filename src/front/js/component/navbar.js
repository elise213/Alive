import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const token = sessionStorage.getItem("token");
  return (
    // <nav className="navbar navbar-light bg-light">
    //   <div className="container">
    //     <div className="m-auto">
    //       <Link to="/">
    //         <button className="btn btn-primary">Home</button>
    //       </Link>
    //       <Link to="/login">
    //         <button className="btn btn-primary">User Login</button>
    //       </Link>
    //       <Link to="/loginOrg">
    //         <button className="btn btn-primary">Organization Login</button>
    //       </Link>
    //       <Link to="/CreateResource">
    //         <button className="btn btn-primary">Create a Resource</button>
    //       </Link>
    //       <Link to="/UserProfile">
    //         <button className="btn btn-primary">User Profile</button>
    //       </Link>
    //       <button className="btn btn-primary" onClick={() => actions.logout()}>
    //         Logout
    //       </button>
    //     </div>
    //   </div>
    // </nav>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid" id="navbar">
        <Link to="/">
          <a style={{ color: "white" }} className="navbar-brand" href="#">
            AliveInLA.
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ color: "white" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "white" }}
              >
                All resources
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Healthcare
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Shelter
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Food
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Hygiene
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/CreateResource">
                <span className="btn" style={{ color: "white" }}>
                  Create a Resource
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/UserProfile">
                <span className="btn" style={{ color: "white" }}>
                  User Profile
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Search">
                <span className="btn" style={{ color: "white" }}>
                  Search
                </span>
              </Link>
            </li>
            {token ? (
              <li className="nav-item">
                <span
                  className="btn"
                  style={{ color: "white" }}
                  onClick={() => actions.logout()}
                >
                  Logout
                </span>
              </li>
            ) : (
              <React.Fragment>
                <li className="nav-item">
                  <Link to="/login">
                    <span className="btn" style={{ color: "white" }}>
                      User Login
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/loginOrg">
                    <span className="btn" style={{ color: "white" }}>
                      Organization Login
                    </span>
                  </Link>
                </li>
              </React.Fragment>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
