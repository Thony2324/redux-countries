import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCountryById } from '../selectors';
import { Redirect } from 'react-router-dom';
import Nav from './Nav';

const mapStateToProps = (state, ownProps) => ({
  mycountry: selectCountryById(state, ownProps.match.params.id)
});

const CountryDetail = ({ mycountry }) => {
  if (mycountry.length > 0) {
    return (
      <React.Fragment>
        <Nav currentRoute="countries" />
        <div className="uk-section uk-section-default">
          <div className="uk-container">
            <h1 className="uk-heading-medium uk-heading-bullet uk-margin-xlarge-bottom">{mycountry[0].name}</h1>
            <div>
              Currency : {mycountry[0].currency}
              <br />
              Jetlag : {mycountry[0].jetlag}h
              <br />
              Visa : {mycountry[0].visa ? 'Oui' : 'Non'}
            </div>
            <Link to="/countries" className="uk-button uk-button-primary uk-margin-xlarge-top">
              Back
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return <Redirect to="/countries" />;
  }
};

export default connect(mapStateToProps)(CountryDetail);
