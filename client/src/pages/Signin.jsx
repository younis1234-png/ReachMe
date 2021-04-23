import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="mycard">
      <div className="card auth-card input-field">
        <h2>ReachMe</h2>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <button className="btn waves-effect waves-light">Login</button>
        <h5>
          <Link to="/signup">signup</Link>
        </h5>
      </div>
    </div>
  );
};

export default Signin;
