import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ currentRoute }) => {
  return (
    <nav className="uk-background-primary uk-light" data-uk-navbar>
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li className={currentRoute === '' ? 'uk-active' : ''}>
            <Link to="/">Home</Link>
          </li>
          <li className={currentRoute === 'countries' ? 'uk-active' : ''}>
            <Link to="/countries">Countries</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
