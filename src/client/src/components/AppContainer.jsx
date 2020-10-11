import React from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';

const FooterText1 = styled.p`
  color: #426cb4;
`;

const AppContainer = ({ children }) => {
  return (
    <section className="hero is-secondary is-fullheight">
      <Navbar />
      {children}
      <div className="hero-foot">
        <nav className="tabs">
          <div className="container is-fluid has-text-centered">
            <FooterText1 className="p-1 has-text-weight-bold">
              Go ahead! Find a friend now!
            </FooterText1>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default AppContainer;
