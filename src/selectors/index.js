export function selectCountries(state) {
  return state.countries;
}

export function selectCountryById(state, id) {
  const detailCountry = state.countries.filter(c => c.id === id);
  return detailCountry;
}

// export function getInfosCountryById(state, id) {
//   const infosCountry = state.countries.map().filter(d => d.id === id);
//   return infosCountry;
// }
