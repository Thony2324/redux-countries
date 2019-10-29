import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { selectCountryById, selectLangById } from "../../selectors";
import { Redirect } from "react-router-dom";
import Nav from "../Nav";

const mapStateToProps = (state, ownProps) => {
  return {
    currentCountry: selectCountryById(state, ownProps.match.params.id),
    currentState: state
  };
};

const CountryDetail = ({ currentCountry, currentState }) => {
  if (currentCountry.length > 0) {
    return (
      <React.Fragment>
        <Nav currentRoute="countries" />
        <div className="uk-section uk-section-default">
          <div className="uk-container">
            <h1 className="uk-heading-medium uk-heading-bullet uk-margin-large-bottom">Detail country</h1>

            <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">
              <h3 className="uk-card-title">{currentCountry[0].name}</h3>
              <ul className="uk-list uk-list-bullet">
                <li>Currency : {currentCountry[0].currency}</li>
                <li>Language : {selectLangById(currentState, currentCountry[0].language)}</li>
                <li>Jetlag : {currentCountry[0].jetlag}h</li>
                <li>Visa : {currentCountry[0].visa ? "Oui" : "Non"}</li>
              </ul>
            </div>

            <Link to="/countries" className="uk-button uk-button-primary uk-margin-large-top">
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
