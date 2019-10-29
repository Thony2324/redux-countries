export const ADD_COUNTRY = "ADD_COUNTRY";
export const EDIT_COUNTRY = "EDIT_COUNTRY";
export const DELETE_COUNTRY = "DELETE_COUNTRY";

// Add country
export const addCountry = (
  countryId,
  countrySlug,
  countryName,
  countryCurrency,
  countryLanguage,
  countryJetlag,
  countryVisa
) => {
  return {
    type: ADD_COUNTRY,
    payload: {
      id: countryId,
      slug: countrySlug,
      name: countryName,
      currency: countryCurrency,
      language: countryLanguage,
      jetlag: countryJetlag,
      visa: countryVisa
    }
  };
};

// Edit country
export const editCountry = (
  countryId,
  countrySlug,
  countryName,
  countryCurrency,
  countryLanguage,
  countryJetlag,
  countryVisa
) => {
  return {
    type: EDIT_COUNTRY,
    payload: {
      id: countryId,
      slug: countrySlug,
      name: countryName,
      currency: countryCurrency,
      language: countryLanguage,
      jetlag: countryJetlag,
      visa: countryVisa
    }
  };
};

// Delete country
export const deleteCountry = countryId => {
  return {
    type: DELETE_COUNTRY,
    payload: countryId
  };
};
