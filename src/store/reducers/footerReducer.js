import { TOGGLE_CHECKBOX_ELEMENT } from "../../constants/actionType";

const initialState = {
  isCookies: false,
  isNotifications: false,
  isGeneralPolicies: false,
};

const footerReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CHECKBOX_ELEMENT:
      return {
        ...state,
        [action.payload]: !state[action.payload],
      };

    default:
      return state;
  }
};

export default footerReducer;
