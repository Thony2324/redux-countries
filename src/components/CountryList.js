import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCountries } from '../selectors';
import CountryItem from './CountryItem';
import Nav from './Nav';
import { deleteCountry } from '../actions';
import queryString from 'query-string';

const mapStateToProps = state => ({
  countries: selectCountries(state),
});

const mapDispatchToProps = {
  deleteCountry,
};

class CountryList extends React.Component {
  toggleCountryCompare = countryId => {
    // this.setState(prevState => {
    //   if (prevState.countriesToCompare.indexOf(countryId) === -1) {
    //     return {
    //       countriesToCompare: [...prevState.countriesToCompare, countryId],
    //     };
    //   } else {
    //     return {
    //       countriesToCompare: prevState.countriesToCompare.filter(id => {
    //         return id !== countryId;
    //       }),
    //     };
    //   }
    // });

    if (this.state.countriesToCompare.indexOf(countryId) === -1) {
      this.setState({
        countriesToCompare: [...this.state.countriesToCompare, countryId],
      });
    } else {
      this.setState({
        countriesToCompare: this.state.countriesToCompare.filter(id => {
          return id !== countryId;
        }),
      });
    }
  };

  render() {
    const urlParams = this.props.location.search.substring(1);
    let idsToCompare = queryString.parse(urlParams).country || [];
    if (typeof idsToCompare === 'string') {
      idsToCompare = [idsToCompare];
    }
    const urlCompare = queryString.stringify({ country: idsToCompare });

    console.log(idsToCompare);

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
                      selectedCountries={idsToCompare}
                      selected={idsToCompare.indexOf(country.id) >= 0}
                      history={this.props.history}
                    />
                  );
                })}
              </ul>
            )}
            Countries to compare : {idsToCompare.length}
            <ul>
              {idsToCompare.map((val, index) => {
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
