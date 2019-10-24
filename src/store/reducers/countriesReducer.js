import cuid from "cuid";
import slugify from "slugify";
import { ADD_COUNTRY, EDIT_COUNTRY, DELETE_COUNTRY } from "../../actions";

//const initialState = [];
const initialState = [
  {
    id: slugify("Ile Maurice-" + cuid.slug(), { lower: true }),
    name: "Thailande",
    currency: "Baht",
    visa: false,
    jetlag: 4
  },
  {
    id: slugify("Mexique-" + cuid.slug(), { lower: true }),
    name: "Mexique",
    currency: "Pesos",
    visa: false,
    jetlag: 6
  },
  {
    id: slugify("Martinique-" + cuid.slug(), { lower: true }),
    name: "Martinique",
    currency: "Euro",
    visa: false,
    jetlag: 6
  },
  {
    id: slugify("Brésil-" + cuid.slug(), { lower: true }),
    name: "Brésil",
    currency: "Real",
    visa: false,
    jetlag: 5
  },
  {
    id: slugify("Inde-" + cuid.slug(), { lower: true }),
    name: "Inde",
    currency: "Roupie",
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
      return state.filter(c => c.id !== payload);
    default:
      return state;
  }
};
