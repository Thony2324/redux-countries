//import { ADD_COUNTRY, EDIT_COUNTRY, DELETE_COUNTRY } from "../../actions";

const initialState = [
  {
    id: "lm90",
    slug: "fr",
    name: "Français"
  },
  {
    id: "lm21",
    slug: "en",
    name: "Anglais"
  },
  {
    id: "lm67",
    slug: "pt",
    name: "Portugais"
  },
  {
    id: "lm53",
    slug: "es",
    name: "Espagnol"
  },
  {
    id: "lm85",
    slug: "th",
    name: "Thaï"
  },
  {
    id: "lm04",
    slug: "ch",
    name: "Chinois"
  },
  {
    id: "lm49",
    slug: "ta",
    name: "Tamoul"
  },
  {
    id: "lm19",
    slug: "ja",
    name: "Japonais"
  }
];

export const languagesReducer = (state = initialState, action) => {
  //const { type, payload } = action;

  switch (action.type) {
    default:
      return state;
  }
};
