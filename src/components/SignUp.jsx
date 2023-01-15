import React from "react";
import "../styles/SignUp.css";

function SignUp() {
  return (
    <div className="sign-up-form">
      <form className="form">
        <h1>Sign up</h1>
        <div className="inputContainer">
          <input type="text" className="input" placeholder="Username" />
          <label className="label">Username</label>
        </div>

        <div className="inputContainer">
          <input type="text" className="input" placeholder="Email" />
          <label className="label">Email</label>
        </div>

        <div className="inputContainer">
          <input type="text" className="input" placeholder="Password" />
          <label className="label">Password</label>
        </div>

        <div className="inputContainer">
          <input type="text" className="input" placeholder="Confirm Password" />
          <label className="label">Confirm Password</label>
        </div>

        <button type="submit" className="sign-up-btn" value="Sign up">
          Sign up
        </button>
      </form>
    </div>
  );
}

export default SignUp;