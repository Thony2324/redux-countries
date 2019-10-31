export function selectCountries(state) {
  return state.countries;
}

export function selectCountryById(state, id) {
  const detailCountry = state.countries.filter(c => c.id === id);
  return detailCountry;
}

export function getNbCountry(state) {
  const nbCountries = state.countries.length;
  return nbCountries;
}

export function selectLanguages(state) {
  return state.languages;
}

export function selectLangById(state, id) {
  const detailLang = state.languages.filter(c => c.id === id);
  return detailLang[0].name;
}

export function getNbLang(state) {
  const nbLang = state.languages.length;
  return nbLang;
}
