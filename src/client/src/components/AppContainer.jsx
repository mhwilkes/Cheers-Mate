import React from 'react';
import Navbar from './Navbar';

const AppContainer = ({ children }) => {
  return (
    <section className="hero is-secondary is-fullheight">
      <Navbar />
      {children}
      <div className="hero-foot">
        <nav className="tabs">
          <div className="container is-fluid has-text-centered">
            <p className="p-1">Go ahead, make a friend!</p>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default AppContainer;