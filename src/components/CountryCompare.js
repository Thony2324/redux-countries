import React from 'react';
import Nav from './Nav';
import { connect } from 'react-redux';
//import { getInfosCountryById } from "../selectors";
import { Link } from 'react-router-dom';
import queryString from 'query-string';

const mapStateToProps = (state, ownProps) => {
  const urlParams = ownProps.location.search.substring(1);
  const idsToCompare = queryString.parse(urlParams).country || [];
  console.log('Ids to compare : ', idsToCompare.country);
  console.log('Liste des pays (state) : ', state.countries);
  return {
    listCountries: state.countries,
    idsToCompare: idsToCompare,
    camparingCountries: idsToCompare
      .map(countryId => {
        return state.countries.find(c => c.id === countryId);
      })
      .filter(v => v !== undefined),

    //country: getInfosCountryById(state, id)
  };
};

class CountryCompare extends React.Component {
  // getTabCountries = () => {
  //   // get url parameters
  //   const countryParams = this.props.location.search.substring(1);
  //   return queryString.parse(countryParams);
  // };

  // getInfosCountry = id => {
  //   const country = getInfosCountryById(id);
  //   return country;
  // };

  render() {
    console.log(this.props);

    return (
      <React.Fragment>
        <Nav currentRoute="countries" />
        <div className="uk-section uk-section-default">
          <div className="uk-container">
            <h1 className="uk-heading-medium uk-heading-bullet uk-margin-xlarge-bottom">Compare countries</h1>
            <table className="uk-table uk-table-striped uk-table-hover uk-table-middle">
              <thead>
                <tr>
                  <th></th>
                  {/* {console.log("info country : ", )} */}
                  {this.props.camparingCountries.map((country, index) => {
                    // const indexCountryToShow = this.props.listCountries.findIndex(item => item.id === idCountry);
                    return (
                      <th key={index}>
                        {country.name}
                        <br />
                        infos...
                        {/* {this.props.listCountries[indexCountryToShow]} */}
                        {/* {this.props.getInfosCountryById(this.props.state, val)} */}
                      </th>
                    );
                  })}
                  {/* <th>Mexique</th>
                  <th>Inde</th>
                  <th>Thailande</th> */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Currency</th>
                  {/* <td>Pesos</td>
                  <td>Roupie</td>
                  <td>Baht</td> */}
                </tr>
                <tr>
                  <th>Jetlag</th>
                  {/* <td>6</td>
                  <td>3</td>
                  <td>4</td> */}
                </tr>
                <tr>
                  <th>Visa</th>
                  {/* <td>Non</td>
                  <td>Oui</td>
                  <td>Non</td> */}
                </tr>
              </tbody>
            </table>
            <Link
              to={`/countries${this.props.location.search}`}
              className="uk-button uk-button-primary uk-margin-large-top"
            >
              Back
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(CountryCompare);
