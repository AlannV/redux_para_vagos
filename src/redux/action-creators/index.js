import axios from "axios";
import { GET_ALL_CHARACTERS } from "../action-types/index";
const { REACT_APP_GET_ALL_CHARACTERS_URL } = process.env;

export const getAllCharacters = () => {
  return async (dispatch) => {
    try {
      let response = await axios.get(REACT_APP_GET_ALL_CHARACTERS_URL);
      return dispatch({
        type: GET_ALL_CHARACTERS,
        payload: response.data.results,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
