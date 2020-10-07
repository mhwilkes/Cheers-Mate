import React, {useState} from 'react';

import {useHistory} from 'react-router-dom';
import auth from '../api/core/auth';

const Navbar = () => {
    let history = useHistory();
    const [loggedIn, setLoggedIn] = useState(auth.isAuthenticated());

    const logout = ({loggedIn}: { loggedIn: boolean }) => {
        history.push('/');
        setLoggedIn(loggedIn);
    };

    const login = ({loggedIn}: { loggedIn: boolean }) => {
        setLoggedIn(loggedIn);
    };

    auth.addLoginSubscribers(login);
    auth.addLogoutSubscribers(logout);

    return (
        <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a
                    className="navbar-item"
                    onClick={() => {
                        history.push('/');
                    }}>
                    <img src="https://via.placeholder.com/112x28" width="112" height="28" alt="logo" />
                </a>
                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                   data-target="navbarBasicExample">
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <h2
                                className="button is-primary"
                                onClick={() => history.push('/meeting')}
                            >
                                Create Room
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
