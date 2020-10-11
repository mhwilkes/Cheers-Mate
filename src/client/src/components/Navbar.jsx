import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Logo from '../public/images/logo.png';
import styled from 'styled-components';
// Colors:
// Red: #e51b23
// Black: #000
// Blue: #426cb4

const Button = styled.h2`
  background-color: #426cb4 !important;
`;

const Navbar = () => {
  let history = useHistory();
  const location = useLocation();
  return (
    <div className="hero-head">
      <nav
        className="navbar is-transparent is-spaced"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container is-fluid">
          <div className="navbar-brand">
            <h2
              className="navbar-item"
              onClick={() => {
                history.push('/');
              }}
            >
              <img src={Logo} alt="logo" />
            </h2>
            <a
              role="button"
              href="/"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  {location.pathname === '/' && (
                    <Button
                      className="button is-info is-size-5"
                      onClick={() => history.push('/create')}
                    >
                      Start a Room
                    </Button>
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
