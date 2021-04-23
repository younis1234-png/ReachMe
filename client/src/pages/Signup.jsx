import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="mycard">
      <div className="card auth-card input-field">
        <h2>ReachMe</h2>
        <input type="text" placeholder="email" />
        <input type="text" placeholder="Name" />
        <input type="password" placeholder="password" />
        <button className="btn waves-effect waves-light">SignUp</button>
        <h5>
          <Link to="/signin">Signin</Link>
        </h5>
      </div>
    </div>
  );
};

export default Signup;
