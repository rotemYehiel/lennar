import { SET_LANGUAGE } from "../../constants/actionType";

export const setLanguage = (language) => {
  return async (dispatch) => {
    dispatch({ type: SET_LANGUAGE, payload: language });
  };
};
