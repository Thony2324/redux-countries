import React from "react";
import Nav from "./Nav";
import { connect } from "react-redux";
import { getNbCountry } from "../selectors";

const mapStateToProps = state => ({
  nbCountries: getNbCountry(state)
});

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Nav currentRoute="" />
        <div className="uk-section uk-section-default">
          <div className="uk-container">
            <h1 className="uk-heading-medium uk-heading-bullet uk-margin-large-bottom">Home</h1>
            <div className="uk-tile uk-tile-default uk-box-shadow-small uk-width-1-4 uk-text-center">
              <p className="uk-h2">{this.props.nbCountries} countries</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(Home);
