import { ADD_LANG, DELETE_LANG } from "../../actions";

const initialState = [
  {
    id: "lm90",
    name: "Français"
  },
  {
    id: "lm21",
    name: "Anglais"
  },
  {
    id: "lm67",
    name: "Portugais"
  },
  {
    id: "lm53",
    name: "Espagnol"
  },
  {
    id: "lm85",
    name: "Thaï"
  },
  {
    id: "lm04",
    name: "Chinois"
  },
  {
    id: "lm49",
    name: "Tamoul"
  },
  {
    id: "lm19",
    name: "Japonais"
  }
];

export const languagesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_LANG:
      return [...state, payload];
    case DELETE_LANG:
      return state.filter(lang => lang.id !== payload);
    default:
      return state;
  }
};
