import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <div className="ml-auto">
          <Link to="/login">
            <button className="btn btn-primary">User Login</button>
          </Link>
          <Link to="/loginOrganization">
            <button className="btn btn-primary">Organization Login</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
