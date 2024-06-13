import {
  CHANGE_USERS_DISPLAY,
  GET_USERS,
  GET_USERS_FAILURE,
  GET_USERS_SUCCESS,
} from "../../constants/actionType";
import { LIST } from "../../constants/keys";

const initialState = {
  users: null,
  loading: false,
  error: null,
  usersDisplay: LIST,
};

const userManagementReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CHANGE_USERS_DISPLAY:
      return {
        ...state,
        usersDisplay: action.payload,
      };

    default:
      return state;
  }
};

export default userManagementReducer;
