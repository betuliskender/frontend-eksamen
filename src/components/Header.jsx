import {useState} from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import Login from "./Login";
import LoggedIn from "./LoggedIn";

function Header({facade, loggedIn,setLoggedIn}) {
  const init = {username: "", password: ""};
    const [loginCredentials, setLoginCredentials] = useState(init);

  return (
    <>
      <nav className="topnav">
        <div className="nav-menu">
          <NavLink to="/">Home</NavLink>
          {facade.hasUserAccess('admin', loggedIn) && (
            <NavLink to="/projects">
              Projects
            </NavLink>
        )}
        {facade.hasUserAccess('admin', loggedIn) && (
            <NavLink to="/project">
              Create Project
            </NavLink>
        )}
        {facade.hasUserAccess('user', loggedIn) && (
            <NavLink to="/projecthour">
              Add Hours To UserStory
            </NavLink>
        )}
          
          <div className="login-container">
          {!loggedIn ? (<Login setLoggedIn={setLoggedIn} loginCredentials={loginCredentials} setLoginCredentials={setLoginCredentials}  />) :
                (<div>
                    <LoggedIn setLoggedIn={setLoggedIn} loginCredentials={loginCredentials} />
                </div>)}
          </div>

        </div>
      </nav>
    </>
  );
}
export default Header;