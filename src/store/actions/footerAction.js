import { TOGGLE_CHECKBOX_ELEMENT } from "../../constants/actionType";

export const toggleCheckboxElement = (element) => {
  return async (dispatch) => {
    dispatch({ type: TOGGLE_CHECKBOX_ELEMENT, payload: element });
  };
};
