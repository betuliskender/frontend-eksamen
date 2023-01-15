import React, {useRef, useState} from 'react';
import facade from "../utils/loginFacade";
import { NavLink } from "react-router-dom";

function Login({setLoggedIn, loginCredentials, setLoginCredentials}) {

    const performLogin = (evt) => {
        evt.preventDefault();
        login(loginCredentials.username, loginCredentials.password);
    }

    const login = (user, pass) => {
        facade.login(user, pass)
            .then(res => setLoggedIn(true))
    }

    const onChange = (evt) => {
        setLoginCredentials({...loginCredentials, [evt.target.id]: evt.target.value})
    }

    return (
        <div className="login-container">
            <form>
                <input onChange={onChange} type="text" placeholder="Username" id="username"/>{" "}
                <input onChange={onChange} type="text" placeholder="Password" id="password"/>
                <button onClick={performLogin} type="submit">Login</button>
                <NavLink to="/signup">Sign up</NavLink>
            </form>
        </div>
    )
}

export default Login;