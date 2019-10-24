import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { selectCountries } from "../selectors";
import CountryItem from "./CountryItem";
import Nav from "./Nav";
import { deleteCountry } from "../actions";
import queryString from "query-string";

var tabToCompare = [];

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

  compareCountries = (e, countryId, countryName) => {
    if (e.target.checked) {
      // tabToCompare.push({
      //   id: countryId,
      //   name: countryName
      // });
      tabToCompare.push(countryId);
      this.setState({
        countriesToCompare: tabToCompare
      });
    } else {
      tabToCompare = tabToCompare.filter(id => {
        return id !== countryId;
      });
      this.setState({
        countriesToCompare: tabToCompare
      });
    }
    //console.log("tab to compare : ", tabToCompare);

    // for (var i = 0; i < tabToCompare.length; i++) {
    //   urlCountries = urlCountries + "item" + i + "=" + tabToCompare[i].id + "&";
    // }
    // console.log(urlCountries);

    /////////// npm query string : use stringify pour generer une url et la passer au bouton compare : queryString.stringify({foo: [1, 2, 3]}) et utiliser .parse() pour generer un tableau à partir de la string;
    //let urlCountries = queryString.stringify({ countries: tabToCompare });
    //console.log(urlCountries);
  };

  render() {
    const urlCompare = queryString.stringify({ country: this.state.countriesToCompare });

    return (
      <React.Fragment>
        <Nav currentRoute="countries" />
        <div className="uk-section uk-section-default">
          <div className="uk-container">
            <h1 className="uk-heading-medium uk-heading-bullet uk-margin-xlarge-bottom">List of countries</h1>
            <Link to="/countries/add" className="uk-button uk-button-primary uk-margin-large-bottom">
              <span data-uk-icon="icon: plus; ratio: 0.8"></span> Add a country
            </Link>
            {this.props.countries.length === 0 ? (
              <p>No countries !</p>
            ) : (
              <ul className="uk-list uk-list-divider">
                {this.props.countries.map(country => {
                  return (
                    <CountryItem
                      key={country.id}
                      country={country}
                      handleDelete={this.props.deleteCountry}
                      compare={this.compareCountries}
                    />
                  );
                })}
              </ul>
            )}
            Countries to compare : {this.state.countriesToCompare.length}
            <ul>
              {this.state.countriesToCompare &&
                this.state.countriesToCompare.map((val, index) => {
                  //return <li key={index}>{val.name.toLowerCase()}</li>;
                  return <li key={index}>{val}</li>;
                })}
            </ul>
            <div>url : /countries/compare?{urlCompare}</div>
            {/* this.state.countriesToCompare.length */}
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
