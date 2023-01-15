import React, { useEffect, useState } from "react";
import facade from "../utils/loginFacade";

export default function LoggedIn({ setLoggedIn, loginCredentials }) {
  const logout = () => {
    facade.logout();
    setLoggedIn(false);
  };

  return (
    <div>
      <div className="loggedin">
        <div className="username-header">
        <p>{loginCredentials.username}</p>
        </div>
        <div className="button-header">
        <button onClick={logout}>Logout</button>
        </div>
      </div>
    </div>
  );
}
