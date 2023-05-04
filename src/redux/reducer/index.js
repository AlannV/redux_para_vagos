import { GET_ALL_CHARACTERS } from "../action-types";

const initialState = {
  allCharacters: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CHARACTERS:
      return {
        ...state,
        allCharacters: action.payload,
      };
    default:
      return state;
  }
}
