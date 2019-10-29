import React from "react";
import Nav from "../Nav";
import ky from "ky";

class CountriesApi extends React.Component {
  state = {
    data: null,
    selectedCountry: null
  };

  componentDidMount = () => {
    (async () => {
      const countries = await ky.get("https://restcountries.eu/rest/v2/all").json();
      this.setState({
        data: countries
      });
    })();
  };

  render() {
    return (
      <React.Fragment>
        <Nav currentRoute="countries-api" />
        <div className="uk-section uk-section-default">
          <div className="uk-container">
            <h1 className="uk-heading-medium uk-heading-bullet uk-margin-large-bottom">List of countries from API</h1>
            <div className="wrapper">
              <div className="col-left uk-background-muted">
                <ul className="uk-list uk-list-divider">
                  {this.state.data &&
                    this.state.data.map((country, index) => {
                      return (
                        <li
                          key={index}
                          className={
                            this.state.selectedCountry && country.name === this.state.selectedCountry.name
                              ? "uk-text-primary"
                              : ""
                          }
                          onClick={() => {
                            console.log("country : ", country);
                            this.setState({
                              selectedCountry: country
                            });
                          }}>
                          {country.name}
                        </li>
                      );
                    })}
                </ul>
              </div>
              <div className="col-right">
                <div className="uk-card uk-card-default">
                  <div className="uk-card-header">
                    <div className="uk-grid-small uk-flex-middle" data-uk-grid>
                      <div className="uk-width-auto">
                        <img
                          alt={this.state.selectedCountry && this.state.selectedCountry.name}
                          width="50"
                          src={this.state.selectedCountry && this.state.selectedCountry.flag}
                        />
                      </div>
                      <div className="uk-width-expand">
                        <h3 className="uk-card-title uk-margin-remove-bottom">
                          {this.state.selectedCountry && this.state.selectedCountry.name}
                        </h3>
                        <p className="uk-text-meta uk-margin-remove-top">
                          <span>{this.state.selectedCountry && this.state.selectedCountry.region}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="uk-card-body">
                    <ul className="uk-list uk-list-bullet">
                      <li>Capitale : {this.state.selectedCountry && this.state.selectedCountry.capital}</li>
                      {/* <li>Monnaie : </li>
                      <li>Langues : </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CountriesApi;
