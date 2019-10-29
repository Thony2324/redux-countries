import React from "react";
import Nav from "./Nav";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import queryString from "query-string";
import { selectLangById } from "../selectors";

const mapStateToProps = (state, ownProps) => {
  const urlParams = ownProps.location.search.substring(1);
  let idsToCompare = queryString.parse(urlParams).s || []; // si aucun param, on initialise un tableau vide
  // Si un seul pays coché, cela renvoie une string donc on teste le type (typeof) et on crée un tableau avec la string
  if (typeof idsToCompare === "string") {
    idsToCompare = [idsToCompare];
  }
  return {
    currentState: state,
    // TODO : faire un selector
    comparingCountries: idsToCompare
      .map(countrySlug => {
        const infoCountry = state.countries.find(c => c.slug === countrySlug);
        return infoCountry;
      })
      .filter(v => v !== undefined) // permet de vérifier si l'objet renvoyé par rapport à l'id est undefined ou non, et si c'est undefined, ça le supprime du résultat pour ne pas l'afficher
  };
};

class CountryCompare extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Nav currentRoute="countries" />
        <div className="uk-section uk-section-default">
          <div className="uk-container">
            <h1 className="uk-heading-medium uk-heading-bullet uk-margin-xlarge-bottom">Compare countries</h1>
            {this.props.comparingCountries.length !== 0 ? (
              <table className="uk-table uk-table-striped uk-table-hover uk-table-middle">
                <thead>
                  <tr>
                    <th></th>
                    {this.props.comparingCountries.map((country, index) => {
                      return <th key={index}>{country.name}</th>;
                    })}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Currency</th>
                    {this.props.comparingCountries.map((country, index) => {
                      return <td key={index}>{country.currency}</td>;
                    })}
                  </tr>
                  <tr>
                    <th>Language</th>
                    {this.props.comparingCountries.map((country, index) => {
                      return <td key={index}>{selectLangById(this.props.currentState, country.language)}</td>;
                    })}
                  </tr>
                  <tr>
                    <th>Jetlag</th>
                    {this.props.comparingCountries.map((country, index) => {
                      return <td key={index}>{country.jetlag}h</td>;
                    })}
                  </tr>
                  <tr>
                    <th>Visa</th>
                    {this.props.comparingCountries.map((country, index) => {
                      return <td key={index}>{country.visa ? "Oui" : "Non"}</td>;
                    })}
                  </tr>
                </tbody>
              </table>
            ) : (
              <div className="uk-alert-warning" data-uk-alert>
                <p>
                  You didn't choose any countries ! <br />
                  Please select max 3.
                </p>
              </div>
            )}
            <Link to="/countries" className="uk-button uk-button-primary uk-margin-large-top">
              Back
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(CountryCompare);
