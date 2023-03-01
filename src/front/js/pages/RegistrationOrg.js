import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

const registrationOrganization = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { store, actions } = useContext(Context);

  function handleClick(e) {
    e.preventDefault();
    actions.createOrganization(name, email, password);
  }

  return (
    <div>
      <form>
        <h1>Organization Registration</h1>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <Link to="/loginRegistration">
            <span>Go Back to login</span>
          </Link>
          <button onClick={(e) => handleClick(e)}>Register</button>
        </div>
      </form>
    </div>
  );
};

export default registrationOrganization;
