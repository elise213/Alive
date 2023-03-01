import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <div className="m-auto">
          <Link to="/">
            <button className="btn btn-primary">Home</button>
          </Link>
          <Link to="/login">
            <button className="btn btn-primary">User Login</button>
          </Link>
          <Link to="/loginOrganization">
            <button className="btn btn-primary">Organization Login</button>
          </Link>
          <button className="btn btn-primary" onClick={() => actions.logout()}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};
