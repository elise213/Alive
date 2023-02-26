import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

const LoginOrganization = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store, actions } = useContext(Context);

  function handleClick(e) {
    e.preventDefault();
    actions.login(email, password);
  }

  return (
    <div>
      <form>
        <h1>Login</h1>
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
          <Link to="/registrationOrganization">
            <button>Register</button>
          </Link>
          <button onClick={(e) => handleClick(e)}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginOrganization;
