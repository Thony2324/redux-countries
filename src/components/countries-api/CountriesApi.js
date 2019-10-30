import React from "react";
import Nav from "../Nav";

class CountriesApi extends React.Component {
  state = {
    error: null,
    isLoaded: false,
    countries: null,
    selectedCountry: null
  };

  // fonction qui permet d'attendre un peu avant le chargement de la liste des pays
  wait = time => {
    return new Promise((resolve, reject) => {
      window.setTimeout(() => {
        resolve();
      }, time);
    });
  };

  handleClickCountry = country => {
    this.setState({
      selectedCountry: country
    });
  };

  async componentDidMount() {
    // fetch renvoie une promesse
    // .json() renvoie aussi une promesse
    // principe asynchrone : le fetch se lance, et js passe à la commande suivante (log "autre action" dans mon cas), et ensuite affiche les résultats du fetch quand il a fini
    // async/await permet d'écrire du code asynchrone en ayant une logique synchrone (équentielle)
    await this.wait(500);
    await fetch("https://restcountries.eu/rest/v2/all")
      .then(response => response.json()) // reçoit une réponse et la transforme en json, et renvoie une promesse
      .then(data => {
        // on traite le json reçu
        this.setState({
          isLoaded: true,
          countries: data
        });
      })
      .catch(error =>
        this.setState({
          error: error,
          isLoaded: true
        })
      );
  }

  render() {
    const { error, isLoaded, countries, selectedCountry } = this.state;

    return (
      <React.Fragment>
        <Nav currentRoute="countries-api" />
        <div className="uk-section uk-section-default">
          <div className="uk-container">
            <h1 className="uk-heading-medium uk-heading-bullet uk-margin-large-bottom">List of countries from API</h1>
            <div className="wrapper">
              <div className="col-left uk-background-muted">
                {/* fonction anonyme immédiatement appelée */}
                {(() => {
                  if (error) {
                    return <p>Erreur : {error.message}</p>;
                  }
                  if (!isLoaded) {
                    return <p>Loading...</p>;
                  }
                  if (countries === null) {
                    return <p>No Data</p>;
                  }
                  return (
                    <ul className="uk-list uk-list-divider">
                      {countries.map(country => {
                        return (
                          <li
                            key={country.name}
                            onClick={() => this.handleClickCountry(country)}
                            className={
                              selectedCountry && selectedCountry.name === country.name ? "uk-text-primary" : ""
                            }>
                            {country.translations.fr}
                          </li>
                        );
                      })}
                    </ul>
                  );
                })()}
              </div>
              <div className="col-right">
                {selectedCountry === null ? (
                  <p>Cliquez sur un pays pour afficher ses informations.</p>
                ) : (
                  <div className="uk-card uk-card-default">
                    <div className="uk-card-header">
                      <div className="uk-grid-small uk-flex-middle" data-uk-grid>
                        <div className="uk-width-auto">
                          <img alt={selectedCountry.translations.fr} width="50" src={selectedCountry.flag} />
                        </div>
                        <div className="uk-width-expand">
                          <h3 className="uk-card-title uk-margin-remove-bottom">{selectedCountry.translations.fr}</h3>
                          <p className="uk-text-meta uk-margin-remove-top">
                            <span>
                              {selectedCountry.region}{" "}
                              {selectedCountry.subregion ? `(${selectedCountry.subregion})` : ""}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="uk-card-body">
                      <ul className="uk-list uk-list-bullet">
                        <li>Capitale : {selectedCountry.capital ? selectedCountry.capital : "-"}</li>
                        <li>Population : {new Intl.NumberFormat().format(selectedCountry.population)} habitants</li>
                        <li>
                          Currency :&nbsp;
                          {selectedCountry.currencies
                            .map(function(currency) {
                              return currency.name;
                            })
                            .join(", ")}
                        </li>
                        <li>
                          Languages :{" "}
                          {selectedCountry.languages
                            .map(function(lang) {
                              return lang.name;
                            })
                            .join(", ")}
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );

    //const { isLoaded, countries } = this.state;

    //console.log("render...");
    // if (!isLoaded) {
    //   return <div>Loading...</div>;
    // } else {
    // return (
    //   <React.Fragment>
    //     <Nav currentRoute="countries-api" />
    //     <ul>
    //       {countries && countries.map(country => <li key={country.name}>{country.name}</li>)}
    //     </ul>
    //   </React.Fragment>
    // );}

    // const { error, isLoaded, countries } = this.state;
    // if (error) {
    //   return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //   return <div>Loading...</div>;
    // } else {
    //   return (
    //     <React.Fragment>
    //       <Nav currentRoute="countries-api" />
    //       <ul>
    //         {countries.map(country => (
    //           <li key={country.name}>{country.name}</li>
    //         ))}
    //       </ul>
    //     </React.Fragment>
    //   );
    // }

    // return (
    //   <React.Fragment>
    //     <Nav currentRoute="countries-api" />
    //     <div className="uk-section uk-section-default">
    //       <div className="uk-container">
    //         <h1 className="uk-heading-medium uk-heading-bullet uk-margin-large-bottom">List of countries from API</h1>
    //         {/* Filtrer par lettre */}
    //         <div className="wrapper">
    //           <div className="col-left uk-background-muted">
    //             {/* {this.state.loading ? <p>Loading...</p> : ""} */}
    //             <ul className="uk-list uk-list-divider">
    //               <li>Pays 1</li>
    //               <li>Pays 2</li>
    //               {/* {this.state.data &&
    //                 this.state.data.map((country, index) => {
    //                   return (
    //                     <li
    //                       key={index}
    //                       className={
    //                         this.state.selectedCountry && country.name === this.state.selectedCountry.name
    //                           ? "uk-text-primary"
    //                           : ""
    //                       }
    //                       onClick={() => {
    //                         //console.log("country : ", country);
    //                         this.setState({
    //                           selectedCountry: country
    //                         });
    //                       }}>
    //                       {country.translations.fr} ({country.alpha3Code})
    //                     </li>
    //                   );
    //                 })} */}
    //             </ul>
    //           </div>
    //           <div className="col-right">
    //             col right
    // <div className="uk-card uk-card-default">
    //   <div className="uk-card-header">
    //     <div className="uk-grid-small uk-flex-middle" data-uk-grid>
    //       <div className="uk-width-auto">
    //         <img
    //           alt={this.state.selectedCountry && this.state.selectedCountry.translations.fr}
    //           width="50"
    //           src={this.state.selectedCountry && this.state.selectedCountry.flag}
    //         />
    //       </div>
    //       <div className="uk-width-expand">
    //         <h3 className="uk-card-title uk-margin-remove-bottom">
    //           {this.state.selectedCountry && this.state.selectedCountry.translations.fr}
    //         </h3>
    //         <p className="uk-text-meta uk-margin-remove-top">
    //           <span>
    //             {this.state.selectedCountry && this.state.selectedCountry.region} (
    //             {this.state.selectedCountry && this.state.selectedCountry.subregion})
    //           </span>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="uk-card-body">
    //     <ul className="uk-list uk-list-bullet">
    //       <li>Capitale : {this.state.selectedCountry && this.state.selectedCountry.capital}</li>
    //       <li>Population : {this.state.selectedCountry && this.state.selectedCountry.population} habitants</li>
    //       <li>Currency : {this.state.selectedCountry && this.state.selectedCountry.currencies.map(val => val.name)}</li>
    //       <li>Languages : {this.state.selectedCountry && this.state.selectedCountry.languages.map(val => val.name)}</li>
    //     </ul>
    //   </div>
    // </div>;
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </React.Fragment>
    // );
  }
}

export default CountriesApi;
