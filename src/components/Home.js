import React from 'react';
import Nav from './Nav';

const Home = () => {
  return (
    <React.Fragment>
      <Nav currentRoute="" />
      <div className="uk-section uk-section-default">
        <div className="uk-container">
          <h1 className="uk-heading-medium uk-heading-bullet uk-margin-xlarge-bottom">Home</h1>
          TODO : show nb countries
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
