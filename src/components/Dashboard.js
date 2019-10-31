import React from "react";
import Nav from "./Nav";
import { connect } from "react-redux";
import { getNbCountry, getNbLang } from "../selectors";

const mapStateToProps = state => ({
  nbCountries: getNbCountry(state),
  nbLang: getNbLang(state)
});

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Nav currentRoute="" />
        <div className="uk-section uk-section-default">
          <div className="uk-container">
            <h1 className="uk-heading-medium uk-heading-bullet uk-margin-large-bottom">Dashboard</h1>
            <div className="uk-flex">
              <div className="uk-tile uk-tile-default uk-box-shadow-small uk-width-1-4 uk-text-center">
                <p className="uk-h2">
                  {this.props.nbLang}
                  <br /> languages
                </p>
              </div>
              <div className="uk-tile uk-tile-default uk-box-shadow-small uk-width-1-4 uk-text-center uk-margin-left">
                <p className="uk-h2">
                  {this.props.nbCountries}
                  <br /> countries
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(Home);
