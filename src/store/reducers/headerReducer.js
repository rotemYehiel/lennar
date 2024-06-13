import {
  GET_USERDETAILS,
  GET_USERDETAILS_FAILURE,
  GET_USERDETAILS_SUCCESS,
  SET_FEEDBACK,
} from "../../constants/actionType";

const initialState = {
  userDetails: null,
  loading: false,
  error: null,
  feedback: "",
};

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERDETAILS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_USERDETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        userDetails: action.payload,
      };
    case GET_USERDETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_FEEDBACK:
      return {
        ...state,
        feedback: action.payload,
      };
    default:
      return state;
  }
};

export default headerReducer;
