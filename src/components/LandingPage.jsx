import React from "react";
import "../style/LandingPage.scss";
import LoginError from "./LoginError";

const LandingPage = props => {
  return (
    <form className="login" onSubmit={props.authenticateUser}>
      <div className="login__username">
        <input
          type="text"
          className="login__username__input login__input"
          autoFocus
          value={props.username}
          onChange={e => props.setUsername(e.target.value)}
          required
        />
        <span className="login__username__label username-label">Username</span>
      </div>
      <div className="login__password">
        <input
          type="password"
          className="login__password__input login__input"
          value={props.password}
          onChange={e => props.setPassword(e.target.value)}
          required
        />
        <span className="login__password__label password-label">Password</span>
      </div>
      <div className="btn-box">
        <button type="submit" className="login-btn btn">
          Login
        </button>
        <button className="register-btn btn">Register</button>
      </div>
      {props.error && <LoginError />}
    </form>
  );
};

export default LandingPage;
