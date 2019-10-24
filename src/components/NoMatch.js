import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const NoMatch = () => {
  return (
    <React.Fragment>
      <Nav currentRoute="nomatch" />
      <div className="uk-section uk-section-default">
        <div className="uk-container">
          <h1 className="uk-heading-medium uk-heading-bullet uk-margin-xlarge-bottom">No match !</h1>
          <Link to="/" className="uk-button uk-button-primary">
            Back to home
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NoMatch;
