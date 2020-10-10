import React from 'react';
import {useHistory, useLocation} from 'react-router-dom';

const Navbar = () => {
  let history = useHistory();
  const location = useLocation();
  return (
    <div className="hero-head">
      <nav className="navbar is-transparent is-spaced" role="navigation" aria-label="main navigation">
        <div className="container is-fluid">
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
                  {location.pathname === "/" && (
                    <h2
                      className="button is-info is-size-5"
                      onClick={() => history.push('/create')}
                    >
                      Create Room
                    </h2>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

    </div>
  );
};

export default Navbar;
