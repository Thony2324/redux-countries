import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { selectCountries } from "../selectors";
import CountryItem from "./CountryItem";
import Nav from "./Nav";
import { deleteCountry } from "../actions";
import queryString from "query-string";

const mapStateToProps = state => ({
  countries: selectCountries(state)
});

const mapDispatchToProps = {
  deleteCountry
};

class CountryList extends React.Component {
  state = {
    countriesToCompare: []
  };

  toggleCheckboxCountry = countrySlug => {
    const stateCountriesToCompare = this.state.countriesToCompare;
    if (!stateCountriesToCompare.includes(countrySlug)) {
      this.setState({
        countriesToCompare: [...stateCountriesToCompare, countrySlug] // permet de décomposer le tableau stateCountriesToCompare en élément de tableau
      });
    } else {
      this.setState({
        countriesToCompare: stateCountriesToCompare.filter(slug => {
          return slug !== countrySlug;
        })
      });
    }
  };

  render() {
    //console.log("State global : ", this.props.countries);
    //console.log("countriesToCompare : ", this.state.countriesToCompare);
    const urlCompare = queryString.stringify({ s: this.state.countriesToCompare });

    return (
      <React.Fragment>
        <Nav currentRoute="countries" />
        <div className="uk-section uk-section-default">
          <div className="uk-container">
            <h1 className="uk-heading-medium uk-heading-bullet uk-margin-xlarge-bottom">List of countries</h1>
            <Link to="/countries/add" className="uk-button uk-button-primary uk-margin-large-bottom">
              <span data-uk-icon="icon: plus; ratio: 0.8"></span> Add a country
            </Link>

            <div className="uk-margin">
              Check below to compare (max 3 countries) :{" "}
              <span className="uk-badge">{this.state.countriesToCompare.length}</span>
            </div>

            {this.props.countries.length === 0 ? (
              <div className="uk-alert-warning" data-uk-alert>
                <p>
                  There are no countries ! <br />
                  Please add one.
                </p>
              </div>
            ) : (
              <ul className="uk-list uk-list-divider">
                {this.props.countries.map(country => {
                  return (
                    <CountryItem
                      key={country.id}
                      country={country}
                      handleDelete={this.props.deleteCountry}
                      toggleCheckbox={this.toggleCheckboxCountry}
                    />
                  );
                })}
              </ul>
            )}
            <Link to={`/countries/compare?${urlCompare}`} className="uk-button uk-button-primary">
              <span data-uk-icon="icon: list; ratio: 0.8"></span> Compare
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountryList);
