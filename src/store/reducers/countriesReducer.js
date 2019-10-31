import { ADD_COUNTRY, EDIT_COUNTRY, DELETE_COUNTRY } from "../../actions";

const initialState = [
  {
    id: "ag56",
    slug: "thailande",
    name: "Thailande",
    currency: "Baht",
    language: "lm85",
    visa: false,
    jetlag: 4
  },
  {
    id: "ju87",
    slug: "mexique",
    name: "Mexique",
    currency: "Pesos",
    language: "lm53",
    visa: false,
    jetlag: 6
  },
  {
    id: "gc45",
    slug: "martinique",
    name: "Martinique",
    currency: "Euro",
    language: "lm90",
    visa: false,
    jetlag: 6
  },
  {
    id: "tn29",
    slug: "bresil",
    name: "Brésil",
    currency: "Real",
    language: "lm67",
    visa: false,
    jetlag: 5
  },
  {
    id: "vb98",
    slug: "inde",
    name: "Inde",
    currency: "Roupie",
    language: "lm49",
    visa: true,
    jetlag: 3
  }
];

export const countriesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_COUNTRY:
      return [...state, payload];
    case EDIT_COUNTRY:
      // copy state global
      const stateCopy = [...state];
      // get index
      const index = stateCopy.findIndex(item => item.id === payload.id);
      // set new object (payload) to stateCopy by index
      // stateCopy[index] = {
      //   ...stateCopy[index],
      //   ...payload
      // };
      stateCopy[index] = payload;
      return stateCopy;
    case DELETE_COUNTRY:
      return state.filter(country => country.id !== payload);
    default:
      return state;
  }
};
