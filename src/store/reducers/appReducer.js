import { SET_LANGUAGE } from "../../constants/actionType";

const initialState = {
  language: "en",
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };

    default:
      return state;
  }
};

export default appReducer;
