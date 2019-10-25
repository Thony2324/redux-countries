export function selectCountries(state) {
  return state.countries;
}

export function selectCountryById(state, id) {
  const detailCountry = state.countries.filter(c => c.id === id);
  return detailCountry;
}

// export function getInfosCountriesToCompare(state, tab) {
//   //console.log("tab : ", tab);
//   //console.log("state.countries : ", state.countries);
//   tab.map(countryId => {
//     //console.log(countryId);
//     const infoCountry = state.countries.find(c => c.id === countryId);
//     //console.log(infoCountry);
//     return infoCountry;
//   });
// }
